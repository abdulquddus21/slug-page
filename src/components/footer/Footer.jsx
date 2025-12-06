import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3 className="footer-title">MyStore</h3>
          <p className="footer-text">
            Quality products for the best prices. Shop smart, live better.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Menu</h4>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">Telegram</a>
          <a href="#">Facebook</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 MyStore — All Rights Reserved.
      </div>
    </footer>
  );
}
