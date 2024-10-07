// // Navbar.js
// import React from "react";
// import styled from "styled-components";

// const Nav = styled.nav`
//   /* Add styles for your navbar */
//   background-color: #333;
//   color: white;
//   padding: 1rem;
// `;

// const Navbar = () => {
//   return (
//     <Nav>
//       <h2>CookSmart</h2>
//       {/* Other navbar items */}
//     </Nav>
//   );
// };

// export default Navbar; // Ensure this is a default export

// components/Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
