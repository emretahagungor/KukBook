import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, dimensions } from "../assets/constans";

const ItemDetailScreen = () => {
  const openYoutube = async () => {
    const youtubeURL = "https://www.youtube.com/watch?v=wsZ_mjXk6Hg";

    const supported = await Linking.canOpenURL("youtube://");
    if (supported) {
      await Linking.openURL("youtube://"); // Eğer YouTube uygulaması varsa YouTube
    } else {
      await Linking.openURL(youtubeURL); // YouTube uygulaması yoksa tarayıcı
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.imageContainer}></View>
      <View style={styles.descriptions}>
        <Text style={styles.title}>İmam Bayıldı</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Food Materials: </Text>
        <Text style={styles.materialsText}>Datadan gelen mazeme</Text>
        <Text style={styles.materialsText}>Datadan gelen mazeme</Text>
        <Text style={styles.materialsText}>Datadan gelen mazeme</Text>
        <Text style={styles.subTitle}>How to make it?</Text>
      </View>
      <ScrollView style={{ flexGrow: 1 }}>
        <Text
          numberOfLines={22}
          style={{
            fontSize: 16,
            backgroundColor: colors.lightGreen,
            flex: 1,
            padding: 18,
            borderRadius: 20,
          }}
        >
          Önce malzemeleri marketten al eve götür poşetten çıkar tezgaha koy
          buzdolabına koyulacakları unutma daha sonra kesilecekleri kes
          baharatları uygun ölçülerde kaplara koy tava çıkar tavayı ısıt yağ koy
          üzerine kestiğin malzemeleri koy sonra kısık ateşte 323223 dakıka
          pişir ateşi kapatıp kapağı kapat bekle sigara iç bak tencereden yanık
          kokusu geliyorsa tuvalete git bir miktar sıç ellerini yıka sonra
          tekrar tencereden gelen kokuya bak halen yanık kokusu geliyorsa çöpe
          dök afiyet olsun
        </Text>
      </ScrollView>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Watch on Youtube</Text>
        <TouchableOpacity onPress={openYoutube}>
          <Image source={require("../../assets/youtube.png")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: dimensions.height / 3,
    backgroundColor: colors.orange,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  descriptions: {
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginStart: 16,
  },
  foodMaterials: {
    paddingHorizontal: 16,
  },
  materialsText: {
    fontWeight: "normal",
    fontSize: 18,
    marginStart: 22,
  },
});
