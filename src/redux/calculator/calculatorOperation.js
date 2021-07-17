import { useHistory } from "react-router";
import calculatorFormApi from "../../services/calculatorFormApi";
import { transformString } from "../../shared/transformString/transformString";
import { getCurrentUser } from "../auth/auth-operation";
import {
 getCalculateDailyCalory,
 getCalculateDailyCaloryError,
} from "./calculatorActions";

export const calculatorOperation =
 (formState) => async (dispatch, getState) => {
  const token = getState().auth.token;
  const id = getState().auth.user.id;
//   const history = useHistory();

  try {
   const numberValues = transformString(formState);
   const responce = await calculatorFormApi(token, id, numberValues);
   dispatch(getCalculateDailyCalory(responce.data));
   dispatch(getCurrentUser());
//    console.log(history);
//    history.push("/diary");
  } catch (error) {
   dispatch(getCalculateDailyCaloryError(error));
  }
 };
