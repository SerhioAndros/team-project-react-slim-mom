import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operation";
import { FormControl } from "../loginForm/LoginForm";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import css from "./RegistrationForm.module.css";

const initialForm = { username: "", email: "", password: "" };

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("*Поле обязательно!")
    .min(2, "* Минимум 2 символa"),
  email: Yup.string()
    .email(`* E-mail адрес введен неверно!`)
    .min(5, "* Минимум 5 символов")
    .required("*Поле обязательно!"),
  password: Yup.string()
    .required("* Поле обязательно!")
    .min(3, "* Минимум 3 символа")
    .max(20, "* Максимум 20 символов"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onRegister = (state) => dispatch(register(state));

  const handleSubmit = (values) => {
    onRegister(values);
  };

  return (
    <div className={css.form_container}>
      <h2 className={css.form_title}>РЕГИСТРАЦИЯ</h2>

      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form>
          <FormControl label="Имя *" type="text" name="username" />
          <FormControl label="Почта *" name="email" type="email" />
          <FormControl label="Пароль *" type="password" name="password" />
          <div className={css.btn_container}>
            <button type="submit" className={css.form_btn}>
              Регистрация
            </button>
            <Link to="/login" exact>
              {" "}
              <button type="button" className={css.secondary_form_btn}>
                Вход
              </button>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
