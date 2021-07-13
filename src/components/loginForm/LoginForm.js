import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operation";
///////////////////////////////Formik, YUP /////////////////////////////////////////////////
import { ErrorMessage, Form, Formik, useField } from "formik";
import * as Yup from "yup";

const initialForm = { email: "", password: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Поле должно содержать  cимвол '@'")
    .required("Поле обязательное!"),
  password: Yup.string()
    .required("Поле обязательное!")
    .min(3, "Must be exactly 3 digits")
    .max(10, "Must be exactly 10 digits"),
});

export const FormControl = ({ label, ...props }) => {
  const id = useMemo(() => Math.floor(Math.random() * 99999).toString(), []);
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
        <input
          id={id}
          className={meta.error && meta.touched ? "input input-error" : "input"}
          {...field}
          {...props}
        />
        <div className='box-error-message'>
          {meta.error && meta.touched && (
            <p className="error-message">{meta.error}</p>
          )}
        </div>
      </label>
    </div>
  );
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const onLogin = (state) => dispatch(logIn(state));

  const handleSubmit = (values) => {
    onLogin(values);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <FormControl label="Почта *" name="email" type="email" />
          <FormControl label="Пароль *" type="password" name="password" />
          <button type="submit" className="btn">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
