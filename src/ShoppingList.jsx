import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import ShoppingForm from "./ShoppingForm";

export default function ShoppingList({ list }) {
  const [shopList, setShopList] = useState(list);

  const modifyList = (data) => {
    setShopList((currData) => {
      return [...currData, data];
    });
  };

  return (
    <div>
      <ul>
        {shopList.map((item, i) => {
          return <ShoppingItem key={i} item={item} />;
        })}
      </ul>
      <ShoppingForm modify={modifyList} />
    </div>
  );
}
