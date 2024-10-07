// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   padding: 15px;
//   margin: 10px 0;
//   background-color: #f9f9f9;
//   box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h3`
//   margin: 0;
// `;

// const Description = styled.p`
//   margin: 5px 0;
// `;

// const PairingCard = ({ pairing }) => {
//   return (
//     <Card>
//       <Title>{pairing.dish}</Title>
//       <Description>
//         Pairs well with: {pairing.ingredients.join(", ")}
//       </Description>
//       <Description>{pairing.description}</Description>
//     </Card>
//   );
// };

// export default PairingCard;

// components/PairingCard.js
import React from "react";

const PairingCard = ({ pairing }) => {
  return (
    <div>
      <h2>
        {pairing.ingredient1} & {pairing.ingredient2}
      </h2>
      <p>{pairing.description}</p>
    </div>
  );
};

export default PairingCard;
