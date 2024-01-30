import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome to Rock Paper Scissors</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6A8D73",
    height: 70,
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    paddingTop: 17,
  },
});
