import React from "react";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialLocation,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to={
                "//wa.me/601127064107?text=I'm%20interested%20in%20Puzzles%20Coffeee"
              }
              aria-label="Order Via Web"
              target="_blank"
            >
              +60 11-2706 4107 - Azlan
            </SocialLogo>
            <SocialLocation style={{ marginLeft: "auto" }}>
              Bandar Sri Damansara
            </SocialLocation>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="WhatsApp">
                {/* <FaWhatsapp /> */}
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
