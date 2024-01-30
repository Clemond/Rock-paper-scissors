import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import { useState } from "react";

export default function PickItem() {
  let [pick, setPick] = useState("");

  function userWeapon(value) {
    setPick(value);
  }

  return (
    <View>
      <View style={style.Iconrow}>
        <View>
          <Image style={style.rock} source={require("../src/img/rock2.png")} />
          <Button
            title="Rock"
            color="#6A8D73"
            onPress={() => setPick("Rock")}
          />
        </View>
        <View>
          <Image
            style={style.paper}
            source={require("../src/img/Paper2.png")}
          />
          <Button
            title="Paper"
            color="#6A8D73"
            onPress={() => setPick("Paper")}
          />
        </View>
        <View>
          <Image
            style={style.scissors}
            source={require("../src/img/scissors.png")}
          />
          <Button
            title="Scissors"
            color="#6A8D73"
            onPress={() => setPick("Scissors")}
          />
        </View>
      </View>
      <Text>You choose: {pick}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  Iconrow: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-evenly",
    backgroundColor: "#E4FFE1",
    borderBottomWidth: 1,
  },
  rock: {
    width: 100,
    height: 100,
    borderWidth: 1,
  },
  paper: {
    width: 100,
    height: 100,
    marginTop: 0,
    borderWidth: 1,
  },
  scissors: {
    width: 100,
    height: 100,
    borderWidth: 1,
  },
});
