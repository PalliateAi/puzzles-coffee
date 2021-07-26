import styled from "styled-components";
import FeaturePic from "../../images/feature.jpeg";
import { Link } from "react-router-dom";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
  }
`;

export const FeatureButton = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ff7e01;
  color: #000;
  transition: 0.2s ease-out;
  border-radius: 9px;

  &:hover {
    color: #fff;
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
