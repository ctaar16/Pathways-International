import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";



const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">(720) 662-7454</FooterLink>
              <FooterLink to="/">Help@pathwaysinternational.com</FooterLink>
              <FooterLink to="/">Denver, Colorado</FooterLink>
            </FooterLinkItems>
            
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Pathways International</SocialLogo>
            <WebsiteRights>
              Pathways International © {new Date().getFullYear()}
               All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//https://www.facebook.com/PathwaysInternationalUS"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="//https://www.instagram.com/pathwaysintus/">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//https://www.linkedin.com/company/76789291/admin/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
