import { Text, View, Dimensions, TouchableOpacity, Image } from "react-native";
import Marquee from "../../src/Components/MarqueeTag";
import { styles } from "../../src/Stylessheet/HomeStyle";
import { DoctorCard } from "../../src/Components/DoctorCard";
import { COLORS } from "../../src/Constant/Theme";
import { useContext } from "react";
import { AppContext } from "@/src/Context/AppContext";
const { height } = Dimensions.get("window");

export default function Index() {
  const { GetDoctorCards } = useContext(AppContext);
  return (
    <View style={styles.container}>
      {/*  Main Banner Section  */}
      <View style={styles.Banner}>
        <View style={styles.Bannerleft}>
          <Text style={styles.mainText}>
            Your Health is {"\n"}
            Our Priority, {"\n"} Book appointments with trusted doctors easily.
          </Text>
          <TouchableOpacity style={styles.ButtonStyle}>
            <Text
              style={styles.buttonText}
              onPress={() => alert("Go To Another Page Of Doctors ")}
            >
              Book
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BannerRight}>
          <Image
            source={require("../../assets/DoctorImages/Header.png")}
            style={styles.image}
          />
        </View>
      </View>
      {/*  MarQuee Tag Section It  will be Dynamic in Future  */}
      <View
        style={{
          backgroundColor: COLORS.MEDIUM_BLUE,
          height: height * 0.035,
          // padding: 1,
        }}
      >
        <Marquee />
      </View>

      {/*   AtLeast  6 Doctor Cards Are Avaliable  */}
      <DoctorCard Data={GetDoctorCards.slice(0, 6)} />
    </View>
  );
}
