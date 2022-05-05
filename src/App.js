import React from "react";
import { render } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Adopt Me"),
    React.createElement(Pet, { name: "Camila", animal: "Dog", breed: "Husky" }),
    React.createElement(Pet, {
      name: "Rescue",
      animal: "Cat",
      breed: "Persian",
    }),
    React.createElement(Pet, {
      name: "Bingo",
      animal: "Bird",
      breed: "Labrador",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
