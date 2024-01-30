import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      {/* HEADER */}
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
