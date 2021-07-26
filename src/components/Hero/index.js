import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <HeroContent>
        <HeroItems>
          <HeroH1>Kuala Lumpur's Best Homebrew&#174; </HeroH1>
          {/* <HeroP>IDK</HeroP> */}
          <HeroBtn
            to={
              "//wa.me/601127064107?text=I'm%20interested%20in%20Puzzles%20Coffeee"
            }
            aria-label="Order Via Web"
            target="_blank"
          >
            Order Today
          </HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
