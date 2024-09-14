import { z as zod } from "zod";

const updateProfileSchema = zod.object({
  email: zod.string().email({ message: "Email invalido" }),
  departmentId: zod
    .number({
      message: "Este campo é obrigatorio e deve ser um número valido.",
    })
    .optional(),
  courseId: zod
    .number({
      message: "Este campo é obrigatorio e deve ser um número valido.",
    })
    .optional(),
  contact: zod
    .string()
    .min(9, { message: "Número deve ter no minimo 9 digitos." })
    .max(9, { message: "Número deve ter no maximo 9 digitos." }),
  username: zod
    .string()
    .min(6, { message: "Nome deve ter mais de seis caracteres." }),
  bio: zod
    .string()
    .min(12, { message: "Biografia deve ter mais de dozes caracteres." }),
  password: zod
    .string()
    .min(6, { message: "Senha deve ter mais de 6 caracteres." }),
});

const createStudentSchema = zod.object({
  username: zod
    .string()
    .min(6, "Nome do usuário deve ter mais de seis caracteres."),
  firstPassword: zod
    .string()
    .min(6, "Senha do usuário deve ter mais de seis caracteres."),
  secondPassword: zod
    .string()
    .min(6, "Senha do usuário deve ter mais de seis caracteres."),
  contact: zod.number().refine((val) => val.toString().length === 9, {
    message: "Número deve ter no minimo ou maximo 9 digitos.",
  }),
  registrationNumber: zod
    .number()
    .refine(
      (val) => val === null || val === undefined || val.toString().length >= 2,
      {
        message: "Número de matricula tem que ter no mínimo 2 caracteres.",
      }
    ),
  courseId: zod.number({ message: "Escolha um courso." }),
  email: zod.string().email({ message: "Email invalida." }),
  isStudent: zod.boolean(),
});

const loginStudentSchema = zod.object({
  email: zod.string().email({ message: "Email invalido" }),
  password: zod
    .string()
    .min(6, "Senha do usuário deve ter mais de seis caracteres."),
});

export { createStudentSchema, loginStudentSchema, updateProfileSchema };
