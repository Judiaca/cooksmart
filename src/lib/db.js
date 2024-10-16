import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  try {
    //Added try...catch block
    console.log("Connecting to database...");
    console.log("MongoDB URI:", process.env.MONGODB_URI);

    if (cached.conn) {
      console.log("Using existing database connection.");
      return cached.conn;
    }

    if (!cached.promise) {
      console.log("Creating new database connection.");
      cached.promise = mongoose
        .connect(process.env.MONGODB_URI)
        .then((mongoose) => {
          console.log("Connected to database successfully!");
          return mongoose;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    // Highlight: Catch connection errors
    console.error("Error connecting to database:", error);
    throw error; // Re-throw for handling elsewhere (optional)
  }
}

export default connectToDatabase;
// import mongoose from "mongoose";

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose
//       .connect(process.env.MONGODB_URI)
//       .then((mongoose) => {
//         return mongoose;
//       });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectToDatabase;
