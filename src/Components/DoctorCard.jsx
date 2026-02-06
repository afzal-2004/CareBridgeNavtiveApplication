import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "../Stylessheet/HomeStyle";
import { Link } from "expo-router";

export const DoctorCard = ({ Data }) => {
  return (
    <View style={{ flex: 1, paddingBottom: "70" }}>
      <Text style={styles.Speciality}>All Your Specialists, One Platform</Text>
      <FlatList
        key="grid"
        data={Data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.DoctorCard}>
            <Link href={`/DoctorDetails/${item?._id}`}>
              <Image
                source={{ uri: item.avtar }}
                style={{ width: "100%", height: "100%" }}
              />
            </Link>

           
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{
          padding: 10,
        }}
        ListFooterComponent={
          <View style={{ marginBottom: 50 }}>
            <TouchableOpacity
              style={styles.LoadMoreTouchableOpacticty}
              onPress={() => alert("Go To Another Page Of Doctors ")}
            >
              {/* <Text>Load More ..</Text> */}
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};
