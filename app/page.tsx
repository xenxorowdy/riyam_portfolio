import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { skip } from "node:test";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const dentiraList = [
  "Engineered Rx processing workflows using Python & REST APIs - 25% faster processing",
  "Enhanced mobile UI/UX with React - 30% higher engagement",
  "Built microservices for dental scanner integration - 40% faster document processing",
  "Automated financial data collection - 50% reduction in errors",
  "Led integrations with Lab Management Systems and dental scanners",
  "Optimized Rx mappings and achieved 95% user satisfaction",
];

const bambooList = [
  "Built data visualization dashboards and analytics tools",
  "Led CRM integrations with Salesforce, HubSpot, and more",
  "Designed & launched centralized Campaign Hub",
  "Reduced website downtime by 25% through optimizations",
  "Collaborated across teams to enhance product quality",
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Node.js",
  "React Native",
  "SQL",
  "MongoDB",
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-400/10 to-black">
      <nav className="my-5 animate-fade-in">
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
      <h1 className="py-3 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Riyam Jain
      </h1>
      <div className="my-16 text-center animate-fade-in w-[90vw] md:w-[70vw] mx-auto">
        <h2 className="text-xs sm:text-sm md:text-base text-zinc-500 text-center">
          I'm a Full Stack Developer crafting powerful digital experiences. Over
          4+ years, I've built modern web and mobile apps that scale,
          specializing in Next.js, React, and Node. I love architecting elegant
          solutions and writing clean, maintainable code that puts users first.
        </h2>
      </div>
      <div className="animate-fade-in py-3 px-4 sm:px-6 md:px-8">
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-200 my-2 left-0">
          Expirence
        </h3>
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          <div className="border border-zinc-700 rounded-lg p-4 sm:p-6 bg-gradient-to-b from-zinc-900/50 to-zinc-900/30">
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-200 mb-2 sm:mb-4">
              Dentira{" "}
              <span className="text-zinc-500 font-normal text-base sm:text-lg">
                • SDE-II
              </span>
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-2 sm:mb-4">
              Bengaluru, IN • Nov 2023 - Present
            </p>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-zinc-400">
              {dentiraList.map((item) => (
                <li>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-zinc-700 rounded-lg p-4 sm:p-6 bg-gradient-to-b from-zinc-900/50 to-zinc-900/30">
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-200 mb-2 sm:mb-4">
              Bamboobox{" "}
              <span className="text-zinc-500 font-normal text-base sm:text-lg">
                • Software Engineer
              </span>
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-2 sm:mb-4">
              Bengaluru, IN • Jun 2021 - Nov 2023
            </p>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-zinc-400">
              {bambooList.map((item) => (
                <li>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-800 text-zinc-400 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
