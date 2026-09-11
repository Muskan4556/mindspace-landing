import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD - Anxiety & Trauma Therapy in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, CA, specializing in anxiety therapy, trauma & EMDR, and burnout counseling for high-achieving adults. Offering in-person and telehealth sessions.",
  keywords:
    "therapist in Santa Monica, anxiety therapy Santa Monica, EMDR therapist Santa Monica, trauma therapy, burnout counseling, licensed clinical psychologist, PsyD, mindfulness-based therapy, somatic therapy, CBT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${workSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
