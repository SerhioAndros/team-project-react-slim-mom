import calculatorFormApi from "../../services/calculatorFormApi";
import {
 getCalculateDailyCalory,
 getCalculateDailyCaloryError,
} from "./calculatorActions";

export const calculatorOperation =
 (formState) => async (dispatch, getState) => {
  const token = getState().auth.token;
  const id = getState().auth.user.id;
  try {
   const responce = await calculatorFormApi(token, id, formState);
   dispatch(getCalculateDailyCalory(responce.data));
  } catch (error) {
   dispatch(getCalculateDailyCaloryError(error));
  }
 };
