import React from "react";
import { Navigation } from "../components/nav";

export const revalidate = 60;

export const metadata = {
  title: "Skills & Expertise - Deeksha",
  description: "A showcase of technical skills and areas of expertise.",
};

const toolLogos = [
  { name: "Canva", src: "/logos/canva.png" },
  { name: "Excel", src: "/logos/excel.png" },
  { name: "Meta Business", src: "/logos/meta-business.png" },
  { name: "Google Analytics", src: "/logos/google-analytics.png" },
  { name: "Chat GPT", src: "/logos/gpt.png" },
  { name: "Notion", src: "/logos/notion.png" },
  { name: "Buffer", src: "/logos/buffer.png" },
  { name: "Bubble", src: "/logos/bubble.png" },
  { name: "Google Workspace", src: "/logos/google-workspace.png" }
];

const skillCategories = [
  {
    category: "Program Management",
    skills: [
      "StartinUP Portal",
      "Nidhi Prayas",
      "Grant Disbursement",
      "Pre-incubation & Incubation Frameworks"
    ]
  },
  {
    category: "Business Strategy",
    skills: [
      "Market Research",
      "Financial Forecasting",
      "Startup Framework Development",
      "Investor Relations"
    ]
  },
  {
    category: "Digital Marketing",
    skills: [
      "LinkedIn Sales Navigator",
      "Meta Business Suite",
      "Google Analytics",
      "Social Media Strategy"
    ]
  },
  {
    category: "Commercialisation",
    skills: [
      "GTM: Go To Market strategy",
      "Data sourcing and basic analysis",
      "100 user traction roadmap",
      "Product launch strategy"
    ]
  },
  {
    category: "Deal Flow Management",
    skills: [
      "Pitch analysis",
      "Founder-market fit evaluation",
      "Growth Memo development",
      "Valuation and buy-side notes"
    ]
  }
];

export default function SkillsExpertPage() {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-zinc-400">
            A showcase of technical skills and areas of expertise.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-zinc-100 mb-5">Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 w-full py-2 px-2">
            {toolLogos.map((tool, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-28 h-28 rounded-xl flex items-center justify-center shadow-sm grayscale hover:grayscale-0 hover:scale-105 hover:shadow-md transition-all duration-300 p-2">
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.category} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-200 transition-colors duration-300 group-hover:scale-[1.02] hover:shadow-lg">
              <h3 className="text-xl font-semibold text-zinc-100 mb-2">{category.category}</h3>
              <ul className="list-disc list-inside space-y-1">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-zinc-400">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}