import { AppContext } from "./AppContext";
import { useEffect, useState } from "react";
import DataService from "../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";
import { router } from "expo-router";

export const ContextProvider = ({ children }) => {
  const [GetDoctorCards, setGetDoctorCards] = useState(null);
  const [userProfile, setuserProfile] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const loadUser = async () => {
      const user = await AsyncStorage.getItem("userProfile");

      if (user) {
        setuserProfile(JSON.parse(user));
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  const LogoutFunction = async () => {
    await AsyncStorage.multiRemove(["userToken", "userProfile"]);
    ToastAndroid.show("Logout  Successful", ToastAndroid.LONG);
    router.replace("/auth");
  };

  const values = {
    GetDoctorCards,
    userProfile,
    LogoutFunction,
    loading,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
