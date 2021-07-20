import { transformString } from "../../shared/transformString/transformString";
import axios from "axios";

const BASE_URL = "https://slimmom-backend.goit.global";

const getDailyRate = async (values) => {
  const data = transformString(values);
  const res = await axios.post(`${BASE_URL}/daily-rate`, data);
  return res;
};

export { getDailyRate };
