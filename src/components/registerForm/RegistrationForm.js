import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operation";
import { FormControl } from "../loginForm/LoginForm";
import * as Yup from "yup";

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
    <div className="form-container">
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
          <button type="submit" className="btn">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
