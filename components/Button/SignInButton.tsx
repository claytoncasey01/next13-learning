"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href="/dashboard">
        <Image
          src={session.user?.image ?? ""}
          width={32}
          height={32}
          alt="Your name"
        />
      </Link>
    );
  }

  return (
    <button
      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
}
