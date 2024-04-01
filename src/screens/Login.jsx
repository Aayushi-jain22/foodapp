import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(
  //     JSON.stringify({
  //       email: credentials.email,
  //       password: credentials.password,
  //     })
  //   );
  //   const response = await fetch("http://localhost:5000/api/loginuser", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: credentials.email,
  //       password: credentials.password,
  //     }),
  //   });
  //   const json = await response.json();
  //   console.log(json);

  //   if (!json.success) {
  //     console.log("Login failed. Response:", json);
  //     alert(" Enter valid credentails");
  //   }
  //   if (json.success) {
  //     localStorage.setItem("authToken",json.authToken)
  //     console.log(localStorage.getItem("authToken"));
  //     navigate("/");

  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    );

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log("Response from backend:", json);

      if (!json.success) {
        console.log("Login failed. Response:", json);
        alert("Enter valid credentials");
      }
      if (json.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        console.log("Stored authToken:", localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  // const onChange = (event) => {
  //   setcredentials(...credentials, [event.target.name], event.target.value);
  // };
  const onChange = (event) => {
    const { name, value } = event.target;
    setcredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor=" email" className="form-label">
              email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>

          <button type="submit" className=" m-3 btn btn-success">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            new user
          </Link>
        </form>
      </div>
    </>
  );
}
