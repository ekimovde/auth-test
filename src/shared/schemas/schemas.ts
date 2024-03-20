import { object, string, ref } from "yup";

const EMAIL_REGEX =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const NAME_REGEX = /^[а-яёА-ЯЁa-zA-Z]+$/u;
const PASSWORD_REGEX = /^(?=.*[!@#$%^&*()\-_+={}[\]\\|/<>.,;])/;
const CYRILLIC_REGEX = /[а-яА-ЯёЁ]/g;

const containsPattern = (value: string, pattern: RegExp): boolean => {
  const matches = value.match(pattern);

  return !matches || !matches[0];
};

export const loginSchema = object({
  email: string()
    .required("Поле обязательно для заполнения")
    .matches(EMAIL_REGEX, "Проверьте правильность введенных данных"),
  password: string()
    .required("Поле обязательно для заполнения")
    .min(8, "Проверьте правильность введенных данных")
    .matches(PASSWORD_REGEX, "Проверьте правильность введенных данных")
    .matches(/^(?=.*\d)/, "Проверьте правильность введенных данных")
    .test(
      "is-latin",
      "Проверьте правильность введенных данных",
      (value: string) => containsPattern(value, CYRILLIC_REGEX)
    ),
});

export const registerSchema = object().shape(
  {
    name: string()
      .required("Поле обязательно для заполнения")
      .matches(NAME_REGEX, "Разрешена только кириллица или латиница")
      .default("")
      .min(1, "Поле обязательно для заполнения")
      .max(20, "Поле обязательно для заполнения"),
    email: string()
      .required("Поле обязательно для заполнения")
      .matches(EMAIL_REGEX, "Проверьте правильность введенных данных")
      .test(
        "is-latin",
        "Проверьте правильность введенных данных",
        (value: string) => containsPattern(value, CYRILLIC_REGEX)
      ),
    password: string()
      .required("Поле обязательно для заполнения")
      .min(8, "Пароль должен быть не менее 8 символов")
      .matches(
        PASSWORD_REGEX,
        "Пароль должен содержать хотя бы один специальный символ"
      )
      .matches(/^(?=.*\d)/, "Пароль должен содержать хотя бы одну цифру")
      .test("is-latin", "Разрешены только латинские символы", (value: string) =>
        containsPattern(value, CYRILLIC_REGEX)
      ),
    password_confirmation: string()
      .required("Поле обязательно для заполнения")
      .oneOf([ref("password")], "Пароли должны совпадать"),
  },
  [["middleName", "middleName"]]
);
