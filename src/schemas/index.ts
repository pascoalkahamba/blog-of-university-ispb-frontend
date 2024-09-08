import { z as zod } from "zod";

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

export { createStudentSchema };
