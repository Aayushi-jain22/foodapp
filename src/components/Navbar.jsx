import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Cart from "../screens/Cart";
import Modal from "../Model"; // Import Modal component


import { useCart, useDispatchCart } from "../components/ContextReducer";
export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            Foodie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    MyOrders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          {!localStorage.getItem("authToken") ? (
            <div>
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/Signup">
                Signup
              </Link>
            </div>
          ) : (
            <div>
              <div
                className="btn bg-white text-success"
                onClick={() => {
                  setCartView(true);
                }}
              >
                My Cart
                <Badge pill bg="danger">
                  {data.length}
                </Badge>
              </div>
              {cartView ? (
                <Modal onClose={() => setCartView(false)}>
                  <Cart />
                </Modal>
              ) : null}

              <div className="btn bg-white text-danger" onClick={handlelogout}>
                Logout
              </div>
            </div>
          )}
        </div>
        {/* </div> */}
      </nav>
    </>
  );
}
