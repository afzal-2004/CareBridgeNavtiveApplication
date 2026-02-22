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

export const DoctorDetailsStyle = StyleSheet.create({
  imageBackgroud: {
    backgroundColor: COLORS.MEDIUM_BLUE,
    width: "100%",
    height: height * 0.4,
    borderRadius: 10,
  },
  CardDetailsText: {
    fontSize: 15,
    fontWeight: "700",
  },
  detailsContainer: {
    marginTop: height * 0.03,
    padding: 20,
    backgroundColor: "#fff",
  },

  doctorName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 10,
  },

  specialityBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#3B82F6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },

  specialityText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  quickInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  infoCard: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: "center",
  },

  infoLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 6,
    fontWeight: "500",
  },

  infoValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },

  section: {
    marginBottom: 20,
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#3B82F6",
  },

  sectionLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 8,
  },

  sectionContent: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 22,
  },

  aboutText: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 24,
    textAlign: "justify",
  },

  addressText: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 22,
    fontStyle: "italic",
  },

  appointmentSection: {
    marginBottom: 20,
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#10B981",
  },

  timeSlotContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  timeSlot: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#D1D5DB",
    minWidth: "22%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  SeletedTimeSlot: {
    backgroundColor: COLORS.MEDIUM_BLUE,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#D1D5DB",
    minWidth: "22%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    color: "white",
  },

  timeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },

  appointmentButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 25,
    marginBottom: 20,
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonIcon: {
    fontSize: 20,
    marginRight: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export const ProfileStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputBox: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  Logoutbtn: {
    backgroundColor: "#F44336",
    padding: 7,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    gap: 3,
  },
  LogoutText: {
    fontWeight: "600",
    color: "#fff",
  },
});
