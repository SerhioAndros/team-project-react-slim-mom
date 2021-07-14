import React from "react";
import MainForm from "../components/mainForm/MainForm";
import { getDailyRate } from "../services/apiService/getDailyRate";

const HomePage = () => {
  
  return (
   <MainForm
    onSubmit={getDailyRate}
    initialValues={{
     height: "",
     age: "",
     weight: "",
     desiredWeight: "",
     bloodType: "1",
    }}
   />
  );
};

export default HomePage;
