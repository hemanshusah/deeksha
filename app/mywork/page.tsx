import React from "react";
import { Navigation } from "../components/nav";

export const revalidate = 60;

export const metadata = {
  title: "My Work - Deeksha",
  description: "A showcase of my professional work and projects.",
};

const companyLogos = [
  { name: "Big Dot", src: "/complogos/bigdot.png" },
  { name: "Manodayam", src: "/complogos/manodayam.png" },
  { name: "Innovation Hub", src: "/complogos/innovationhub.png" },
  { name: "Dazus", src: "/complogos/dazu.png" },
  { name: "Jalvayu", src: "/complogos/jalvayu.png" },
  { name: "Stylox", src: "/complogos/stylox.png" },
  { name: "Benz Lyfe Care", src: "/complogos/benz.png" }
  
];

/*
const workData = [
  {
    title: "Project 1",
    year: "2023",
    description: "Description of project 1"
  },
  {
    title: "Project 2",
    year: "2022",
    description: "Description of project 2"
  },
  {
    title: "Project 3",
    year: "2021",
    description: "Description of project 3"
  }
];

*/

export default function MyWorkPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            My Work
          </h2>
          <p className="mt-4 text-zinc-400">
            A showcase of my professional work and projects.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-zinc-100 mb-5">Startups and Programs I've Worked With</h3>
          <div className="flex flex-nowrap justify-between items-center gap-1 w-full py-2 px-2">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-28 h-28 rounded-xl flex items-center justify-center shadow-sm grayscale hover:grayscale-0 hover:scale-105 hover:shadow-md transition-all duration-300 p-2">
                  <img
                    src={company.src}
                    alt={company.name}
                    className="w-full h-full object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
       
       {/*}
       <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2 items-start">
          <div className="space-y-8">
            {workData.map((work, idx) => (
              <div key={idx} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-200 transition-colors duration-300 group-hover:scale-[1.02] hover:shadow-lg h-fit">
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">{work.title}</h3>
                <div className="text-zinc-400">{work.year}</div>
                <p className="mt-2 text-zinc-400">{work.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        
      </div>
    </div>
  );
}