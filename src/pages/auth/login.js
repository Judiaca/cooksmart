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

  // State variables for sign-up
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        // Conditionally include sign-up data
        ...(isLogin ? {} : { name, surname }),
      });

      if (result.error) {
        if (result.error === "User not found") {
          setError("No user found with that email address.");
        } else {
          setError(result.error);
        }
      } else {
        console.log("Login/Sign-up successful", result);
        // Optionally redirect the user or show a success message
      }
    } catch (err) {
      setError("An error occurred during login/sign-up.");
    }
  };
  const toggleLoginSignup = () => {
    setIsLogin(!isLogin);
    setError(null); // Clear any previous errors
    // Clear sign-up fields when switching to login
    setName("");
    setSurname("");
  };

  return (
    <Layout>
      <div>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {error && <ErrorMessage message={error} />}
        <form onSubmit={handleSubmit}>
          {/* Email and Password fields */}
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

          {/* Conditionally render sign-up fields */}
          {!isLogin && (
            <div>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="surname">Surname:</label>

                <input
                  type="text"
                  id="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        {/* Toggle between login and sign-up */}
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={toggleLoginSignup} type="button">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
