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

      <div className="ml-32">
        <div>
          <h1 className="text-white text-4xl fm">24th Jan - Food Challenge!</h1>
          <p className="text-white fm text-2xl">
            Share your country's food with your pal!
          </p>
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-white text-center">Justin + Eliza</p>
              <div className="flex">
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-red-500 rounded-md mb-5"
                ></img>
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-blue-500 rounded-md mb-5 ml-2"
                ></img>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <p className="text-white text-center">Lakshya + Priyana</p>
              <div className="flex">
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-red-500 rounded-md mb-5"
                ></img>
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-blue-500 rounded-md mb-5 ml-2"
                ></img>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <p className="text-white text-center">Joe + Alex</p>
              <div className="flex">
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-red-500 rounded-md mb-5"
                ></img>
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-blue-500 rounded-md mb-5 ml-2"
                ></img>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <p className="text-white text-center">Bob + Alice</p>
              <div className="flex">
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-red-500 rounded-md mb-5"
                ></img>
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-blue-500 rounded-md mb-5 ml-2"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div>
          <h1 className="text-white text-4xl fm">
            31th Jan - Dance Challenge!
          </h1>
          <p className="text-white fm text-2xl">
            Share your country's native dance with your pal!
          </p>
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-white text-center">Justin + Eliza</p>
              <div className="flex">
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-red-500 rounded-md mb-5"
                ></img>
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-blue-500 rounded-md mb-5 ml-2"
                ></img>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <p className="text-white text-center">Lakshya + Priyana</p>
              <div className="flex">
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-red-500 rounded-md mb-5"
                ></img>
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-blue-500 rounded-md mb-5 ml-2"
                ></img>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <p className="text-white text-center">Joe + Alex</p>
              <div className="flex">
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-red-500 rounded-md mb-5"
                ></img>
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-blue-500 rounded-md mb-5 ml-2"
                ></img>
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <p className="text-white text-center">Bob + Alice</p>
              <div className="flex">
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-red-500 rounded-md mb-5"
                ></img>
                <img
                  src="https://picsum.photos/100/100"
                  className="border-2 border-blue-500 rounded-md mb-5 ml-2"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
