import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { COLORS, SPACING } from "@/src/Constant/Theme";
import { ContextProvider } from "../src/Context/ContextProvider";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ContextProvider>
        <StatusBar style="light" />
        <View style={styles.container}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="auth" />
            <Stack.Screen name="(tabs)" />
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
