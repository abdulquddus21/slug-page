import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">MyStore</div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="actions">
        <button className="login-btn">Login</button>
      </div>

      <div className="menu-icon">
        ☰
      </div>
    </header>
  );
}
