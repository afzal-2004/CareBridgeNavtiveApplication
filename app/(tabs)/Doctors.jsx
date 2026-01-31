import { View, Text } from "react-native";
import { DoctorCard } from "../../src/Components/DoctorCard";
import { useContext } from "react";
import { AppContext } from "../../src/Context/AppContext";

const Doctors = () => {
  const { GetDoctorCards } = useContext(AppContext);
  return <DoctorCard Data={GetDoctorCards} />;
};

export default Doctors;
