import { createAction } from "@reduxjs/toolkit";

const getCalculateDaylyCalory = createAction(
 "calculator/getCalculateDaylyCalory"
);
const getCalculateDaylyCaloryError = createAction(
 "calculator/getCalculateDaylyCalory"
);

export { getCalculateDaylyCalory, getCalculateDaylyCaloryError };