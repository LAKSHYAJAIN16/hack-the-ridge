"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/fire";
import { useState } from "react";

import ReactLanguageSelect from "react-languages-select";
import Select from 'react-select'
import "react-languages-select/css/react-languages-select.css";

export default function Home() {
  const [state, setState] = useState(0);
  const [user, setUser] = useState();

  function google() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setUser(user);
        setState(1);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        // Retry Logic
      });
  }

  return (
    <main className="flex flex-col mt-auto mb-auto items-center">
      {state == 0 && (
        <>
          <div className="flex items-center mt-52">
            <img src="/feather-pen.png" className="w-24"></img>
            <p className="mt-2 text-7xl fl text-white">inkless</p>
          </div>
          <div>
            <button
              className="signUpButton googleButton fm"
              onClick={() => google()}
            >
              <img src="/search (4).png" className="w-6 mr-2 " />
              Sign up With Google
            </button>
          </div>
        </>
      )}
      {state == 1 && (
        <div className="mt-40 flex flex-col items-center">
          <img
            src={user.photoURL}
            className="w-32 h-32 rounded-full border-2 border-white"
          />
          <h1 className="text-white fm mt-3 text-xl">
            Welcome, {user.displayName}
          </h1>

          <p className="text-white fm and country mt-8">To Continue, select your language</p>
          <ReactLanguageSelect defaultLanguage="en"/>

          <p className="text-white fm and country">, and country</p>
          <Select options={options} value={value} onChange={changeHandler} />
        </div>
      )}
    </main>
  );
}
