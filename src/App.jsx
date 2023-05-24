import { useState } from "react";
import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./Firebase/firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loguser = result.user;
        console.log(loguser);
        setUser(loguser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1>vite + firebase</h1>
        <button onClick={handleLogIn}>login</button>

        {user && <div>{<h1>name: {user.displayName}</h1>}</div>}
      </div>
    </>
  );
}

export default App;
