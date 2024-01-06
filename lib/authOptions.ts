import connectDb from "@/lib/database";
import User from "@/lib/database/model/User.model";
import {
  NextAuthOptions,
  User as ReturnedUser,
  getServerSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: ReturnedUser & {
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},

      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          await connectDb();

          // Verify credentials
          const user = await User.findOne({ email });
          if (!user) throw new Error("User not found");
          const isCorrect = await user.comparePassword(password);
          if (!isCorrect) throw new Error("Wrong credentials");

          // If no issues with credentials
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (e) {
          throw e;
        }
      },
    }),
  ],
  // Callback action happens after a successful login
  callbacks: {
    session: ({ token, session }) => {
      //   if (session.user) {
      //     (session.user as { id: string }).id = token.id as string;
      //     (session.user as { role: string }).role = token.role as string;
      //   }

      // check if the session contains a user.role
      // then assign it to the frontend token
      if (token) {
        session.user.role = token.role;
      }

      return session;
    },

    async jwt({ token }) {
      //   if (params.user?.role) {
      //     (params.token.id = params.user.id),
      //       (params.token.role = params.user.role);
      //   }

      const fetchedUser = await User.findOne({ email: token.email! });

      if (fetchedUser) {
        token.role = fetchedUser?.role;
        token.id = fetchedUser._id;
      }

      return token;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
};

export const getAuthSession = () => getServerSession(authOptions);
