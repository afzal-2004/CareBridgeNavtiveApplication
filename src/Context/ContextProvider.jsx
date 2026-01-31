import { AppContext } from "./AppContext";
import React from "react";
import { useEffect, useState } from "react";
import DataService from "../api/Api";

export const ContextProvider = ({ children }) => {
  const [GetDoctorCards, setGetDoctorCards] = useState(null);

  const getAllDoctorsList = async () => {
    try {
      console.log("🔥 getAllDoctorsList CALLED");

      const res = await DataService.GetAllDoctorList();

      //   console.log("✅ RESPONSE JSON:\n", JSON.stringify(res.data, null, 2));

      setGetDoctorCards(res.data);
    } catch (error) {
      console.log("❌ API ERROR:", error?.response || error);
    }
  };

  useEffect(() => {
    getAllDoctorsList();
  }, []);

  const values = {
    GetDoctorCards,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
