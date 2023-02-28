import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
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
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Quotes</FooterLink>
              <FooterLink to="/signin">Inspections</FooterLink>
              <FooterLink to="/">Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">(406) 880-4777</FooterLink>
              <FooterLink to="/">bowmanelectricmt@gmail.com</FooterLink>
              <FooterLink to="/">Frenchtown, Montana</FooterLink>
            </FooterLinkItems>
            
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Bowman Electric</SocialLogo>
            <WebsiteRights>
              Bowman Electric © {new Date().getFullYear()}
              All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/profile.php?id=100086272459096"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com/bowmanelectricmt/?fbclid=IwAR07yoWUwCtPUPJRTFpLzkA-eKXh7p7WnfazderEOIgnI16aGQ8sg0NcwLY">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
