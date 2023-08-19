const posts = [
  {
    id: 1,
    title: "The Rise of AI",
    slug: "the-rise-of-ai",
    content:
      "Artificial Intelligence (AI) has witnessed unprecedented growth over the past few decades. From simple algorithms to neural networks, the journey has been remarkable.",
  },
  {
    id: 2,
    title: "Nature's Beauty",
    slug: "natures-beauty",
    content:
      "Nature offers an array of colors, sounds, and sceneries that can leave anyone spellbound. From the chirping of the birds to the whisper of the trees, nature is truly a source of inspiration.",
  },
  {
    id: 3,
    title: "Space Exploration",
    slug: "space-exploration",
    content:
      "Space, the final frontier. With every passing year, humans are venturing further into the cosmos, unlocking the secrets of the universe one star at a time.",
  },
  {
    id: 4,
    title: "Healthy Living",
    slug: "healthy-living",
    content:
      "A balanced diet, regular exercise, and a positive mindset are the cornerstones of healthy living. Embracing these can lead to a fulfilling and vibrant life.",
  },
  {
    id: 5,
    title: "The World of Quantum Physics",
    slug: "quantum-physics",
    content:
      "Quantum physics dives deep into the microscopic world, exploring the nature of reality at scales where intuition often fails. Yet, it has given us revolutionary technologies like lasers and MRIs.",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  console.log(session);

  return NextResponse.json(posts);
}
