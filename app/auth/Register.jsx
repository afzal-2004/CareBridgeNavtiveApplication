import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { RegisterStyles } from "../../src/Stylessheet/AuthStyle";
import DataService from "../../src/api/Api";
import { ToastAndroid } from "react-native";

const Register = () => {
  const [name, setName] = useState("Afzal");
  const [email, setEmail] = useState("Sample@gmail.com");
  const [password, setPassword] = useState("1234");
  const [mobileNumber, setmobileNumber] = useState("1234567890");

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const Payload = {
      name: name,
      email: email,
      Mobilenumner: mobileNumber,
      Password: password,
      profilePicture: "",
      Address: "",
      Gender: "",
      DOB: "",
    };

    console.log("This is The Payload We Send In backend Side ", Payload);
    try {
      const res = await DataService.CustomerRegister(Payload);
      console.log(
        "This is My Responce Come From the Register Api",
        JSON.stringify(res.data),
      );
      if (res?.data?.RegisterUser) {
        ToastAndroid.show("Registeered Sucefully", ToastAndroid.LONG);
        // ToastAndroid.LONG("Register Sucefull");
        router.replace("/auth/Login");
      }
    } catch (error) {
      console.log(error);
    }

    // ✅ after successful registration
  };

  return (
    <ScrollView contentContainerStyle={RegisterStyles.container}>
      <Text style={RegisterStyles.title}>Create Account 🚀</Text>
      <Text style={RegisterStyles.subtitle}>Sign up to get started</Text>

      {/* Name */}
      <View style={RegisterStyles.inputBox}>
        <Ionicons name="person-outline" size={20} color="#888" />
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#999"
          style={RegisterStyles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email */}
      <View style={RegisterStyles.inputBox}>
        <Ionicons name="mail-outline" size={20} color="#888" />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={RegisterStyles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/*  Mobile Number */}

      <View style={RegisterStyles.inputBox}>
        <Ionicons name="mail-outline" size={20} color="#888" />
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor="#999"
          style={RegisterStyles.input}
          value={mobileNumber}
          onChangeText={setmobileNumber}
        />
      </View>

      {/* Password */}
      <View style={RegisterStyles.inputBox}>
        <Ionicons name="lock-closed-outline" size={20} color="#888" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          style={RegisterStyles.input}
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

      {/* Register Button */}
      <TouchableOpacity style={RegisterStyles.button} onPress={handleRegister}>
        <Text style={RegisterStyles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Login Redirect */}
      <View style={RegisterStyles.footer}>
        <Text style={RegisterStyles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.replace("/auth/Login")}>
          <Text style={RegisterStyles.link}> Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Register;
