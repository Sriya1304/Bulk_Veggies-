import axios from "axios";
import { useEffect, useState } from "react";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  const markDelivered = (id) => {
    axios.put(`http://localhost:3000/orders/${id}`)
      .then(() => alert("Order Delivered"));
  };

  return (
    <div>
      <h2>Admin Orders</h2>

      {orders.map(order => (
        <div key={order.id}>
          {order.buyer_name} | {order.product_name} | {order.status}

          {order.status === "Pending" && (
            <button onClick={() => markDelivered(order.id)}>
              Deliver
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminOrders;