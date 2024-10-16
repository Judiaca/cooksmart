import { useRouter } from "next/router";
import styled from "styled-components";

const Button = styled.button`
  background-color: #333; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
`;

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return <Button onClick={handleGoBack}>Back</Button>;
};

export default BackButton;
