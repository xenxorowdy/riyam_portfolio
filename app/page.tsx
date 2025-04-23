import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { skip } from "node:test";

const navigation = [
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow bg-gradient-to-tl from-black via-zinc-400/10 to-black ">
      <nav className="  animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text ">
        Riyam Jain
      </h1>
      <div className="my-16 text-center animate-fade-in w-[90vw] md:w-[50vw] mx-auto">
        <h2 className="text-xs sm:text-sm md:text-base text-zinc-500 text-center">
          Full Stack Developer with 4+ years building scalable web & mobile
          apps. Expert in Next.js, React, and Node. Focused on clean code and
          elegant solutions that prioritize users.
        </h2>
      </div>
    </div>
  );
}
