import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-all">
      <div className="container">
          <a className="navbar-brand brand" href="/">&nbsp;</a>
          <div className="offcanvas offcanvas-end w-50" tabindex="-1" id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-body" id="offcanvasRight">
                  <div className="navbar-nav ms-auto" style={{ fontSize: 14, marginLeft: 800 }}>
                      <a className="nav-link" aria-current="page" href="/OurService">Our Services</a>
                      <a className="nav-link" href="/WhyUs">Why Us</a>
                      <a className="nav-link" href="/Testimoni">Testimonial</a>
                      <a className="nav-link" href="/FAQ" tabindex="-1" aria-disabled="true">FAQ</a>
                  </div>
              </div>
          </div>
      </div>
  </nav>

    )
}

export default Navbar;