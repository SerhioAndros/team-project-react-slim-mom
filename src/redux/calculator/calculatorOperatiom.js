import calculatorСalorieFormApi from "../../services/calculatorFormApi";
import {
 getCalculateDaylyCalory,
 getCalculateDaylyCaloryError,
} from "./calculatorActions";

export const calculatorСalorieFormOperation =
 (formState) => async (dispatch, getState) => {
  const token = getState().auth.token;
  const id = getState().auth.user.id;
  try {
   const responce = await calculatorСalorieFormApi(token,id, formState);
   dispatch(getCalculateDaylyCalory(responce));
  } catch (error) {
   dispatch(getCalculateDaylyCaloryError(error));
  }
 };
