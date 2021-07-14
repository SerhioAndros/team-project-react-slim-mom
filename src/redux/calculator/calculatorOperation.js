import calculatorFormApi from "../../services/calculatorFormApi";
import { transformString } from "../../shared/transformString/transformString";
import {
 getCalculateDailyCalory,
 getCalculateDailyCaloryError,
} from "./calculatorActions";

export const calculatorOperation =
 (formState) => async (dispatch, getState) => {
  const token = getState().auth.token;
  const id = getState().auth.user.id;
  try {
   const numberValues = transformString(formState);
   const responce = await calculatorFormApi(token, id, numberValues);
   dispatch(getCalculateDailyCalory(responce.data));
  } catch (error) {
   dispatch(getCalculateDailyCaloryError(error));
  }
 };
