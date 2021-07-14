import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "./MainForm.module.css";
import { SignupSchema } from "./validationSchema";
import { getDailyRate } from "../../services/apiService/getDailyRate";

const MainForm = () => {
  return (
    <div className={styled.bg}>
      <h1 className={styled.titleH}>
        Просчитай свою суточную норму калорий прямо сейчас
      </h1>
      <Formik
        initialValues={{
          height: "",
          age: "",
          weight: "",
          desiredWeight: "",
          bloodType: "1",
        }}

        onSubmit={getDailyRate}

        validationSchema={SignupSchema}
      >
        {() => (
          <Form className={styled.formInput}>
            <div className={styled.containerDivFlex}>
              <div className={styled.containerDivFlexLeft}>
                <label htmlFor="height" className={styled.label}>
                  Рост*
                </label>
                <Field
                  id="height"
                  name="height"
                  type="text"
                  className={styled.field}
                />
                <ErrorMessage
                  name="height"
                  component="div"
                  className={styled.errorLowerDiv}
                />

                <label htmlFor="age" className={styled.label}>
                  Возраст*
                </label>
                <Field id="age" name="age" className={styled.field} />
                <ErrorMessage
                  name="age"
                  component="div"
                  className={styled.errorLowerDiv}
                />

                <label htmlFor="weight" className={styled.label}>
                  Текущий вес*
                </label>
                <Field
                  id="weight"
                  name="weight"
                  type="text"
                  className={styled.field}
                />
                <ErrorMessage
                  name="weight"
                  component="div"
                  className={styled.errorLowerDiv}
                />
              </div>
              <div className={styled.containerDivFlexRight}>
                <label htmlFor="desiredWeight" className={styled.label}>
                  Желаемый вес*
                </label>
                <Field
                  id="desiredWeight"
                  name="desiredWeight"
                  type="text"
                  className={styled.field}
                />
                <ErrorMessage
                  name="desiredWeight"
                  component="div"
                  className={styled.errorLowerDiv}
                />

                <div id="my-radio-group" className={styled.label}>
                  Группа крови*
                </div>
                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className={styled.radioContainer}
                >
                  <label className={styled.labelRadio}>
                    <Field
                      type="radio"
                      name="bloodType"
                      value="1"
                      checked="checked"
                      className={styled.fieldRadio}
                    />
                    <span></span> 1
                  </label>
                  <label className={styled.labelRadio}>
                    <Field
                      type="radio"
                      name="bloodType"
                      value="2"
                      className={styled.fieldRadio}
                    />
                    <span></span> 2
                  </label>
                  <label className={styled.labelRadio}>
                    <Field
                      type="radio"
                      name="bloodType"
                      value="3"
                      className={styled.fieldRadio}
                    />
                    <span></span> 3
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="bloodType"
                      value="4"
                      className={styled.fieldRadio}
                    />
                    <span></span> 4
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className={styled.buttonForm}>
              Похудеть
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MainForm;
