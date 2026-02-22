import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { AppContext } from "../../src/Context/AppContext";
import { ProfileStyles } from "../../src/Stylessheet/HomeStyle";
import AntDesign from "@expo/vector-icons/AntDesign";

const Profile = () => {
  const { userProfile } = useContext(AppContext);
  return (
    <ScrollView contentContainerStyle={ProfileStyles.container}>
      <Text style={ProfileStyles.title}>My Profile</Text>

      {/* Name */}
      <View style={ProfileStyles.inputBox}>
        <Text style={ProfileStyles.label}>Full Name</Text>
        <TextInput
          value={userProfile?.name}
          style={ProfileStyles.input}
          editable={false}
        />
      </View>

      {/* Email */}
      <View style={ProfileStyles.inputBox}>
        <Text style={ProfileStyles.label}>Email</Text>
        <TextInput
          value={userProfile?.email}
          style={ProfileStyles.input}
          editable={false}
        />
      </View>

      {/* Mobile */}
      <View style={ProfileStyles.inputBox}>
        <Text style={ProfileStyles.label}>Mobile Number</Text>
        <TextInput
          value={userProfile?.MobileNumber}
          style={ProfileStyles.input}
          editable={false}
        />
      </View>

      {/* Gender */}
      <View style={ProfileStyles.inputBox}>
        <Text style={ProfileStyles.label}>Gender</Text>
        <TextInput
          value={userProfile?.Gender || "Not Specified"}
          style={ProfileStyles.input}
          editable={false}
        />
      </View>

      {/* DOB */}
      <View style={ProfileStyles.inputBox}>
        <Text style={ProfileStyles.label}>Date of Birth</Text>
        <TextInput
          value={userProfile?.DOB || "Not Specified"}
          style={ProfileStyles.input}
          editable={false}
        />
      </View>

      {/* Address */}
      <View style={ProfileStyles.inputBox}>
        <Text style={ProfileStyles.label}>Address</Text>
        <TextInput
          value={userProfile?.Addreess || "Not Provided"}
          style={ProfileStyles.input}
          editable={false}
        />
      </View>

      <TouchableOpacity
        style={ProfileStyles.Logoutbtn}
        onPress={() => alert("Are You Sure You want Logout From here ")}
      >
        <Text style={ProfileStyles?.LogoutText}>Logout</Text>
        <AntDesign name="logout" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
