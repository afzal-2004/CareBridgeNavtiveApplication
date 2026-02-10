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

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // ✅ after successful registration
    router.replace("/auth/Login");
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

      {/* Confirm Password */}
      <View style={RegisterStyles.inputBox}>
        <Ionicons name="lock-open-outline" size={20} color="#888" />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          style={RegisterStyles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
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
