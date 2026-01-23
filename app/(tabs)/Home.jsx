import { Text, View, StyleSheet, Dimensions } from "react-native";

import { COLORS } from "../../src/Constant/Theme";

const { height } = Dimensions.get("window");
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Home Page </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
