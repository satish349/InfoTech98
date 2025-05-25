// import NextAuth from "next-auth"

// // const handler = NextAuth(authOptions)

// // export { handler as GET, handler as POST }


// import GoogleProvider from "next-auth/providers/google";
// import { NextAuthOptions } from "next-auth";

// const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.sub;
//       return session;
//     },
//     async jwt({ token, user, account }) {
//       return token;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


// // app/api/auth/[...nextauth]/route.ts
// // import NextAuth from 'next-auth';
// // import CredentialsProvider from 'next-auth/providers/credentials';
// // import { db } from '@/lib/db';
// // import { compare } from 'bcrypt';

// // export const authOptions = {
// //   providers: [
// //     CredentialsProvider({
// //       name: 'credentials',
// //       credentials: {
// //         email: {},
// //         password: {}
// //       },
// //       async authorize(credentials) {
// //         if (!credentials) return null;

// //         const user = await db.user.findUnique({
// //           where: { email: credentials.email }
// //         });

// //         if (!user) return null;

// //         const isValid = await compare(credentials.password, user.password);
// //         if (!isValid) return null;

// //         return {
// //           id: String(user.id),
// //           email: user.email,
// //           name: user.username ?? "",
// //           username: user.username ?? ""
// //         };
// //       }
// //     })
// //   ],
// //   session: {
// //     strategy: 'jwt' as const
// //   },
// //   callbacks: {
// //     async jwt({ token, user }: { token: any; user?: any }) {
// //       if (user) {
// //         token.id = user.id;
// //         token.username = user.name;
// //       }
// //       return token;
// //     },
// //     async session({ session, token }: { session: any; token: any }) {
// //       if (token) {
// //         session.user.id = token.id;
// //         session.user.username = token.username;
// //       }
// //       return session;
// //     }
// //   },
// //   secret: process.env.JWT_SECRET
// // };

// // const handler = NextAuth(authOptions);
// // export { handler as GET, handler as POST };



import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcrypt";
import { db } from "@/lib/db"; // Your Prisma client

const handler = NextAuth({
  providers: [
    // Email/Password login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("No user found");
        }

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.username ?? "",
          username: user.username ?? "", // Ensure username is always a string
        };
      },
    }),

    // Google Sign-In
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/", // Your custom sign-in page
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
