// @ts-ignore

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"; // Corrected typo in file path
import { CartProvider } from "./components/ContextReducer.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
export default App;
