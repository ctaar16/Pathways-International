import React from "react";
import Video from "../../videos/class.mp4";
import {NavBtn, NavBtnLink} from "../Navbar/NavbarElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  
} from "./HeroElements";

const HeroSection = () => {
  //const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Pathways International Business Intelligence and Data Analytics</HeroH1>
        <HeroP>
          Learn to master Business Analytics and become a Data Analyst in as little as 12 weeks! Hurry, classes begin March 27th!
        </HeroP>
        <HeroBtnWrapper>
        <NavBtn>
              <NavBtnLink to="/signin">Contact Us To Sign Up</NavBtnLink>
            </NavBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
