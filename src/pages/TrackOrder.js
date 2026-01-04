import axios from "axios";
import { useState } from "react";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const trackOrder = () => {
    axios.get(`http://localhost:3000/orders/${orderId}`)
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus("Order not found"));
  };

  return (
    <div>
      <h2>Track Order</h2>

      <input placeholder="Enter Order ID"
        onChange={e => setOrderId(e.target.value)}
      />

      <button onClick={trackOrder}>Track</button>

      <p>Status: {status}</p>
    </div>
  );
}

export default TrackOrder;