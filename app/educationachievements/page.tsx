import React from "react";
import { Navigation } from "../components/nav";

export const revalidate = 60;

export const metadata = {
  title: "Education & Achievements - Deeksha",
  description: "A showcase of educational background and notable achievements.",
};

const educationData = [
  {
    degree: "Masters in Business Administration",
    institution: "D.Y. Patil Vidyapeeth",
    year: "2025",
    details: [
      "Specialization in Digital Marketing and AI&ML",
    ]
  }
  
];

const achievementsData = [
  {
    title: "LinkedIn top voice for B2B Marketing Strategy",
    year: " ",
    description: " "
  },
  {
    title: "Featured in major publications including Times of India",
    year: " ",
    description: " "
  },
  {
    title: "Global Investor Summit (GIS) 2023: Selected for product display",
    year: " ",
    description: " "
  },
  {
    title: "Women for start-up program: Selected for Startup India Workshop",
    year: " ",
    description: " "
  },
  {
    title: "Top 20 finalist at Techkriti IIT Kanpur, top 50 at UPGIS, top 100 at UPITS Noida",
    year: " ",
    description: " "
  },
  {
    title: "Techkriti, IIT Kanpur: Top 20 startups from Uttar Pradesh",
    year: " ",
    description: " "
  }
];

export default function EducationAchievementsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Education & Achievements
          </h2>
          <p className="mt-4 text-zinc-400">
            A showcase of educational background and notable achievements.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2 items-start">
          <div className="space-y-8">
            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-200 transition-colors duration-300 group-hover:scale-[1.02] hover:shadow-lg h-fit">
              <h2 className="text-xl font-semibold text-zinc-100 mb-2">Education</h2>
              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="mb-2">
                    <div className="text-zinc-200 font-bold">{edu.degree}</div>
                    <div className="text-zinc-400">{edu.institution} &middot; {edu.year}</div>
                    <div className="ml-4 text-zinc-400 text-sm">
                      {edu.details.map((d, i) => (
                        <div key={i}>{d}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-200 transition-colors duration-300 group-hover:scale-[1.02] hover:shadow-lg h-fit">
              <h2 className="text-xl font-semibold text-zinc-100 mb-2">Certificates</h2>
              <div className="space-y-4">

                <div className="mb-2">
                  <div className="text-zinc-200">Introduction to Mathematical thinking</div>
                  <div className="text-zinc-400 text-sm">Stanford University</div>
                </div>

                <div className="mb-2">
                  <div className="text-zinc-200">Leaders of Learning</div>
                  <div className="text-zinc-400 text-sm">Harvard - GSE2x</div>
                </div>

                <div className="mb-2">
                  <div className="text-zinc-200">English and Academic Preparation</div>
                  <div className="text-zinc-400 text-sm">Rice University</div>
                </div>

                <div className="mb-2">
                  <div className="text-zinc-200">Rhetoric - Writing and Public Speaking</div>
                  <div className="text-zinc-400 text-sm">Harvard - AESTHINT15</div>
                </div>

              </div>
            </div>
          </div>
          
          <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-200 transition-colors duration-300 group-hover:scale-[1.02] hover:shadow-lg h-fit pb-8">
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">Achievements</h2>
            <div className="space-y-4 mb-4">
              {achievementsData.map((ach, idx) => (
                <div key={idx} className="mb-2">
                  <div className="text-zinc-200">{ach.title}</div>
                  <div className="text-zinc-400 text-sm">{ach.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}