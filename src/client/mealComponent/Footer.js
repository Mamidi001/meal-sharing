import React from "react";
import "./Meal.css";
function Footer() {
  return (
    <footer className="footer">
      <nav className="nav">
        <div className="row">
          <h4 className="footer-heading">Features</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Paid with mobile</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
            <li>
              <a href="#">Contact Support</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <h4 className="footer-heading">Support</h4>
          <ul>
            <li>
              <a href="#" id="home-menu">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <h4 className="footer-heading">Trending</h4>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <h4 className="footer-heading">Get to know us</h4>
          <ul>
            <li>
              <a href="#">Corporate</a>
            </li>
            <li>
              <a href="#">Agency</a>
            </li>
            <li>
              <a href="#">eCommerce</a>
            </li>
            <li>
              <a href="#">Personal</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
export default Footer;
