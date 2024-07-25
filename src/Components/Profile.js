import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Profile = () => {
  const [userDetails, setUserdetails] = useState(null);
  const fetchUserdata = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserdetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserdata();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User Logged out succesfully");
    } catch (error) {
      console.error("Error logging out", error.message);
    }
  }

  return (
    <div>
      {userDetails ? (
        <>
          <h3>Welcome {userDetails.firstname}</h3>
          <div>
            <p>Email : {userDetails.email}</p>
            <p>First Name : {userDetails.firstName}</p>
            <p>Last Name : {userDetails.lastName}</p>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Profile;
