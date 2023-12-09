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
    <main className="flex flex-col mt-auto mb-auto items-center">
      <div className="flex items-center mt-18">
        <img src="/feather-pen.png" className="w-24 mt-5"></img>
        <p className="mt-2 text-7xl fl text-white">inkless</p>
      </div>
      <p className="text-white fm">Your Gallery</p>
      <button className="standardButton mt-2">Upload </button>

      <br />
      <div className="flex justify-evenly flex-wrap">
        <img
          src="https://picsum.photos/200/300"
          className="border-2 border-red-500 rounded-md mb-5"
        ></img>
        <img
          src="https://picsum.photos/400/300"
          className="border-2 border-blue-500 rounded-md mb-5"
        ></img>
        <img
          src="https://picsum.photos/500/300"
          className="border-2 border-blue-500 rounded-md mb-5"
        ></img>
        <img
          src="https://picsum.photos/900/300"
          className="border-2 border-red-500 rounded-md mb-5"
        ></img>
        <img
          src="https://picsum.photos/200/300"
          className="border-2 border-blue-500 rounded-md mb-5"
        ></img>
        <img
          src="https://picsum.photos/500/300"
          className="border-2 border-red-500 rounded-md mb-5"
        ></img>
        <img
          src="https://picsum.photos/600/300"
          className="border-2 border-blue-500 rounded-md mb-5"
        ></img>
        <img
          src="https://picsum.photos/900/300"
          className="border-2 border-blue-500 rounded-md mb-5"
        ></img>
      </div>
    </main>
  );
}
