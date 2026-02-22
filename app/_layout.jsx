import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { COLORS, SPACING } from "@/src/Constant/Theme";
import { ContextProvider } from "../src/Context/ContextProvider";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [isAuthencation, setisAuthencation] = useState(false);
 
  useEffect(() => {
    const getUserTaoken = async () => {
      const Token = await AsyncStorage.getItem("userToken");
      if (Token) {
        console.log("Jwt Token", Token);
        setisAuthencation(true);
      }
    };
    getUserTaoken();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ContextProvider>
        <StatusBar style="light" />
        <View style={styles.container}>
          <Stack screenOptions={{ headerShown: false }}>
            {isAuthencation ? (
              <Stack.Screen name="auth" />
            ) : (
              <Stack.Screen name="(tabs)" />
            )}
          </Stack>
        </View>
      </ContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.xs,
  },
});
