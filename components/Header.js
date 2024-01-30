import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerMainText}>Rock Paper Scissors</Text>
      <Text style={styles.headerSecondText}>
        Welcome to the viritual rock, paper, scissors game where you play
        against the computer. Please make a choice below to start a new game
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6A8D73",
    height: 115,
    paddingTop: 10,
  },
  headerMainText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  headerSecondText: {
    fontSize: "0.9rem",
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
});
