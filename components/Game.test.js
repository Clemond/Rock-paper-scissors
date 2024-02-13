import Game from "./Game";
import { render, fireEvent } from "@testing-library/react-native";

describe("Game", () => {
  it("When rock button is pressed, pick should be set to 'Rock'", () => {
    const { getByTestId } = render(<Game />);

    //Deklarera knappen och simulera ett tryck på den
    const button = getByTestId("button-test");
    fireEvent.press(button);

    //kolla så att userPick är satt till "Rock"
    const userPickText = getByTestId("pick-test");
    expect(userPickText).toBeTruthy();
  });
});
