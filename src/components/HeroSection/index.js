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
        <HeroH1>Pathways International Power BI and Analytics</HeroH1>
        <HeroP>
          Learn how to become a Power BI and Analyst in as little as 12 weeks!
        </HeroP>
        <HeroBtnWrapper>
        <NavBtn>
              <NavBtnLink to="/signin">Contact Us</NavBtnLink>
            </NavBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
