import { useEffect, useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customer = { email, password };    

    await fetch("/api/customers/login-customer/", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        setEmail("");
        setPassword("");
        alert(`LOGIN FAILED with ${email}`);
      } else {
        setError(null);
        setEmail("");
        setPassword("");
        alert(`LOGIN SUCCESS with ${email}`);
      }
    })
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <form className="form_container" id="login-form">
            <h1 className="form_container h1">Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="form_container input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="form_container input"
            />
            <button type="submit" className="green_btn" onClick={handleSubmit}>
              Login
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here?</h1>
          <a href="/signup">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;