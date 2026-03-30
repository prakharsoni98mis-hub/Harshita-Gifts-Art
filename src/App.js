import React, { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 499 },
    { id: 2, name: "Product 2", price: 999 },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (!name || !price) return;
    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>My Product Dashboard</h1>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addProduct}>Add</button>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
