import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container ml-60px">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {/* <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span className="text-muted">© 2024 Company, Inc</span>
        </div> */}

        <footer>
          <div class="footer-top">
            <div class="container">
              <div class="footer-day-time">
                <div class="row">
                  <div class="col-md-8">
                    <ul>
                      <li>Opening Hours: Mon - Friday: 8AM - 5PM</li>
                      <li>Sunday: 8:00 AM - 12:00 PM</li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <div class="phone-no">
                      <a href="tel:+12 34 56 78 90">
                        <i class="fa fa-mobile" aria-hidden="true"></i>Call +91
                        7024435567
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <h4>About us</h4>
                  <p>
                    Lorem Ipsum ist einfach Dummy-Text der Druck- und
                    Satzindustrie. Lorem Ipsum war der Standard der Branche
                    Lorem Ipsum ist einfach Dummy-Text der Druck- und
                    Satzindustrie. Lorem Ipsum war der Standard der Branche{" "}
                  </p>
                </div>

                <div class="col-md-4">
                  <h4>Information</h4>
                  <ul class="address1">
                    <li>
                      <i class="fa fa-map-marker"></i> scheme No. 78, vijay
                      Nagar , indore{" "}
                    </li>
                    <li>
                      <i class="fa fa-envelope"></i>
                      <a href="mailto:#">info@foodie.com</a>
                    </li>
                    <li>
                      <i class="fa fa-mobile" aria-hidden="true"></i>{" "}
                      <a href="tel:12 34 56 78 90">8723262382</a>
                    </li>
                  </ul>
                </div>
               
              </div>
              <div className="footer-bottom">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-sm-12 text-center">
                        <p className="copyright">
                          © {new Date().getFullYear()} Your Foodie App. All
                          rights reserved.<br></br>
                          ~ made by aayushi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}
