import React from "react";
import Link from "next/link";
import styled from "styled-components";

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
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/ingredients">Ingredients</Link>
        </li>
        <li>
          <Link href="/ingredients/new">Add Ingredient</Link>
        </li>
        <li>
          <Link href="/pairings">Pairings</Link>
        </li>
        <li>
          <Link href="/pairings/new">Add Pairing</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
