import "./Footer.scss";
import MainLogo from "../../assets/skillex-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-nav footer-nav-primary">
        <div className="footer-nav__text-content">
          <img src={MainLogo} alt="Footer Skillex logo"></img>
          <p class="footer-nav__text-content__decription">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="footer-nav__links">
          <ul>
            <li>
              <a href="/" className="footer-nav__links-item">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="footer-nav__links-item">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="footer-nav__links-item">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="footer-nav__links-item">
                Product
              </a>
            </li>
            <li>
              <a href="/" className="footer-nav__links-item">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-nav__quick-connect">
          <h3 className="footer-nav__quick-connect__title">Quick Contact</h3>
          <p className="footer-nav__quick-connect__contact">
            <span>info@skillex.ai</span>
          </p>
        </div>
      </div>
      <div className="container footer-nav-secondary">
        <p className="footer-nav-secondary__copyright">
          © 2023 Skillex.ai. All Rights Reserved.
        </p>
        <ul className="footer-nav-secondary__links">
          <li className="footer-nav-secondary__links-list-item">
            <a href="/" className="footer-nav-secondary__links-item">Privacy Policy</a>
          </li>
          <li className="footer-nav-secondary__links-list-item">
            <a href="/" className="footer-nav-secondary__links-item">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
