"use client";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <img src="/logos/calendly.png" alt="Calendly" width={20} height={20} />,
		href: "https://calendly.com/deeksharai014/30min",
		label: "Calendly",
		handle: "@deeksharai014",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:deeksharai014@gmail.com",
		label: "Email",
		handle: "deeksharai014@gmail.com",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://linkedin.com/in/deekshavow",
		label: "linkedin",
		handle: "@deekshavow",
	},
	{
		icon: <Phone size={20} />,
		href: "tel:+91-7985257259",
		label: "Call",
		handle: "+91 - 7985257259",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-4 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-2 relative flex flex-col items-center gap-2 duration-700 group md:gap-4 md:py-12 lg:pb-24 md:p-8"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-base sm:text-lg md:text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display truncate w-full px-2">
										{s.handle}
									</span>
									<span className="mt-2 text-sm sm:text-base text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
