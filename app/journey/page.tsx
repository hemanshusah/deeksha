"use client";
import React, { useState, useEffect } from "react";
import { Navigation } from "../components/nav";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";



// Client components cannot export metadata directly
// Metadata should be defined in parent server components



const journeyData = [
  {
    role: "Manager",
    date: "January to Present",
    views: 36,
    oneLiner: "Leading incubation initiatives and mentoring startups",
    organization: "G L Bajaj Center for Research and Incubation",
    link: " ",
    description: [
      "Oversee ₹3 Cr Nidhi Prayas funding program supporting 8 innovative startups every year",
      "Deal source management in association with IDFC First bank",
      "Developed In-house Acceleration program and strategic partnership"
    ]
  },
  {
    role: "Deputy Manager",
    date: "December 2023 - January 2025",
    views: 24,
    oneLiner: "Managed startup programs and investor relations",
    organization: "Atal Incubation Centre BIMTECH",
    link: "https://aicbimtech.com",
    description: [
      "Implemented account-based marketing strategy growing investor community by 30%",
      "Designed PR program generating ₹3.5L additional revenue stream",
      "Expanded community engagement from 200 to 750+ active members"
    ]
  },
  {
    role: "Founder & CEO",
    date: "November 2022 - November 2023",
    views: 14,
    oneLiner: "Led all aspects of business development and operations",
    organization: "VOW - Voice of Work",
    link: " ",
    description: [
      "Built and led 7-member team, reducing project delivery time by 35%",
      "Integrated AI workflow systems improving team productivity by 28%",
      "Acquired and maintained 7-12 clients with 60-85% retention rate"
    ]
  },
  
  {
    role: "Business Associate",
    date: "March 2022 - November 2022",
    views: 4,
    oneLiner: "Developed business and marketing strategies",
    organization: "Joyin India Pvt. Ltd.",
    link: " ",
    description: [
      "Created business plan securing ₹15L in seed investment",
      "Increased digital audience engagement by 65% across platforms",
      "Improved project success metrics from 60% to 85%"
    ]
  },
  {
    role: "Growth Associate",
    date: "May 2021 - September 2021",
    views: 4,
    oneLiner: "Created engaging content with SEO optimization",
    organization: "Nanamuna",
    link: " ",
    description: [
      "Produced 75+ stories with 22% higher-than-average engagement",
      "Implemented SEO strategies improving search visibility by 55%",
      "Extended audience reach by 35% through cross-channel promotion"
    ]
  },
  {
    role: "Business  Development Associate",
    date: "March 2020 - April 2021",
    views: 2,
    oneLiner: "Business development and strategy",
    organization: "Managineers Educational Services",
    link: " ",
    description: [
      "Identified 30+ target schools, securing 18 principal meetings",
      "Collaborated with 8 education specialists for market insights",
      "Analysed needs through 150+ student interviews to guide development"
    ]
  }
];


// ... existing code ...
export const metadata = {
  title: "Professional Journey | Deeksha Rai",
  description: "Explore Deeksha Rai's professional journey and leadership roles in startup incubation and business development."
};
// ... existing code ...



export default function JourneyPage() {
  const [views, setViews] = useState(journeyData[0].views);
  const router = useRouter();
  
  const handleCardClick = (link: string) => {
    setViews((v) => v + 1);
    router.push(link);
  };
  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional Journey
          </h2>
          <p className="mt-4 text-zinc-200">
            A showcase of professional milestones and leadership roles.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 w-full">
          {journeyData.map((journey, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 flex-row items-center gap-8 w-full bg-zinc-900/50 backdrop-blur-lg rounded-xl border border-zinc-500 shadow-lg p-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:bg-zinc-900/70 hover:border-zinc-200 group cursor-pointer"
              style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)", textDecoration: "none" }}
              onClick={e => { e.preventDefault(); handleCardClick(journey.link); }}
            >
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-zinc-300 mr-4 mb-3">{journey.date}</span>
                <span className="flex items-center gap-1 text-xs text-white">
                  <Eye className="w-4 h-4" /> {index === 0 ? views : journey.views}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {journey.role}
              </h3>
              <h4 className="text-lg font-semibold text-white mb-2">
                {journey.organization}
              </h4>
              <p className="mb-3 text-zinc-300 italic">{journey.oneLiner}</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300/90">
                {journey.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </a>
          ))}
        </div>
      </div>
    </div>
  );
}