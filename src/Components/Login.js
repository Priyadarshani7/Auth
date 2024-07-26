import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import GooglesignIn from "./GooglesignIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged in Successfully");
      window.location.href = "/profile";
      toast.success("User Registered Succesfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <div>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>

        <p>
          New user <a href="/signup">Register Here</a>
        </p>
        <GooglesignIn />
      </form>
    </div>
  );
};
export default Login;
