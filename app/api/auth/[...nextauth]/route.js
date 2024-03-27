import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { headers } from "next/headers";

const Handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "john" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const headerList = headers();
        const host = headerList.get("host");
        const protocol = headerList.get("x-forwarded-proto");
        const res = await fetch(`${protocol}://${host}/api/user/login`, {
          method: "POST",
          "Content-Type": "application/json",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        console.log(user.user);
        if (user.user) {
          return user.user;
        } else {
          return null;
        }
      },
    }),
  ],
  // callbacks: {
  //   async session({ session, token }) {
  //     const userExist = await User.findOne({ email: session.user.email });
  //     if (!userExist) {
  //       return null;
  //     } else {
  //       const objectWithoutPassword = { ...userExist.toObject() };
  //       delete objectWithoutPassword.password;
  //       delete objectWithoutPassword.validationToken;
  //       session.user = { ...objectWithoutPassword };
  //       return session;
  //     }
  //   },
  //   // async signIn({ profile }) {
  //   //   if (profile) {
  //   //     try {
  //   //       await connectToDb();
  //   //       const existingUser = await User.findOne({ email: profile.email });
  //   //       if (existingUser) {
  //   //         return true;
  //   //       } else {
  //   //         const newUser = await User.create({
  //   //           email: profile.email,
  //   //           name: profile.name,
  //   //           verified: "Yes",
  //   //         });
  //   //       }
  //   //       return true;
  //   //     } catch (error) {
  //   //       console.log(error);
  //   //       return false;
  //   //     }
  //   //   } else {
  //   //     return true;
  //   //   }
  //   // },
  // },
});

export { Handler as GET, Handler as POST };
