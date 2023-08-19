// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
// import { authOptions } from "./api/auth/[...nextauth]/route";

export function middleware(req: NextRequest) {
  //  const session = await getServerSession(authOptions);
  //
  //  // If we are hitting the /auth that means we have not signed in yet.
  //  if (req.nextUrl.pathname.startsWith("/api/auth")) {
  //    console.log(req.nextUrl);
  //    return NextResponse.redirect(req.nextUrl);
  //  } else {
  //    if (!session) {
  //      return NextResponse.redirect("http://localhost:3000/api/auth/signin");
  //    }
  //  }
}
