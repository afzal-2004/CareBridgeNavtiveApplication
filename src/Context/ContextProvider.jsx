import { AppContext } from "./AppContext";
import { useEffect, useState } from "react";
import DataService from "../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ContextProvider = ({ children }) => {
  const [GetDoctorCards, setGetDoctorCards] = useState(null);
  const [userProfile, setuserProfile] = useState([]);

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
  useEffect(() => {
    const getuserProfile = async () => {
      const getUser = await AsyncStorage.getItem("userProfile");
      if (getUser) {
        const parsedUserdata = JSON.parse(getUser);
        console.log("This is User profile data ", parsedUserdata);
        setuserProfile(parsedUserdata);
      }
    };
    getuserProfile();
  }, []);

  const values = {
    GetDoctorCards,
    userProfile,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
