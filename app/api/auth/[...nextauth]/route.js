import User from "@/Schemas/User/UserModel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { headers } from "next/headers";

const Handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "john" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const headerList = headers();
        // console.log(headerList.get("origin"));
        const origin = headerList.get("origin");
        const res = await fetch(`${origin}/api/user/login`, {
          method: "POST",
          "Content-Type": "application/json",
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        console.log("User in Next Auth", user);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      console.log("Session", session);
      const userExist = await User.findOne({ email: session.user.email });
      if (!userExist) {
        return null;
      } else {
        const objectWithoutPassword = { ...userExist.toObject() };
        delete objectWithoutPassword.password;
        delete objectWithoutPassword.validationToken;
        session.user = { ...objectWithoutPassword };
        // console.log("Session Returned", session);
        return session;
      }
    },
    // async signIn({ profile }) {
    //   if (profile) {
    //     try {
    //       await connectToDb();
    //       const existingUser = await User.findOne({ email: profile.email });
    //       if (existingUser) {
    //         return true;
    //       } else {
    //         const newUser = await User.create({
    //           email: profile.email,
    //           name: profile.name,
    //           verified: "Yes",
    //         });
    //       }
    //       return true;
    //     } catch (error) {
    //       console.log(error);
    //       return false;
    //     }
    //   } else {
    //     return true;
    //   }
    // },
  },
});

export { Handler as GET, Handler as POST };
