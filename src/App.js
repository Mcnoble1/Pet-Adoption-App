import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
      {/* <Pet name="Fido" animal="Dog" breed="Husky" />
      <Pet name="Camila" animal="Cat" breed="Persian" />
      <Pet name="Rescue" animal="Bird" breed="Labrador" /> */}
    </div>
  )
}

render(<App />, document.getElementById("root"));
