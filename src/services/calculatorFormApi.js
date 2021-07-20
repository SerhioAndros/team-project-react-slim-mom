import axios from "axios";
import NotificationError from "../components/pnotify/Pnotify";

const BASE_URL = "https://slimmom-backend.goit.global";

const calculatorFormApi = async (token, id, formState) => {
 axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

 try {
  const response = await axios.post(`${BASE_URL}/daily-rate/${id}`, {
   ...formState,
  });
  return response;
 } catch (error) {
  NotificationError("Некорестный запрос на сервер", error);
 }
};

export default calculatorFormApi;
