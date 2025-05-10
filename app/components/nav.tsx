"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(prev => {
			const newState = !prev;
			if (newState) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
			return newState;
		});
	};

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="hidden md:flex justify-between gap-8">
						<Link
							href="/"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Home
						</Link>

						
						
						<Link
							href="/journey"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Professional Journey
						</Link>
						
						<Link
							href="/mywork"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							My Work
						</Link>

						

						<Link
							href="/skillsexpert"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Skills & Expertise
						</Link>



						<Link
							href="/educationachievements"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Education & Achievements
						</Link>

						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>


					</div>

					<div className="flex items-center gap-4">
					<button
						className="md:hidden text-zinc-300 hover:text-zinc-100"
						onClick={toggleMobileMenu}
					>
						{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6" />
					</Link>
				</div>
				<div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 top-16 bg-zinc-900/95 backdrop-blur z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`} style={{height: 'calc(100vh - 4rem)'}}>
					<div className="flex flex-col p-4 space-y-4 overflow-y-auto w-full" style={{maxHeight: 'calc(100vh - 6rem)'}}>
						<Link href="/" className="duration-200 text-zinc-400 hover:text-zinc-100 py-2 w-full">Home</Link>
						<Link href="/journey" className="duration-200 text-zinc-400 hover:text-zinc-100 py-2 w-full">Professional Journey</Link>
						<Link href="/mywork" className="duration-200 text-zinc-400 hover:text-zinc-100 py-2 w-full">My Work</Link>
						<Link href="/skillsexpert" className="duration-200 text-zinc-400 hover:text-zinc-100 py-2 w-full">Skills & Expertise</Link>
						<Link href="/educationachievements" className="duration-200 text-zinc-400 hover:text-zinc-100 py-2 w-full">Education & Achievements</Link>
						<Link href="/contact" className="duration-200 text-zinc-400 hover:text-zinc-100 py-2 w-full">Contact</Link>
					</div>
				</div>
				</div>
			</div>
		</header>
	);
};
