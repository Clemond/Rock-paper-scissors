import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Game />

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
