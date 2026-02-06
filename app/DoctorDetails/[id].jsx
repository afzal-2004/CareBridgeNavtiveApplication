import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import DataService from "../../src/api/Api";
import { DoctorDetailsStyle } from "../../src/Stylessheet/HomeStyle";

export default function DoctorDetails() {
  const { id } = useLocalSearchParams();
  const { height } = Dimensions.get("window"); // URL se ID milegi

  const [DoctorDetails, setDoctorDetails] = useState([]);
  const [SelectedTime, setSelectedTime] = useState("");
  const GetDoctorDetailsByid = async () => {
    try {
      const res = await DataService.GetDoctorDetailsById(id);
      // console.log(JSON.stringify(res.data?.Data?.data, null, 2));
      setDoctorDetails(res.data?.Data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetDoctorDetailsByid();
  }, [id]);

  return (
    <ScrollView>
      <View>
        <View style={DoctorDetailsStyle?.imageBackgroud}>
          <Image
            source={{ uri: DoctorDetails?.avtar }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={DoctorDetailsStyle.detailsContainer}>
          {/* Doctor Name */}
          <Text style={DoctorDetailsStyle.doctorName}>
            {DoctorDetails?.name}
          </Text>

          {/* Speciality Badge */}
          <View style={DoctorDetailsStyle.specialityBadge}>
            <Text style={DoctorDetailsStyle.specialityText}>
              {DoctorDetails?.speciality}
            </Text>
          </View>

          {/* Quick Info Cards */}
          <View style={DoctorDetailsStyle.quickInfoRow}>
            <View style={DoctorDetailsStyle.infoCard}>
              <Text style={DoctorDetailsStyle.infoLabel}>Experience</Text>
              <Text style={DoctorDetailsStyle.infoValue}>
                {DoctorDetails?.experience}+ years
              </Text>
            </View>
            <View style={DoctorDetailsStyle.infoCard}>
              <Text style={DoctorDetailsStyle.infoLabel}>Consultation</Text>
              <Text style={DoctorDetailsStyle.infoValue}>
                ₹{DoctorDetails?.doctorFees}
              </Text>
            </View>
          </View>

          {/* Degree */}
          <View style={DoctorDetailsStyle.section}>
            <Text style={DoctorDetailsStyle.sectionLabel}>
              🎓 Qualification
            </Text>
            <Text style={DoctorDetailsStyle.sectionContent}>
              {DoctorDetails?.degree}
            </Text>
          </View>

          {/* About */}
          <View style={DoctorDetailsStyle.section}>
            <Text style={DoctorDetailsStyle.sectionLabel}>📋 About</Text>
            <Text style={DoctorDetailsStyle.aboutText}>
              {DoctorDetails?.about}
            </Text>
          </View>

          {/* Contact */}
          <View style={DoctorDetailsStyle.section}>
            <Text style={DoctorDetailsStyle.sectionLabel}>📧 Contact</Text>
            <Text style={DoctorDetailsStyle.sectionContent}>
              {DoctorDetails?.email}
            </Text>
          </View>

          {/* Address */}
          <View style={DoctorDetailsStyle.section}>
            <Text style={DoctorDetailsStyle.sectionLabel}>
              📍 Clinic Address
            </Text>
            <Text style={DoctorDetailsStyle.addressText}>
              {DoctorDetails?.addresss}
            </Text>
          </View>

          {/* Appointment Time Section */}
          <View style={DoctorDetailsStyle.appointmentSection}>
            <Text style={DoctorDetailsStyle.sectionLabel}>
              🕒 Available Appointment Times
            </Text>

            <View style={DoctorDetailsStyle.timeSlotContainer}>
              {DoctorDetails?.appointmentTime?.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={
                    SelectedTime == time
                      ? DoctorDetailsStyle?.SeletedTimeSlot
                      : DoctorDetailsStyle.timeSlot
                  }
                  onPress={() => setSelectedTime(time)}
                >
                  <Text style={DoctorDetailsStyle.timeText}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Book Appointment Button */}
          <TouchableOpacity
            style={DoctorDetailsStyle.appointmentButton}
            // disabled={}
            onPress={() => alert("try To Book Appointment ")}
          >
            <View style={DoctorDetailsStyle.buttonContent}>
              <Text style={DoctorDetailsStyle.buttonIcon}>📅</Text>
              <Text style={DoctorDetailsStyle.buttonText}>
                Book Appointment
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
