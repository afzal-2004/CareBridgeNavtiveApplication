import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../Constant/Theme";
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
    backgroundColor: COLORS.MEDIUM_BLUE,
  },
  LoadMoreTouchableOpacticty: {
    marginTop: "20",
    alignItems: "center",
    width: "100%",
  },
});
export const DoctorStyles = StyleSheet.create({
  filtermain: {
    backgroundColor: COLORS.BLUE_DARK,
    width: "100%",
    height: height * 0.05,
    padding: 4,
    display: "flex",
    flexDirection: "row-reverse",
  },
  TextColor: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
  },
  filterOptionView: {
    marginTop: height * 0.37,
    position: "absolute",
    zIndex: 10,
    width: "80%",
    marginLeft: "10%",
    height: height * 0.4,
    display: "flex",
    flexDirection: "row",
  },
  Filtercard: {
    display: "flex",
    flexDirection: "row",

    height: "100%",
  },
  FilterCardContentlayout: {
    backgroundColor: "#373737",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-evenly",
    gap: 17,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "flex-start",
  },
  filtervalueStyle: {
    fontWeight: "500",
    fontSize: 15,
    color: "white",
    paddingLeft: 10,
    textTransform: "uppercase",
  },
  selectedOption: {
    backgroundColor: COLORS.BLUE_LIGHT,
    fontWeight: "500",
    fontSize: 15,
    color: "white",
    padding: 5,
    paddingLeft: 10,
    textTransform: "uppercase",
  },
});
