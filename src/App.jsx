import "./App.css";
import React from "react";
import Greeter from "./Greeter";
import MapArray from "./MapArray";
import SlotMachine from "./SlotMachine";
import PropertyList from "./PropertyList";
import Launch from "./Launch";
import Clicker from "./Clicker";
import Counter from "./Counter";
import HappySad from "./HappySad";

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

function App() {
  return (
    <>
      {/* <Greeter person="Shaan" />
      <MapArray arr={["Volvo", "BMW", "Ford", "Mazda"]} /> */}
      {/* <SlotMachine val1="🍒" val2="🍒" val3="🍒" /> */}
      {/* <SlotMachine val1="🍒" val2="🍌" val3="🍒" /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <Launch /> */}
      {/* <Clicker message="hello" buttonText="click to see hello" /> */}
      {/* <Clicker message="hi" buttonText="click to see nothello" /> */}
      <Counter />
      {/* <HappySad /> */}
    </>
  );
}

export default App;
