import axios from "axios";
const BASE_URL = "https://slimmom-backend.goit.global";

 const calculatorFormApi = async (token, id, formState) => {
 axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

 try {
  const response = await axios.post(`${BASE_URL}/daily-rate/${id}`, {
   ...formState,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export default calculatorFormApi;