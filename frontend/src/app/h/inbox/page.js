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
        <img src="/feather-pen.png" className="w-24"></img>
        <p className="mt-2 text-7xl fl text-white">inkless</p>
      </div>
      <p className="text-white fm">Your Scrolls</p>

      <div className="flex mt-32">
        <div className="relative">
          <p className="absolute ml-32 text-black z-50 fl mt-[-65px] font-bold text-3xl">
            dear lakshya (translated),{" "}
          </p>
          <p
            className="absolute ml-32 z-50 fl mt-[-30px] bg-none outline-none bg-transparent w-[50%] h-full resize-none"
            placeholder="Enter your fancy letter"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. (3/19/2023)
          </p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/981/760/original/old-parchment-paper-sheet-vintage-aged-or-texture-background-png.png"
            className="w-[500px] rotate-90 top-0 bottom-0 z-20"
          />
        </div>

        <div className="relative">
          <p className="absolute ml-32 text-black z-50 fl mt-[-65px] font-bold text-3xl">
            dear lakshya (translated),{" "}
          </p>
          <p
            className="absolute ml-32 z-50 fl mt-[-30px] bg-none outline-none bg-transparent w-[50%] h-full resize-none"
            placeholder="Enter your fancy letter"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. (3/19/2023)
          </p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/981/760/original/old-parchment-paper-sheet-vintage-aged-or-texture-background-png.png"
            className="w-[500px] rotate-90 top-0 bottom-0 z-20"
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="flex mt-32">
        <div className="relative">
          <p className="absolute ml-32 text-black z-50 fl mt-[-65px] font-bold text-3xl">
            dear lakshya (translated),
          </p>
          <p
            className="absolute ml-32 z-50 fl mt-[-30px] bg-none outline-none bg-transparent w-[50%] h-full resize-none"
            placeholder="Enter your fancy letter"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. (3/19/2023)
          </p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/981/760/original/old-parchment-paper-sheet-vintage-aged-or-texture-background-png.png"
            className="w-[500px] rotate-90 top-0 bottom-0 z-20"
          />
        </div>
        <div className="relative">
          <p className="absolute ml-32 text-black z-50 fl mt-[-65px] font-bold text-3xl">
            dear lakshya (translated),
          </p>
          <p
            className="absolute ml-32 z-50 fl mt-[-30px] bg-none outline-none bg-transparent w-[50%] h-full resize-none"
            placeholder="Enter your fancy letter"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. (3/19/2023)
          </p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/981/760/original/old-parchment-paper-sheet-vintage-aged-or-texture-background-png.png"
            className="w-[500px] rotate-90 top-0 bottom-0 z-20"
          />
        </div>
      </div>
    </main>
  );
}
