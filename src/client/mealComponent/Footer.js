import React from "react";
import "./Meal.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <nav className="nav">
        <div className="row">
          <h4 className="footer-heading">Features</h4>
          <ul>
            <Link>
              <li>Help Center</li>
              <li>Paid with mobile</li>
              <li>Status</li>
              <li>Contact Support</li>
            </Link>
          </ul>
        </div>
        <div className="row">
          <h4 className="footer-heading">Support</h4>
          <ul>
            <Link>
              <li>Home</li>
              <li>About</li>
              <li>FAQ's</li>
              <li>Support</li>
            </Link>
          </ul>
        </div>
        <div className="row">
          <h4 className="footer-heading">Trending</h4>
          <ul>
            <Link>
              <li>Shop</li>
              <li>Portfolio</li>
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="row">
          <h4 className="footer-heading">Get to know us</h4>
          <ul>
            <Link>
              <li>Corporate</li>
              <li>Agency</li>
              <li>eCommerce</li>
              <li>Personal</li>
            </Link>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
export default Footer;
