import React from "react";
import { Navigation } from "../components/nav";

export const revalidate = 60;

export const metadata = {
  title: "My Work - Deeksha",
  description: "A showcase of my professional work and projects.",
};

const companyData = [
  {
    name: "BigDot",
    logo: "/complogos/bigdot.png",
    category: "B2B SaaS | Workflow Automation",
    summary:
      "BigDot provides a no-code workflow tool tailored for client-facing service teams. It helps agencies streamline client onboarding, document handling, and project tracking.",
    role:
      "Supported GTM refinement through early-stage market feedback loops. Assisted in aligning product positioning to mid-sized Indian agencies, focusing on pain points like mismanaged client data and internal miscommunication. Shared insights from founder interviews to inform onboarding UX.",
    outcome:
      "The team integrated new onboarding templates and repositioned messaging toward legal/financial agencies, resulting in a more focused target segment."
  },
  {
    name: "Manodayam",
    logo: "/complogos/manodayam.png",
    category: "Mental Health | Vernacular Tech",
    summary:
      "Manodayam is a regional-language mental health platform that offers accessible therapy and self-help tools to underserved communities across India.",
    role:
      "Provided social media marketing and content support to communicate Manodayam’s value in a culturally sensitive and engaging way. Created storytelling frameworks and campaign copy that resonated with Tier 2/3 users in local languages.",
    outcome:
      "Helped the brand improve its early digital visibility and user engagement through emotionally grounded content and platform-native creatives. Focus was on awareness-building, not direct conversion."
  },
  {
    name: "Jalvayu",
    logo: "/complogos/jalvayu.png",
    category: "ClimateTech | Water Access",
    summary:
      "Jalvayu focuses on clean water solutions, developing IoT-enabled, community-scale water purification systems in underserved regions.",
    role:
      "Evaluated for government grant eligibility at GLBCRI. Participated in assessing community impact, scalability, and hardware-readiness for funding disbursement.",
    outcome:
      "Jalvayu received structured feedback on impact metrics and aligned milestones to improve their hardware validation phase."
  },
  {
    name: "Benz Private Limited",
    logo: "/complogos/benz.png",
    category: "AgriTech | Smart Irrigation",
    summary:
      "Benz Pvt Ltd builds affordable, sensor-enabled irrigation systems tailored for smallholder farms in India.",
    role:
      "Led branding and digital communication strategy for Benz during its initial scale-up phase. Designed visual identity elements and drafted campaign content highlighting their value proposition in improving water use efficiency for farmers.",
    outcome:
      "Created targeted messaging for government exposure and B2B agriculture expos. Focused on distilling a complex hardware solution into a simple, benefit-driven narrative suitable for low-tech buyers and partners."
  },
  {
    name: "Stylox",
    logo: "/complogos/stylox.png",
    category: "D2C Fashion | Custom Fit",
    summary:
      "Stylox offers AI-powered custom-fit apparel through a direct-to-consumer model, targeting India’s Tier 2 and Tier 3 cities.",
    role:
      "Provided positioning feedback during their pre-funding pitch stage. Shared insights on return-rate messaging, fit assurance mechanisms, and visual storytelling for Instagram-led growth.",
    outcome:
      "Stylox refined its funnel strategy and prepared a clearer traction narrative for investor conversations."
  },
  {
    name: "Innovation Hub",
    logo: "/complogos/innovationhub.png",
    category: "Startup Incubation Platform | Government-Linked Programs",
    summary:
      "Innovation Hub facilitates startup development programs, including pitch events, hackathons, and grant-linked showcases like UPITS and UPGIS.",
    role:
      "Managed design and content collaterals for Innovation Hub’s flagship hackathons and UPITS events. Delivered digital and print-ready assets for startup outreach, program visibility, and post-event reporting.",
    outcome:
      "Enabled better stakeholder communication, event branding consistency, and smoother founder-facing engagement. The focus was entirely on marketing support, not startup evaluation or investment operations."
  }
];

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
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mt-10 mb-4">Startups</h2>
        <div className="space-y-10">
          {companyData.map((company, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center md:items-stretch bg-zinc-900/70 rounded-xl border border-zinc-700 shadow-lg p-6 md:p-10 gap-6 md:gap-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-zinc-200">
              <div className="flex-1 flex flex-col justify-between text-left">
                <h3 className="text-2xl font-bold text-zinc-100 mb-2">{company.name}</h3>
                <div className="text-sm text-zinc-400 mb-2 font-semibold">Category: <span className="text-zinc-200">{company.category}</span></div>
                <div className="mb-2">
                  <span className="block text-zinc-400 font-semibold">Summary:</span>
                  <span className="block text-zinc-200">{company.summary}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-zinc-400 font-semibold">Deeksha’s Role:</span>
                  <span className="block text-zinc-200">{company.role}</span>
                </div>
                <div>
                  <span className="block text-zinc-400 font-semibold">Outcome:</span>
                  <span className="block text-zinc-200">{company.outcome}</span>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-zinc-800 rounded-xl border border-zinc-700 p-3">
                <img
                  src={company.logo}
                  alt={company.name + " logo"}
                  className="w-full h-full object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mt-16 mb-4">Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nidhi Prayas */}
          <div className="bg-zinc-900/70 rounded-xl border border-zinc-700 shadow-lg p-6 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-zinc-100 mb-1">Nidhi Prayas</h3>
            <div className="text-sm text-zinc-400 mb-1 font-semibold">Type: <span className="text-zinc-200">Early-Stage Prototype Grant (DST, Govt. of India)</span></div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Program Overview:</span>
              <span className="block text-zinc-200">Supports early-stage innovators and startups with prototype development grants up to ₹10 lakhs.</span>
            </div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Your Contribution:</span>
              <ul className="list-disc ml-5 text-zinc-200">
                <li>Managed application pipeline and evaluation logistics for 100+ startups</li>
                <li>Developed a 3-tier startup evaluation framework with 22 KPIs to improve screening consistency</li>
                <li>Facilitated mentor mapping, helping recipients align milestone progress to disbursement cycles</li>
                <li>Worked closely with GLBCRI’s finance and operations team for grant governance and compliance</li>
              </ul>
            </div>
          </div>
          {/* StartinUP */}
          <div className="bg-zinc-900/70 rounded-xl border border-zinc-700 shadow-lg p-6 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-zinc-100 mb-1">StartinUP</h3>
            <div className="text-sm text-zinc-400 mb-1 font-semibold">Type: <span className="text-zinc-200">Statewide Startup Support Portal (UP Government)</span></div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Program Overview:</span>
              <span className="block text-zinc-200">The official platform for government-approved incubators and startups to apply for state grants and policy benefits.</span>
            </div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Your Contribution:</span>
              <ul className="list-disc ml-5 text-zinc-200">
                <li>Managed GLBCRI’s onboarding and proposal flow on the portal</li>
                <li>Supported startups in navigating the application interface and documentation</li>
                <li>Worked with technical teams to ensure proposal status tracking and eligibility updates</li>
                <li>Assisted 8+ shortlisted startups in final submissions</li>
              </ul>
            </div>
          </div>
          {/* Growth Syndicate Acceleration Program */}
          <div className="bg-zinc-900/70 rounded-xl border border-zinc-700 shadow-lg p-6 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-zinc-100 mb-1">Growth Syndicate Acceleration Program</h3>
            <div className="text-sm text-zinc-400 mb-1 font-semibold">Type: <span className="text-zinc-200">Acceleration | Founder Readiness | Investor Matchmaking</span></div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Program Overview:</span>
              <span className="block text-zinc-200">An in-house acceleration program designed to help early-stage startups prepare for investor engagement, strengthen GTM strategies, and formalize operational systems through guided mentorship and institutional partnerships.</span>
            </div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Key Contributions:</span>
              <ul className="list-disc ml-5 text-zinc-200">
                <li>Designed full program structure including startup eligibility, cohort workflows, SOPs, and performance tracking mechanisms.</li>
                <li>Secured partnerships with IDFC First Bank and early-stage VCs for investor participation and fintech readiness modules.</li>
                <li>Managed end-to-end launch planning, content creation, and operational readiness, including branding, founder communications, and mentor onboarding.</li>
                <li>Facilitated post-launch coordination including cohort progress, investor-startup interactions, and stakeholder reporting.</li>
              </ul>
            </div>
          </div>
          {/* Startup Spotlight Program */}
          <div className="bg-zinc-900/70 rounded-xl border border-zinc-700 shadow-lg p-6 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-zinc-100 mb-1">Startup Spotlight Program</h3>
            <div className="text-sm text-zinc-400 mb-1 font-semibold">Type: <span className="text-zinc-200">Visibility + PR Program for Incubated Startups</span></div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Program Overview:</span>
              <span className="block text-zinc-200">Designed to provide media visibility, narrative building, and digital identity support for selected founders.</span>
            </div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Your Contribution:</span>
              <ul className="list-disc ml-5 text-zinc-200">
                <li>Designed storytelling content formats (e.g., founder features, pitch profiles)</li>
                <li>Coordinated with PR agencies and local media for content placement</li>
                <li>Integrated spotlight content into investor outreach pipelines</li>
              </ul>
            </div>
          </div>
          {/* Samridh */}
          <div className="bg-zinc-900/70 rounded-xl border border-zinc-700 shadow-lg p-6 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-zinc-100 mb-1">Samridh</h3>
            <div className="text-sm text-zinc-400 mb-1 font-semibold">Type: <span className="text-zinc-200">Government-backed seed funding & acceleration support</span></div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Program Overview:</span>
              <span className="block text-zinc-200">SAMRIDH provides equity funding and accelerator support to high-impact startups in partnership with accelerators.</span>
            </div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Your Contribution:</span>
              <ul className="list-disc ml-5 text-zinc-200">
                <li>Supported founders during early mapping of eligibility for upcoming cohorts</li>
                <li>Created pitch deck templates aligned to SAMRIDH’s impact-first selection lens</li>
              </ul>
            </div>
          </div>
          {/* Women for Startup Program */}
          <div className="bg-zinc-900/70 rounded-xl border border-zinc-700 shadow-lg p-6 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-zinc-100 mb-1">Women for Startup Program</h3>
            <div className="text-sm text-zinc-400 mb-1 font-semibold">Type: <span className="text-zinc-200">Women-Focused Founder Enablement Program</span></div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Program Overview:</span>
              <span className="block text-zinc-200">A Startup India-linked initiative to support women-led startups with mentorship and exposure</span>
            </div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Your Contribution:</span>
              <ul className="list-disc ml-5 text-zinc-200">
                <li>Provided mentorship on branding and positioning for women-led startups</li>
                <li>Helped prepare deck content and pitch articulation for 5+ founders</li>
              </ul>
            </div>
          </div>
          {/* UPITS */}
          <div className="bg-zinc-900/70 rounded-xl border border-zinc-700 shadow-lg p-6 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-zinc-100 mb-1">UPITS</h3>
            <div className="text-sm text-zinc-400 mb-1 font-semibold">Type: <span className="text-zinc-200">State Government Startup Showcase</span></div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Program Overview:</span>
              <span className="block text-zinc-200">UPITS is a government-run platform that showcases selected startups to investors and government bodies.</span>
            </div>
            <div className="mb-1">
              <span className="block text-zinc-400 font-semibold">Your Contribution:</span>
              <ul className="list-disc ml-5 text-zinc-200">
                <li>Created visual collateral, exhibitor decks, and printed assets for Innovation Hub</li>
                <li>Collaborated Innovation Hub teams to align design with policy formats</li>
                <li>Ensured pitch decks and event creatives were investor-facing and structured</li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}