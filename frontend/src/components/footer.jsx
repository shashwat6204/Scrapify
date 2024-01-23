import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Subscribe to Updates</h5>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email..."
              />
              <button
                className="btn btn-purple text-white"
                style={{
                  background: "#0c487f",
                  borderRadius: "0 20px 20px 0",
                }}
                type="button"
              >
                <AiOutlineSend />
              </button>
            </div>
          </div>
          <div className="col-md-4 border-start border-end text-center">
            <h5 className="text-uppercase mb-3">Explore More</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/how-it-works" className="text-white  footerunderline">
                <h5  style={{ color: "#0c487f" }}>How it Works</h5>
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white footerunderline" >
                <h5 style={{ color: "#0c487f" }}>FAQ</h5>
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white footerunderline">
                <h5 style={{ color: "#0c487f" }}>Contact Us</h5>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h5 className="text-uppercase mb-3">Connect With Us</h5>
            <a href="https://www.twitter.com/example" className="btn btn-link text-white footerunderline" target="_blank" rel="noopener noreferrer">
              <h5 style={{ color: "#0c487f" }}>Twitter</h5>
            </a>
            <a href="https://www.linkedin.com/example" className="btn btn-link text-white footerunderline" target="_blank" rel="noopener noreferrer">
              <h5 style={{ color: "#0c487f" }}>Facebook</h5>
            </a>
            <a href="https://github.com/example" className="btn btn-link text-white footerunderline" target="_blank" rel="noopener noreferrer">
              <h5 style={{ color: "#0c487f" }}>Instagram</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
