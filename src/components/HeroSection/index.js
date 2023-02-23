import React, { useState } from "react";
// import { Button } from "react-scroll";
import Video from "./video.mp4";
import { ButtonT } from "./ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <img src="data:image/jpeg;base64,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"/>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <span style={{ color: "white" }}> Booking Cars Made Easy</span>
        </HeroH1>
        <HeroP>
          Book your favourite car in very low price and enjoy the ride.
        </HeroP>
        <HeroBtnWrapper>
          <ButtonT
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={() => {
              window.scrollTo({ top: 570, behavior: "smooth" });
            }}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonT>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
