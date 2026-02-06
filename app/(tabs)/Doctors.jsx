import { View, Text } from "react-native";
import { DoctorCard } from "../../src/Components/DoctorCard";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../src/Context/AppContext";
import { DoctorStyles } from "../../src/Stylessheet/HomeStyle";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

const Doctors = () => {
  const { GetDoctorCards } = useContext(AppContext);
  const [filter, setFilter] = useState(false);
  const [selectedOptionvalue, setselectedOptionvalue] = useState("ALL");
  const [Doctor, setDoctors] = useState([]);

  const FilterOption = [
    "ALL",
    "Cardiologist",
    "Pediatrician",
    "Neurologist",
    "Orthopedic ",
    "Dermatologist ",
    "Gynecologist ",
    "Endocrinologist",
    "Surgeon",
  ];

  useEffect(() => {
    setselectedOptionvalue("ALL");
  }, []);

  //  Filter value On The Bases Of Seleted Option

  const FilterDataBySeletedOption = async () => {
    try {
      if (selectedOptionvalue !== "ALL") {
        const Filtereddata = GetDoctorCards.filter((data) => {
          return data.speciality == selectedOptionvalue;
        });
        setDoctors(Filtereddata);
      } else {
        setDoctors(GetDoctorCards);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FilterDataBySeletedOption();
  }, [selectedOptionvalue]);

  return (
    <>
      <View>
        <View style={DoctorStyles.filtermain}>
          <Text style={DoctorStyles.TextColor}>
            <FontAwesome
              name="filter"
              size={24}
              color="black"
              onPress={() => {
                setFilter((prev) => !prev);
              }}
            />
          </Text>
        </View>
        {/* Filter Card Option  */}
        {filter && (
          <View style={DoctorStyles.filterOptionView}>
            <View style={DoctorStyles.Filtercard}>
              <View style={DoctorStyles.FilterCardContentlayout}>
                {FilterOption.map((data, i) => (
                  <>
                    <Text
                      key={i}
                      style={
                        selectedOptionvalue == data
                          ? DoctorStyles.selectedOption
                          : DoctorStyles.filtervalueStyle
                      }
                      onPress={() => {
                        setselectedOptionvalue(data);
                      }}
                    >
                      {data}
                    </Text>
                  </>
                ))}
              </View>
            </View>
          </View>
        )}
      </View>
      <DoctorCard Data={Doctor} />
    </>
  );
};

export default Doctors;
