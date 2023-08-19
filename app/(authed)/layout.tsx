import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { ReactNode } from "react";

export default async function AuthedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/api/auth/signin");
  }

  return <>{children}</>;
}
