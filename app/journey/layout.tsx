import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Professional Journey | Deeksha Rai",
  description: "Explore Deeksha Rai's professional journey and leadership roles in startup incubation and business development."
};

export const revalidate = 60;

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}