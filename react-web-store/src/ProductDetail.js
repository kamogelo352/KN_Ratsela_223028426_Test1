import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.title} width="200"/>
      
      <h2>{product.title}</h2>

      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
  );
}

export default ProductDetail;
