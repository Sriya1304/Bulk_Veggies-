import axios from "axios";
import { useState } from "react";

function PlaceOrder() {
  const [order, setOrder] = useState({
    buyer_name: "",
    product_name: "",
    quantity: "",
    address: ""
  });

  const submitOrder = () => {
    axios.post("http://localhost:3000/orders", order)
      .then(res => alert("Order Placed! Order ID: " + res.data.orderId))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Place Order</h2>

      <input placeholder="Buyer Name"
        onChange={e => setOrder({ ...order, buyer_name: e.target.value })}
      />

      <input placeholder="Product Name"
        onChange={e => setOrder({ ...order, product_name: e.target.value })}
      />

      <input placeholder="Quantity"
        onChange={e => setOrder({ ...order, quantity: e.target.value })}
      />

      <input placeholder="Address"
        onChange={e => setOrder({ ...order, address: e.target.value })}
      />

      <br /><br />
      <button onClick={submitOrder}>Place Order</button>
    </div>
  );
}

export default PlaceOrder;