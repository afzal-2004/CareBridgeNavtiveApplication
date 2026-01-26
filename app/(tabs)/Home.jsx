import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Marquee from "../../src/Components/MarqueeTag";
import { styles } from "./Stylessheet/HomeStyle";
import { COLORS } from "../../src/Constant/Theme";

const { height } = Dimensions.get("window");

const Data = [1, 2, 3, 4, 5, 6];
export default function Index() {
  return (
    <View style={styles.container}>
      {/*  Main Banner Section  */}
      <View style={styles.Banner}>
        <View style={styles.Bannerleft}>
          <Text style={styles.mainText}>
            Your Health is {"\n"}
            Our Priority, {"\n"} Book appointments with trusted doctors easily.
          </Text>
          <TouchableOpacity style={styles.ButtonStyle}>
            <Text
              style={styles.buttonText}
              onPress={() => alert("Go To Another Page Of Doctors ")}
            >
              Book
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BannerRight}>
          <Image
            source={require("../../assets/DoctorImages/Header.png")}
            style={styles.image}
          />
        </View>
      </View>
      {/*  MarQuee Tag Section It  will be Dynamic in Future  */}
      <View
        style={{
          backgroundColor: COLORS.MEDIUM_BLUE,
          height: height * 0.035,
          // padding: 1,
        }}
      >
        <Marquee />
      </View>

      {/*   AtLeast  6 Doctor Cards Are Avaliable  */}
      <View style={{ flex: 1, paddingBottom: "70" }}>
        <Text style={styles.Speciality}>
          All Your Specialists, One Platform
        </Text>
        <FlatList
          key="grid"
          data={Data}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.DoctorCard}>
              <Text>{item}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{
            padding: 10,
          }}
          ListFooterComponent={
            <View style={{ marginBottom: 50 }}>
              {" "}
              {/* space for tab bar */}
              <TouchableOpacity
                style={styles.LoadMoreTouchableOpacticty}
                onPress={() => alert("Go To Another Page Of Doctors ")}
              >
                <Text>Load More ..</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </View>
  );
}
