import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  // Simple Form !

  const [signUPinput, setSignUPInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUPinput.email) {
      console.log("its a valid email");
    }

    return setError("The email You Input is Invalid !");
  };

  const handleChange = (e) => {
    setSignUPInput({
      ...signUPinput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              id="email"
              value={signUPinput.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              placeholder="confirm-password"
              id="confirm-password"
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
