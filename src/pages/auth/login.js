import { useState } from "react";
import { signIn } from "next-auth/react";
import ErrorMessage from "../../components/ErrorMessage";
import Layout from "@/components/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  // State to toggle between login and sign-in

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        setError(result.error);
      } else {
        console.log("Login/Sign-in successful", result);
      }
    } catch (err) {
      setError("An error occurred during login/sign-in.");
    }
  };

  return (
    <Layout>
      <div>
        <h1>{isLogin ? "Login" : "Sign In"}</h1>
        {error && <ErrorMessage message={error} />}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isLogin ? "Login" : "Sign In"}</button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Switch to Sign In" : "Switch to Login"}
        </button>
      </div>
    </Layout>
  );
};

export default Login;

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <ErrorMessage message={error} />}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// // import React, { useState } from "react";
// // import ErrorMessage from "../../components/ErrorMessage";
// // import Layout from "@/components/Layout";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     // Perform login logic (e.g., call an API to authenticate user)
// //     // Handle success or error
// //   };

// //   return (
// //     <Layout>
// //       <div>
// //         <h1>Login</h1>
// //         {error && <ErrorMessage message={error} />}
// //         <form onSubmit={handleSubmit}>
// //           <div>
// //             <label>Email:</label>
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Password:</label>
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <button type="submit">Login</button>
// //         </form>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default Login;
