import React from "react";
import './Footer.css'
function Footer() {
  return <div>
    <div>
      <footer className="footer">
        <div className="wrapper">
          <div className="bloc">
            <ul>
              <h4 className="h4-text">Company</h4>
              <li className="text">
                <Link to="/about">About us blog</Link>
              </li>
              <li className="text">
                <Link to="/about">Blog</Link>
              </li>
              <li className="text">
                <Link to="/about">Returns</Link>
              </li>
              <li className="text">
                <Link to="/about">Order status </Link>
              </li>
            </ul>
          </div>
          <div className="bloc">
            <ul>
              <h4 className="h4-text">Info</h4>
              <li className="text">
                <Link to="/about">How it works?</Link>
              </li>
              <li className="text">
                <Link to="/about">our promises</Link>
              </li>
              <li className="text">
                <Link to="/about">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="bloc">
            <ul>
              <h4 className="h4-text">Contact us</h4>
              <li className="text">
                <Link to="/about">123 Main Street, Anytown,USA</Link>
              </li>
              <li className="text">
                <Link to="/about">+1 (555) 123-4567</Link>
              </li>
              <li className="text">
                <Link to="/about">TechHeimSupport@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div className="bloc">
            <ul>
              <h4 className="h4-text">Sign up for News and updates</h4>
              <input type="text" placeholder="E-mail Address" />
            </ul>
          </div>
        </div>
        <div className="img">
          <div className="img2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
              alt=""
            />
          </div>
          <div className="img2">
            <img
              src="https://marketing.uz/uploads/articles/1192/article-original.png"
              alt=""
            />
          </div>
          <div className="img2">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png"
              alt=""
            />
          </div>
          <div className="img2">
            <img
              src="https://data.cbonds.info/organisations_logos/24325/1609314895logo-mastercard-mobile.png"
              alt=""
            />
          </div>
        </div>
      </footer>
      <div className="color">
        <p className="name1">2023 Tech Heim. </p>
        <div className="flex">
          <p className="name">cookie settings</p>
          <p className="name">Privacy Policy</p>
          <p className="name">Terms and Conditions </p>
          <p className="name">Imprint </p>
        </div>
      </div>
      
    </div>
  </div>;
}

export default Footer;
