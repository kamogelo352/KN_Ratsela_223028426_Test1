import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      const data = await res.json();
      setProducts(data);

    };
    loadProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <div
          key={product.id}
          style={{
            marginBottom: "20px",
            padding: "15px",
            border: "2px solid #D8BFD8",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            backgroundColor: "#F8F8FF"
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            width="80"
            style={{ border: "2px solid #D8BFD8", borderRadius: "5px" }}
          />
          <div>
            <h4 style={{ margin: "0 0 5px 0", color: "#4B0082" }}>{product.title}</h4>



            <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>Price: ${product.price}</p>
            
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
