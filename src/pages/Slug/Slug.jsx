import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Slug() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products
  const getData = async () => { 
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (products.length === 0) return <div>Loading...</div>;

  const item = products.find(p => p.id == id);

  if (!item) return <div>Product not found</div>;

  return (
<div className="slug-wrapper">
  <div className="slug-card">
    <div className="slug-image-box">
      <img src={item.image} alt={item.title} />
    </div>
    <div className="slug-info">
      <h1>{item.title}</h1>
      <p className="price">${item.price}</p>
      <p className="desc">{item.description}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  </div>
</div>


  );
}

export default Slug;
