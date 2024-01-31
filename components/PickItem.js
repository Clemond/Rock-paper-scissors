import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import { useState } from "react";

export default function PickItem() {
  const [pick, setPick] = useState("");

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 3)
  );

  const [computerPick, setComputerPick] = useState("");

  const [winner, setWinner] = useState("");

  function generateComputerNumber() {
    setRandomNumber(Math.floor(Math.random() * 6));

    randomNumber === 0 ? setComputerPick("Rock") : "";
    randomNumber === 1 ? setComputerPick("Paper") : "";
    randomNumber === 2 ? setComputerPick("Scissors") : "";
    randomNumber === 3 ? setComputerPick("Rock") : "";
    randomNumber === 4 ? setComputerPick("Paper") : "";
    randomNumber === 5 ? setComputerPick("Scissors") : "";
  }

  function decideWinner() {
    computerPick === "Rock" && pick === "Rock" ? setWinner("Draw!") : "";
    computerPick === "Paper" && pick === "Rock" ? setWinner("Computer!") : "";
    computerPick === "Scissors" && pick === "Rock" ? setWinner("You!") : "";

    computerPick === "Rock" && pick === "Paper" ? setWinner("You!") : "";
    computerPick === "Paper" && pick === "Paper" ? setWinner("Draw!") : "";
    computerPick === "Scissors" && pick === "Paper"
      ? setWinner("Computer!")
      : "";

    computerPick === "Rock" && pick === "Scissors"
      ? setWinner("Computer!")
      : "";
    computerPick === "Paper" && pick === "Scissors" ? setWinner("You!") : "";
    computerPick === "Scissors" && pick === "Scissors"
      ? setWinner("Draw!")
      : "";
  }

  return (
    <View>
      <View style={style.Iconrow}>
        <View>
          <Image style={style.rock} source={require("../src/img/rock2.png")} />
          <Button
            title="Rock"
            color="#6A8D73"
            onPress={() => {
              setPick("Rock");
              generateComputerNumber();
              decideWinner();
            }}
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
            onPress={() => {
              setPick("Paper");
              generateComputerNumber();
            }}
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
            onPress={() => {
              setPick("Scissors");
              generateComputerNumber();
            }}
          />
        </View>
      </View>
      <Text>You choose: {pick}</Text>
      <Button title="Play!" onPress={() => decideWinner()} />
      <Text>Computer choose: {computerPick} </Text>

      <Text>Winner: {winner}</Text>
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
