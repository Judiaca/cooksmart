import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSession } from "next-auth/react";

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: lightblue; // Change color on hover
    }
  }
`;

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession(); // Get session information

  return (
    <Nav>
      <ul>
        <li>
          <Link href="/" className={router.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/ingredients"
            className={router.pathname === "/ingredients" ? "active" : ""}
          >
            Ingredients
          </Link>
        </li>
        {/* <li>
          <Link
            href="/ingredients/new"
            className={router.pathname === "/ingredients/new" ? "active" : ""}
          >
            Add Ingredients
          </Link>
        </li> */}
        {/* <li>
          <Link
            href="/flavors"
            className={router.pathname === "/flavors" ? "active" : ""}
          >
            Flavors
          </Link>
        </li> */}
        <li>
          <Link
            href="/pairings"
            className={router.pathname === "/pairings" ? "active" : ""}
          >
            Pairings
          </Link>
        </li>
        <li>
          <Link
            href="/pairings/new"
            className={router.pathname === "/pairings/new" ? "active" : ""}
          >
            Add Pairin
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={router.pathname === "/profile" ? "active" : ""}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/auth/login"
            className={router.pathname === "/auth/login" ? "active" : ""}
          >
            {/* Highlight: Conditionally render Login */}
            {!session ? "Login" : "Logout"}
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
