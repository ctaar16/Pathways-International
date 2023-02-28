import React from "react";
import Icon1 from "../../images/Panel.jpeg";
import Icon2 from "../../images/Troubleshoot.jpeg";
import Icon3 from "../../images/Circuit.jpeg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Panel Upgrades</ServicesH2>
          <ServicesP>
            Protect your home by upgrading your electrical panel. Your electical
            panel is a vital piece to keeping your property safe and reliable.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Troubleshooting</ServicesH2>
          <ServicesP>
            We troubleshoot circuits and all other electrical issues utilizing a
            process that allows us to resolve issues quickly.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Circuit Installation</ServicesH2>
          <ServicesP>
            We can connect to existing circuits in your house or add dedicated
            ones for a variety of needs, such as a hot tub.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
