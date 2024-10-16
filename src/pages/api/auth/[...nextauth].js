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
            console.log("USER", user);
            if (user) {
              console.log("PW used for query:", credentials.password);
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
              // Sign-up logic
              console.log("Sign-up credentials:", credentials);

              console.log("Hashing password...");
              const saltRounds = 10;
              const salt = await bcrypt.genSalt(saltRounds);
              const passwordHash = await bcrypt.hash(
                credentials.password,
                salt
              );

              const newUser = new User({
                email: credentials.email,
                password: passwordHash,
                name: credentials.name,
                surname: credentials.surname,
              });

              console.log("Saving new user to database...");
              try {
                await newUser.save();
                console.log("New user saved successfully!");
                return newUser;
              } catch (error) {
                console.error("Error saving new user:", error);
                // Re-throw the specific error for better debugging
                throw error;
              }
            }
          }
        } catch (error) {
          console.error("Error in authorize:", error);
          // Re-throw the error to be handled in the frontend
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
