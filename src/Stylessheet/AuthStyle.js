import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../Constant/Theme";
const { height } = Dimensions.get("window");

export const Loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  subtitle: {
    color: "#94A3B8",
    marginBottom: 32,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#2563EB",
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color: "#94A3B8",
  },
  link: {
    color: "#3B82F6",
    fontWeight: "600",
  },
});

export const RegisterStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0F172A",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  subtitle: {
    color: "#94A3B8",
    marginBottom: 32,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#2563EB",
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color: "#94A3B8",
  },
  link: {
    color: "#3B82F6",
    fontWeight: "600",
  },
});
