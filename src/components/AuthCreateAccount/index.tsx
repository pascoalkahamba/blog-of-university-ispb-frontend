"use client";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Select,
} from "@mantine/core";
import classes from "./styles.module.css";
import { zodResolver } from "mantine-form-zod-resolver";
import Link from "next/link";
import { useCreateAccount } from "@/hooks/useCreateAccount";
import { createdAccount, getAllCourses } from "@/server";
import { TCreateAccountProps } from "@/@types";
import { createStudentSchema } from "@/schemas";
import useGetEverything from "@/hooks/useGetEverything";
import { useMemo } from "react";

export default function AuthCreateAccount(props: PaperProps) {
  const router = useRouter();
  const { data: courses } = useGetEverything(getAllCourses, "allCourses");
  const { mutation } = useCreateAccount(
    createdAccount,
    showNotificationOnSuccess,
    showNotificationOnError
  );

  function showNotificationOnSuccess() {
    notifications.show({
      title: "Criação de cota",
      message: "Post criado com sucesso.",
      position: "top-right",
      color: "blue",
    });
    router.push("/signin");
    form.reset();
  }
  function showNotificationOnError() {
    notifications.show({
      title: "Criação de cota",
      message: "Algo deu errado verifique os dados e tente novamente.",
      position: "top-right",
      color: "red",
    });
  }

  const allCourses = useMemo(() => {
    return courses?.map(({ id, name }) => ({ value: `${id}`, label: name }));
  }, [courses]);

  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      firstPassword: "",
      secondPassword: "",
      registrationNumber: 0,
      courseId: 0,
      contact: 0,
      isStudent: true,
    },
    validate: zodResolver(createStudentSchema),
  });

  async function handleSubmit(values: TCreateAccountProps) {
    const {
      contact,
      email,
      firstPassword,
      secondPassword,
      isStudent,
      username,
      courseId,
      registrationNumber,
    } = values;

    if (firstPassword.trim() !== secondPassword.trim()) {
      notifications.show({
        title: "Criação de conta",
        message: "As senhas devem ser iguais.",
        position: "top-right",
        color: "red",
      });
      return;
    }
    console.log("values", values);
    mutation.mutate({
      contact,
      email,
      password: firstPassword,
      isStudent,
      username,
      courseId,
      registrationNumber,
    });
  }

  return (
    <Paper radius="md" p="xl" withBorder {...props} className=" w-[35%]">
      <Text size="lg" fw={500} className="text-center font-bold">
        Criar Conta
      </Text>

      <Divider label="Blog do ISPB" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Nome"
            required
            placeholder="Seu nome"
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue("username", event.currentTarget.value)
            }
            radius="md"
            error={form.errors.username}
          />

          <TextInput
            required
            label="Email"
            placeholder="pascoalkahamba25@gmail.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            radius="md"
            error={form.errors.email}
          />
          <div className="w-full flex items-center gap-2">
            <PasswordInput
              required
              label="Senha"
              placeholder="Sua senha"
              className="w-[50%]"
              value={form.values.firstPassword}
              onChange={(event) =>
                form.setFieldValue("firstPassword", event.currentTarget.value)
              }
              radius="md"
              error={form.errors.firstPassword}
            />

            <PasswordInput
              required
              label="Confirma a senha"
              placeholder="Sua senha"
              className="w-[50%]"
              value={form.values.secondPassword}
              onChange={(event) =>
                form.setFieldValue("secondPassword", event.currentTarget.value)
              }
              radius="md"
              error={form.errors.secondPassword}
            />
          </div>
          <TextInput
            required
            type="number"
            label="Número de telefone"
            placeholder="Sua senha"
            value={form.values.contact}
            onChange={(event) =>
              form.setFieldValue("contact", +event.currentTarget.value)
            }
            radius="md"
            error={form.errors.contact}
          />

          <TextInput
            required
            type="number"
            label="Número de matricula"
            placeholder="Sua senha"
            value={form.values.registrationNumber}
            onChange={(event) =>
              form.setFieldValue(
                "registrationNumber",
                +event.currentTarget.value
              )
            }
            radius="md"
            error={form.errors.registitionNumber}
          />

          <Select
            required
            label="Selecione seu curso"
            placeholder="Escolha um curso"
            value={`${form.values.courseId}`}
            className="self-start w-full"
            onChange={(value) => form.setFieldValue("courseId", Number(value))}
            data={allCourses}
            withAsterisk
            clearable
            error={form.errors.courseId}
            searchable
          />

          <Group justify="space-between" mt="xl">
            <Link href="/signin">
              <Anchor component="button" type="button" c="dimmed" size="xs">
                Já tenho uma conta? Entrar
              </Anchor>
            </Link>
            <Button type="submit" radius="xl">
              Cadastrar
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}
