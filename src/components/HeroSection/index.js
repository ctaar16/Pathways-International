import React from "react";
import Video from "../../videos/video.mp4";
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
        <HeroH1>Home And Office Lighting Made Easy</HeroH1>
        <HeroP>
          Contact us for a free estimate and receive $100 in credit towards your
          build
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
