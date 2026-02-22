import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Loginstyles } from "../../src/Stylessheet/AuthStyle";
import DataService from "../../src/api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("09520752384");
  const [password, setPassword] = useState("123");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        ToastAndroid.show("Please enter all fields", ToastAndroid.TOP);
        return;
      }
      const Payload = {
        emailOrMobile: email,
        Password: password,
      };
      // console.log("This is Payload i am Sending In backend Side ", Payload);
      // console.log(
      //   "This is All of My methid I am ble To get Here ",
      //   DataService,
      // );
      const res = await DataService.CustomerLogin(Payload);
      console.log(
        "This is My Responce Come From the Login Api",
        JSON.stringify(res.data),
      );
      if (res?.data?.token) {
        const { token, safeUser } = res.data;
        await AsyncStorage.setItem("userToken", token);

        // Store user profile
        await AsyncStorage.setItem("userProfile", JSON.stringify(safeUser));
        console.log(" User profile And Token stored successfully");
        ToastAndroid.show("Login Successful ✅", ToastAndroid.LONG);
        router.replace("/(tabs)/Home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={Loginstyles.container}>
      <Text style={Loginstyles.title}>Welcome Back 👋</Text>
      <Text style={Loginstyles.subtitle}>Login to continue</Text>

      {/* Email */}
      <View style={Loginstyles.inputBox}>
        <Ionicons name="mail-outline" size={20} color="#888" />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={Loginstyles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password */}
      <View style={Loginstyles.inputBox}>
        <Ionicons name="lock-closed-outline" size={20} color="#888" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          style={Loginstyles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={Loginstyles.button} onPress={handleLogin}>
        <Text style={Loginstyles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Register */}
      <View style={Loginstyles.footer}>
        <Text style={Loginstyles.footerText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/auth/Register")}>
          <Text style={Loginstyles.link}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
