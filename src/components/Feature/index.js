import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Coffee of the day</h1>
      <p>Hazelnut Latte with Cream</p>
      <FeatureButton
        to={
          "//wa.me/601127064107?text=I'm%20interested%20in%20Puzzles%20Coffeee"
        }
        aria-label="Order Via Web"
        target="_blank"
      >
        Order Now
      </FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
