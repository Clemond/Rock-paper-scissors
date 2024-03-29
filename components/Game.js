import { Text, View, StyleSheet, Image, Button } from "react-native";
import { useState, useEffect } from "react";

export default function Game() {
  const [userPick, setUserPick] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 3)
  );
  const [computerPick, setComputerPick] = useState("");
  const [winner, setWinner] = useState("");

  function generateComputerPick() {
    setRandomNumber(Math.floor(Math.random() * 3));

    //Dubbla uppsettningar val för att upplevelsen ska kännas mer "random"
    randomNumber === 0 ? setComputerPick("Rock") : "";
    randomNumber === 1 ? setComputerPick("Paper") : "";
    randomNumber === 2 ? setComputerPick("Scissors") : "";
    randomNumber === 3 ? setComputerPick("Rock") : "";
    randomNumber === 4 ? setComputerPick("Paper") : "";
    randomNumber === 5 ? setComputerPick("Scissors") : "";
  }

  function decideWinner() {
    computerPick === "Rock" && userPick === "Rock" ? setWinner("Draw!") : "";
    computerPick === "Paper" && userPick === "Rock"
      ? setWinner("Computer!")
      : "";
    computerPick === "Scissors" && userPick === "Rock" ? setWinner("You!") : "";
    computerPick === "Rock" && userPick === "Paper" ? setWinner("You!") : "";
    computerPick === "Paper" && userPick === "Paper" ? setWinner("Draw!") : "";
    computerPick === "Scissors" && userPick === "Paper"
      ? setWinner("Computer!")
      : "";

    computerPick === "Rock" && userPick === "Scissors"
      ? setWinner("Computer!")
      : "";
    computerPick === "Paper" && userPick === "Scissors"
      ? setWinner("You!")
      : "";
    computerPick === "Scissors" && userPick === "Scissors"
      ? setWinner("Draw!")
      : "";
  }

  //useEffect används för att decideWinner ska uppdateras varje gång
  //sidan renderas om, på detta sätt kan winner alltid renderas direkt för
  //spelaren.
  useEffect(() => {
    decideWinner();
  });

  return (
    <View>
      <View style={style.Iconrow}>
        <View>
          <Image style={style.rock} source={require("../src/img/rock2.png")} />
          <Button
            //testID för ett test i jest
            testID="button-test"
            title="Rock"
            color="#6A8D73"
            onPress={() => {
              setUserPick("Rock");
              generateComputerPick();
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
              setUserPick("Paper");
              generateComputerPick();
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
              setUserPick("Scissors");
              generateComputerPick();
            }}
          />
        </View>
      </View>
      <Text
        //testID för ett test i jest
        testID="pick-test"
      >
        You choose: {userPick}
      </Text>
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
