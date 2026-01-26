import { Animated, Dimensions, Text } from "react-native";
import { useRef, useEffect } from "react";
import { COLORS } from "../Constant/Theme";

const { width } = Dimensions.get("window");

export default function Marquee() {
  const translateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -width,
        duration: 10000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <Animated.Text
      style={{
        transform: [{ translateX }],
        // backgroundColor: COLORS.MEDIUM_BLUE,
        padding: 2,
        color: "#FFFFFF",
        fontSize: 16,
        whiteSpace: "nowrap",
      }}
    >
      Your Health, Our Priority — Book appointments easily
    </Animated.Text>
  );
}
