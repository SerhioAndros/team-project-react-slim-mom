import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operation";
import { FormControl } from "../loginForm/LoginForm";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import css from './RegistrationForm.module.css'

const initialForm = { username: "", email: "", password: "" };

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Поле обязательное!")
    .min(2, "Must be exactly 2 digits"),
  email: Yup.string()
    .email("Поле должно содержать  cимвол '@'")
    .required("Поле обязательное!"),
  password: Yup.string()
    .required("Поле обязательное!")
    .min(3, "Must be exactly 3 digits")
    .max(10, "Must be exactly 10 digits"),
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
            handleSubmit(values)}}
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
