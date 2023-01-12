import React, { useState } from "react";
 

function Item({ name, category }) {
  const[addCart, setAddCart] = useState(false)

  function handleCartClick() {
    setAddCart((addCart) => !addCart)
  }

  const cartShop = addCart ? "in-cart" : ""
  return (
    <li className={cartShop}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
