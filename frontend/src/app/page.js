"use client";

import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/fire";
import { useState } from "react";

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import sleep from "@/lib/sleep";

export const COUNTRY_TO_FLAG_EMOJI = {
  "ca" : "🇨🇦"
}

export const COUNTRY_TO_LANG = {
  "ca" : "en",
  "jp" : "jp",
  // and so on
}

export default function Home() {
  const [state, setState] = useState(0);
  const [user, setUser] = useState();
  const [displayName, setDisplayName] = useState();
  const [pfpic, setPfpic] = useState("");

  function google() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        // The signed-in user info.
        const user_1 = result.user;
        setUser(user_1);
        sleep(100);
        localStorage.setItem("user", JSON.stringify(user_1));
        setDisplayName(user_1.displayName);
        setPfpic(user_1.photoURL);
        setState(1);
        geo();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        // Retry Logic
      });

      
  }

  async function geo_call(payload){
    const lat = payload.coords.latitude;
    const long = payload.coords.longitude;
    const res = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=1ae15b2654ec4932952ffc54335b66f1&q=${lat}+${long}&pretty=1`)
    const country_1 = res.data.results[0].components.country_code;
    localStorage.setItem("U", country_1);
    window.location.replace("/h/onboard");
  }

  function geo(){
    navigator.geolocation.getCurrentPosition(geo_call, function(){});
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

          <p className="text-white fm and country mt-8">To Continue, allow us to access your location</p>
        </div>
      )}
    </main>
  );
}
