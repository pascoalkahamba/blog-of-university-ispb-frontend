"use client";

import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { useRouter } from "next/navigation";
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
import { useState } from "react";
import Link from "next/link";

export default function AuthCreateAccount(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const [value, setValue] = useState<Date | null>(null);
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleSubmit = () => {
    console.log("Every is Good");
    router.push("/signin");
  };

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
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            radius="md"
          />

          <TextInput
            required
            label="Email"
            placeholder="pascoalkahamba25@gmail.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
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
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          <PasswordInput
            required
            label="Confirma a senha"
            placeholder="Sua senha"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          <DateInput
            required
            value={value}
            onChange={setValue}
            label="Data de nascimento"
            placeholder="Digite sua data"
          />
          <Select
            mt="md"
            required
            comboboxProps={{ withinPortal: true }}
            data={["Masculino", "Femenino"]}
            placeholder="Escolha o genero"
            label="Selecione seu genero"
            classNames={classes}
          />

          <Checkbox
            label="Você é estudante do ISPB"
            checked={form.values.terms}
            onChange={(event) =>
              form.setFieldValue("terms", event.currentTarget.checked)
            }
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Link href="/signin">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              Já tenho uma conta? Entrar
            </Anchor>
          </Link>
          <Button type="submit" radius="xl">
            Cadastrar
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
