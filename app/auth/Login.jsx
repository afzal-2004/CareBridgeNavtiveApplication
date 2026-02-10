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
import { BaseApi } from "../../src/api/Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      ToastAndroid.show("Please enter all fields", ToastAndroid.TOP);

      const Payload = {
        emailOrMobile: email,
        Password: password,
      };
      try {
        const res = BaseApi.CustomerLogin(Payload);
        console.log(
          "This is My Responce Come From the Login Api ",
          JSON.stringify(res),
        );
      } catch (error) {}
      return;
    }

    // ✅ after successful login
    router.replace("/(tabs)/Home");
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
