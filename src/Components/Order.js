import React, { useState } from "react";
import "../css/styles-order.css";

function Order() {
  const [order, setOrder] = useState("pancakes");

  return (
    <div className="order-container">
      <h1 className="order-heading">Choose Your Favorite Order</h1>
      <p className="order-selected">
        My favorite order is <strong>{order}</strong>!
      </p>
      <div className="button-container">
        {["waffles", "pancakes", "bacon", "sausage"].map((item) => (
          <button
            key={item}
            className={`order-button ${order === item ? "selected" : ""}`}
            onClick={() => setOrder(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Order;
