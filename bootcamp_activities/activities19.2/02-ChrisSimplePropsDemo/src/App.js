import React from "react";
import Title from "./components/Title";
import Food from "./components/Food";

function App() {
  return (
    <div>
      <Title>Menu</Title>
      <Food type="Cheeseburger" styleClass="burger" quality="amazing">Big Cheeseburger</Food>
      <Food type="Fries" styleClass="fries" quality="pretty good">Big Cheeseburger</Food>

    </div>
  );
}

export default App;
