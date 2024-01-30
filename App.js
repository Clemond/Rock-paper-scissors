import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import PickItem from "./components/PickItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <PickItem />

      {/* CHOICES WITH PICS AND BUTTONS */}
      {/* COMPUTER RANDOMIZER */}
      {/* GAME */}

      {/* WINNERCOUNT */}
      {/* PLAY AGAIN BUTTON */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4FDD9",
  },
});
