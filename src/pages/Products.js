import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}
    </div>
  );
}

export default Products;