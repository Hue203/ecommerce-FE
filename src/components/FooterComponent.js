import React from "react";

const FooterComponent = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <a href="/" className="logo" alt="logo">
              <img src="" alt="Juice" />
            </a>
            <ul className="directory">
              <li>
                <p>Company</p>
                <a href="/" className="cm-link">
                  About
                </a>
                <a href="/" className="cm-link">
                  Jobs
                </a>
                <a href="/" className="cm-link">
                  Blogs
                </a>
              </li>
              <li>
                <p>Communities</p>
                <a href="/" className="cm-link">
                  For Artists
                </a>
                <a href="/" className="cm-link">
                  Developers
                </a>
                <a href="/" className="cm-link">
                  Advertising
                </a>
                <a href="/" className="cm-link">
                  Investors
                </a>
                <a href="/" className="cm-link">
                  Vendors
                </a>
              </li>
              <li>
                <p>Usefull Links</p>
                <span>
                  <a href="/" className="cm-link">
                    Support
                  </a>
                </span>
                <span>
                  <a href="/" className="cm-link">
                    Web Player
                  </a>
                </span>
                <a href="/" className="cm-link">
                  Free Mobile App
                </a>
                <a href="/" className="cm-link">
                  2020 Wrapped
                </a>
              </li>
            </ul>
          </div>
          <div class="social">
            <a href="/">
              <img src="./img/ig.png" alt="Instagram" />
            </a>
            <a href="/">
              <img src="./img/twitter.png" alt="Twitter" />
            </a>
            <a href="/">
              <img src="./img/fb.png" alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="container container-right">
          <span>USA</span>
          <img src="./img/usa.jpg" alt="USA Flag" />
        </div>
        <div className="container container-center">
          <div className="about-us">
            <a href="/" className="cm-link">
              Legal
            </a>
            <a href="/" className="cm-link">
              Privacy Center
            </a>
            <a href="/" className="cm-link">
              Privacy Policy
            </a>
            <a href="/" className="cm-link">
              Cookies
            </a>
            <a href="/" className="cm-link">
              About Ads
            </a>
            <a href="/" className="cm-link">
              Additional CA Privacy Disciosures
            </a>
          </div>
          <p className="copyright">&#169;2021 Blended Juice Bar</p>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
