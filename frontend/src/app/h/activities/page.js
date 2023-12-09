"use client";

import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/fire";
import { useState } from "react";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import sleep from "@/lib/sleep";

export default function Home() {
  return (
    <>
      <main className="flex flex-col mt-auto mb-auto items-center">
        <div className="flex items-center mt-18">
          <img src="/feather-pen.png" className="w-24 mt-5"></img>
          <p className="mt-2 text-7xl fl text-white">inkless</p>
        </div>
        <p className="text-white fm">Activities + Events</p>
        <button className="standardButton mt-2">Upload </button>

        <br />
      </main>
      <br />
      <div className="ml-72">
        <h1 className="text-white text-4xl fm">24th Jan - Food Challenge!</h1>
        <p className="text-white fm text-2xl">
          Share your country's food with your pal!
        </p>
        <div className="flex">
          <p className="text-white">Justin + Eliza</p>
          <img
            src="https://picsum.photos/100/100"
            className="border-2 border-red-500 rounded-md mb-5"
          ></img>
        </div>
      </div>
    </>
  );
}
