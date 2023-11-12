import * as z from "zod";

const GRP_REGEX = /^[А-Я]{2}\d+-\d+[А-Я]$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,24}$/;

export const UserValidation = z.object({
  username: z
    .string()
    .min(3, { message: "Минимум 3 символа" })
    .max(15, { message: "Максимум 15 символов" })
    .nonempty(),
  first_name: z
    .string()
    .min(3, { message: "Минимум 3 символа" })
    .max(15, { message: "Максимум 15 символов" })
    .nonempty(),
  last_name: z
    .string()
    .min(3, { message: "Минимум 3 символа" })
    .max(15, { message: "Максимум 15 символов" })
    .nonempty(),
  group: z
    .string()
    .regex(GRP_REGEX, { message: "Неправильный формат группы" })
    .nonempty(),
  email: z
    .string()
    .email({ message: "Неверный адрес электронной почты" })
    .nonempty(),
  password: z
    .string()
    .regex(PWD_REGEX, { message: "Неправильный формат пароля" })
    .nonempty(),
});
