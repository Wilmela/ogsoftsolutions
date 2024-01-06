import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequest) {
    // return NextResponse
    return NextResponse.rewrite(new URL("/dashboard", req.url));
  },
  {
    callbacks: {
      async authorized({ token }) {
        
        return token?.role === "admin" || token?.role === "super-admin";
      },
    },
  }
);

export const config = { matcher: ["/dashboard"] };
