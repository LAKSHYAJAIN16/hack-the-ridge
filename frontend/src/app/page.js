import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col mt-auto mb-auto items-center">
      <div className="flex items-center mt-32">
        <img src="/feather-pen.png" className="w-24"></img>
        <p className="mt-2 text-7xl fl text-white">inkless</p>
      </div>
      <div>
        <button
          className={`signUpButton googleButton`}
          onClick={() => google()}
        >
          Sign up With Google
        </button>
      </div>
    </main>
  );
}
