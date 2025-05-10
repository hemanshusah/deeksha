import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  //{ name: "Projects", href: "/projects" },
  { name: "Professional Journey", href: "/journey" },
  { name: "My Work", href: "/mywork" },
  { name: "Skills & Expertise", href: "/skillsexpert" },
  { name: "Education & Achievement", href: "/educationachievements" },
  { name: "Contact", href: "/contact" },
];

export const metadata = {
  title: "Deeksha Rai",
  description: "I think like a marketer and evaluate like investor",
  openGraph: {
    title: "Deeksha Rai",
    description: "I think like a marketer and evaluate like investor",
    images: [
      {
        url: "/image-main.png",
        width: 1200,
        height: 630,
        alt: "Deeksha Rai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deeksha Rai - Marketing & Business Development",
    description: "Portfolio of Deeksha Rai showcasing expertise in marketing, business development, and startup incubation.",
    images: ["/image-main.png"],
  },
};


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="absolute inset-0 transition-all duration-1000" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/image-back.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(3px)',
        opacity: 0.3
      }} />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white overflow-hidden mb-5 transition-all duration-500 hover:scale-125 hover:shadow-lg hover:shadow-white/20">
          <img 
            src="/image-main.png"
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </div>

        <nav className="my-5 animate-fade-in opacity-0 animation-delay-1000">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg duration-500 text-zinc-500 hover:text-zinc-50"
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
        
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text opacity-0 animation-delay-500">
          Deeksha Rai
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-5 text-center animate-fade-in opacity-0 animation-delay-1500">
          <h2 className="text-lg text-zinc-500 tracking-wider font-light group relative inline-block pb-2 hover:text-zinc-300 transition-all duration-500">
            <span className="relative z-10">Marketing mindset. Investor's perspective.</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 group-hover:w-full transition-all duration-500"></span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-zinc-800"></span>
          </h2>

          <div className="my-5 w-full px-4 max-w-6xl mx-auto text-center">
            <div className="my-10">
              <h2 className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mt-4 px-2">
                With expertise spanning incubation management to commercialised growth, I help transform ideas into thriving ventures through strategic vision and creative execution.
              </h2>
            </div>
          </div>
        </div>
      
        <div className="mt-2 animate-fade-in opacity-0 animation-delay-2000">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 max-w-7xl mx-auto">
            {[
              {
                title: "Commercialisation",
                description: "Creating data-driven marketing approaches that build brand presence and drive money for the businesses"
              },
              {
                title: "Program Management",
                description: "Guiding early-stage startups through critical growth phases with strategic mentorship"
              },
              {
                title: "Growth Partnerships",
                description: "Forging strategic partnerships and creating sustainable growth frameworks for businesses"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="block p-4 w-full h-full rounded-lg bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-700/50 hover:scale-105 cursor-pointer">
                  <h3 className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <div className="absolute top-full left-0 w-72 p-4 mt-2 rounded-xl bg-black/70 backdrop-blur-sm border border-zinc-600/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-10">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
