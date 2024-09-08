"use client";

import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Divider,
  Anchor,
  Stack,
} from "@mantine/core";
import Link from "next/link";
import { zodResolver } from "mantine-form-zod-resolver";
import { loginStudentSchema } from "@/schemas";
import { TLoginStudentProps } from "@/@types";
import { notifications } from "@mantine/notifications";
import { useCreateAccount } from "@/hooks/useCreateAccount";
import { signinStudent } from "@/server";
import { ILoginResponse } from "@/interfaces";
import CustomButton from "../CustomButton";

export default function AuthSignin(props: PaperProps) {
  const { mutate, isPending } = useCreateAccount(
    signinStudent,
    showNotificationOnSuccess,
    showNotificationOnError
  );
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: zodResolver(loginStudentSchema),
  });

  const handleSubmit = (values: TLoginStudentProps) => mutate(values);

  function showNotificationOnSuccess(logged: ILoginResponse) {
    localStorage.setItem("currentUser", JSON.stringify(logged.user));
    localStorage.setItem("token", JSON.stringify(logged.token));
    notifications.show({
      title: "Fazer login",
      message: "Login feito com sucesso.",
      position: "top-right",
      color: "blue",
    });
    router.push("/dashboard");
    form.reset();
  }
  function showNotificationOnError() {
    notifications.show({
      title: "Fazer login",
      message: "Login não permitido verifique os dados e tente novamente.",
      position: "top-right",
      color: "red",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
  }

  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      {...props}
      className=" w-[35%] flex flex-col justify-center"
    >
      <Text size="lg" fw={500} className="text-center font-bold">
        Fazer Login
      </Text>

      <Divider label="Blog do ISPB" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            required
            label="Email"
            type="email"
            placeholder="pascoalkahamba25@gmail.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email}
            radius="md"
          />

          <PasswordInput
            required
            label="Senha"
            placeholder="Sua senha"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={form.errors.password}
            radius="md"
          />
          <Link
            href="/forgotPassword"
            className=" mt-[-10px] text-blue-500 hover:underline"
          >
            <span className="text-xs talic">Esqueceu a senha</span>
          </Link>
        </Stack>

        <Group justify="space-between" mt="xl">
          <Link href="/createAccount">
            <Anchor component="button" type="button" c="dimmed" size="xs">
              Não tenho uma conta? Cadastrar
            </Anchor>
          </Link>
          <CustomButton
            target="Entrar"
            targetPedding="Entrando"
            size="sm"
            radius="lg"
            type="submit"
            isPending={isPending}
          />
        </Group>
      </form>
    </Paper>
  );
}
