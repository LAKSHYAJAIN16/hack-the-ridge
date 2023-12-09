"use client";
import { COUNTRY_TO_FLAG_EMOJI } from "@/app/page";
import React, { useState, useEffect } from "react";

export default function Page_2() {
  const [user, setUser] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setCountry(localStorage.getItem("U"));
  }, []);

  return (
    <div className="flex items-center w-full mt-32 justify-evenly">
      <div className="flex flex-col items-center">
        <div className="flex items-center mt-20">
          <img src="/feather-pen.png" className="w-24"></img>
          <p className="mt-2 text-7xl fl text-white">inkless</p>
        </div>
        <p className="text-white fm -mt-2">Write to Sakura!</p>

        <div className="flex">
          <a href="/h/inbox" className="mr-3">
            <img src="/email.png" className="w-8 mt-2 cursor-pointer"></img>
          </a>
          <a href="/h/gallery" className="mr-3">
            <img src="/gallery.png" className="w-8 mt-2 cursor-pointer"></img>
          </a>
          <a href="/h/activities">
            <img src="/beach-ball.png" className="w-8 mt-2 cursor-pointer"></img>
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="">
          <p className="absolute ml-32 text-black z-50 fl mt-[-65px] font-bold text-3xl">
            dear sakura,{" "}
          </p>
          <textarea
            className="absolute ml-32 z-50 fl mt-[-30px] bg-none outline-none bg-transparent w-[50%] h-full resize-none"
            placeholder="Enter your fancy letter"
          ></textarea>
          <button className="standardButton z-[70] mt-[420px] ml-36 absolute">
            Send
          </button>
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/981/760/original/old-parchment-paper-sheet-vintage-aged-or-texture-background-png.png"
            className="w-[500px] rotate-90 top-0 bottom-0 z-20"
          />
        </div>
      </div>
    </div>
  );
}
