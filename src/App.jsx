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
import ColorBoxList from "./ColorBoxList";
import EmojiClicker from "./EmojiClicker";
import Player from "./Player";
import ScoreKeeper from "./ScoreKeeper";
import Die from "./Die";
import Dice from "./Dice";
import LuckyN from "./LuckyN";
import Box from "./Box";
import BoxList from "./BoxList";
import Form from "./Form";
import ShoppingItem from "./ShoppingItem";
import ShoppingList from "./ShoppingList";

// const sum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

// const colors = [
//   "red",
//   "blue",
//   "green",
//   "yellow",
//   "orange",
//   "purple",
//   "pink",
//   "brown",
//   "black",
//   "white",
//   "gray",
//   "cyan",
//   "magenta",
//   "lime",
//   "maroon",
//   "navy",
//   "olive",
//   "teal",
//   "aqua",
//   "violet",
//   "indigo",
//   "gold",
//   "silver",
//   "coral",
// ];

const list = [
  { name: "eggs", quantity: 12, completed: true },
  { name: "milk", quantity: 1, completed: false },
  { name: "bacon", quantity: 15, completed: false },
  { name: "avocados from mexico", quantity: 1, completed: true },
  { name: "broccoli", quantity: 0, completed: true },
];

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
      {/* <Counter /> */}
      {/* <HappySad /> */}
      {/* <ColorBoxList colors={colors} /> */}
      {/* <EmojiClicker /> */}
      {/* <Player number={1} /> */}
      {/* <ScoreKeeper numPlayers={3} /> */}
      {/* <ScoreKeeper numPlayers={5} target={3} /> */}
      {/* <Dice dice={[2, 4, 5]} /> */}
      {/* <LuckyN winCheck={(dice) => sum(dice) < 4} />
      <LuckyN
        winCheck={(dice) => {
          for (let i = 0; i < dice.length - 1; i++) {
            if (dice[i] === dice[i + 1]) return true;
            else return false;
          }
        }}
      /> */}
      {/* <LuckyN
        numDice={10}
        winCheck={(dice) => {
          return sum(dice) < 4;
        }}
      /> */}
      {/* <BoxList /> */}
      {/* <Form /> */}
      {/* <ShoppingItem item={{ name: "eggs", quantity: 12, completed: true }} /> */}
      <ShoppingList list={list} />
    </>
  );
}

export default App;
