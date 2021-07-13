import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  height: Yup.string()
    .required("Обязательное поле ввода")
    .matches(/^[0-9]+$/, "Введите числовое значение от 2 до 3 символов")
    .min(2, "Введите числовое значение от 2 до 3 символов")
    .max(3, "Введите числовое значение от 2 до 3 символов"),
  age: Yup.string()
    .required("Обязательное поле ввода")
    .matches(/^[0-9]+$/, "Введите числовое значение от 2 до 3 символов")
    .min(2, "Введите числовое значение от 2 до 3 символов")
    .max(3, "Введите числовое значение от 2 до 3 символов"),
  weight: Yup.string()
    .required("Обязательное поле ввода")
    .matches(/^[0-9]+$/, "Введите числовое значение от 2 до 3 символов")
    .min(2, "Введите числовое значение от 2 до 3 символов")
    .max(3, "Введите числовое значение от 2 до 3 символов"),
  desiredWeight: Yup.string()
    .required("Обязательное поле ввода")
    .matches(/^[0-9]+$/, "Введите числовое значение от 2 до 3 символов")
    .min(2, "Введите числовое значение от 2 до 3 символов")
    .max(3, "Введите числовое значение от 2 до 3 символов"),
});
