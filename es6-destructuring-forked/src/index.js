import animals, { useAnimals } from "./data";
import cars from "./practice";

const [cat, dog] = animals;

// const { name = "Fluffy", sound = "Purr" } = cat;

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// const {
//   FeedingRequirements: { food, water },
// } = cat;
// console.log(name);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

// let teslaTopSpeed = "hi";
// let teslaTopColour = "hble";
const [tesla, honda] = cars;

const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour],
} = tesla;

// const { hondaTopSpeed, hondaTopColour } = honda;

const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour],
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
