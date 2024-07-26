import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
const GooglesignIn = () => {
  const handlegoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);

      toast.success("Google Sign-In Successful");
      window.location.href = "/profile";
    } catch (error) {
      console.log("Google Sign-In Error:", error.message);
    }
  };

  return (
    <div>
      <p>Or Continue with</p>
      <button onClick={handlegoogle}>Sign in with Google</button>
    </div>
  );
};
export default GooglesignIn;
