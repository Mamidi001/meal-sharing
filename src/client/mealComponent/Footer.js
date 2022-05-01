import React from "react";
import "./Meal.css";
function Footer() {
  return (
    <footer class="footer">
      <nav class="nav">
        <div class="row">
          <h4 class="footer-heading">Features</h4>
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
        <div class="row">
          <h4 class="footer-heading">Support</h4>
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
        <div class="row">
          <h4 class="footer-heading">Trending</h4>
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
        <div class="row">
          <h4 class="footer-heading">Get to know us</h4>
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
        {/* <div class="row">
          <h4 class="footer-heading">Instagram Photos</h4>
          <input
            class="footer-input"
            type="text"
            placeholder="Fetching photos from instagram..."
          />
        </div> */}
      </nav>
    </footer>
    //<div className="footer">

    /* <ul>
          <li>About us</li>
          <li>Career</li>
          <li>Find us</li>
        </ul>
        <div>
          <ul>
            <li>About us</li>
            <li>Career</li>
            <li>Find us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>About us</li>
            <li>Career</li>
            <li>Find us</li>
          </ul>
        </div>
      </div>
    // */
  );
}
export default Footer;
