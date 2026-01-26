import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../.././src/Constant/Theme";
const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  Banner: {
    backgroundColor: COLORS.Secondary,
    height: height * 0.25,
    margin: 0,
    width: "100%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // Banner left Side Property

  Bannerleft: {
    width: "50%",
    padding: 10,
  },
  mainText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  ButtonStyle: {
    fontWeight: "bold",
    borderWidth: 2,
    width: "50%",
    alignItems: "center",
    backgroundColor: COLORS.MEDIUM_BLUE,
    padding: 2,
    color: "white",
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  //   Banner RightSide

  BannerRight: {
    width: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  //  DoctorCard Designs
  Speciality: {
    fontWeight: "bold",
    fontSize: 15,
    width: "100%",
    // borderWidth: 2,
    padding: 2,
    textAlign: "center",
    marginTop: 20, // FIX
  },
  DoctorCard: {
    width: "47%",
    height: height * 0.25,
    borderWidth: 1,
    borderRadius: 10,
  },
  LoadMoreTouchableOpacticty: {
    marginTop: "20",
    alignItems: "center",
    width: "100%",
  },
});
