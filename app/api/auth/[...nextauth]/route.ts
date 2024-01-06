import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

const authHandler = NextAuth(authOptions);
// Because we will be doing some get and post request, we
// export authHandler as both
export { authHandler as GET, authHandler as POST };


