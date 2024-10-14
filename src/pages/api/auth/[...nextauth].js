import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import dbConnect from "@/lib/db";
import bcrypt from "bcrypt";

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
        try {
          await dbConnect();

          if (credentials.email) {
            // Login logic
            const user = await User.findOne({ email: credentials.email });
            if (user) {
              console.log("Email used for query:", credentials.email);
              console.log("Hashed password from DB:", user.password);

              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
              );

              console.log("bcrypt.compare result:", isPasswordCorrect);

              if (isPasswordCorrect) {
                return user;
              } else {
                throw new Error("Incorrect password");
              }
            } else {
              throw new Error("User not found");
            }
          } else {
            // Sign-up logic
            console.log("Sign-up credentials:", credentials);

            // console.log("Checking for existing user...");
            // const existingUser = await User.findOne({
            //   username: credentials.username,
            // });
            // if (existingUser) {
            //   throw new Error("Username already exists");
            // }
            // console.log("Username is unique.");

            console.log("Hashing password...");
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            console.log("Hashed password:", hashedPassword);

            const newUser = new User({
              email: credentials.email,
              password: hashedPassword,
              name: credentials.name,
              surname: credentials.surname,
              // username: credentials.username,
            });

            console.log("Saving new user to database...");
            try {
              await newUser.save();
              console.log("New user saved successfully!");
              return newUser;
            } catch (error) {
              console.error("Error saving new user:", error);
              // Highlight: Re-throw the specific error for better debugging
              throw error;
            }
          }
        } catch (error) {
          console.error("Error in authorize:", error);
          // Highlight: Re-throw the error to be handled in the frontend
          throw error;
        }
      },
    }),
  ],

  // Secret for encrypting JWTs
  secret: process.env.NEXTAUTH_SECRET,

  // Session configuration
  session: {
    strategy: "jwt",
  },
});
