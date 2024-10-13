import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import dbConnect from "@/lib/db";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await dbConnect();

        const user = await User.findOne({
          email: credentials.email,
        });

        if (user) {
          // Check password (replace with your actual password hashing/comparison logic)
          const isPasswordCorrect = credentials.password === user.password;

          if (isPasswordCorrect) {
            return user;
          }
        }

        // If no user or wrong password, return null
        return null;
      },
    }),
  ],
  // ... other NextAuth.js options ...
});
