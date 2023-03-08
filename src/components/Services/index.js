import React from "react";
import Icon1 from "../../images/laptop.jpg";
import Icon2 from "../../images/laptop2.jpg";
import Icon3 from "../../images/servergal.jpg";
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
      <ServicesH1>Our Courses</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Data Analytics</ServicesH2>
          <ServicesP>
            Learn how to become a data analyst in as little as 12 weeks! Contact us to learn more!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Advanced Power BI</ServicesH2>
          <ServicesP>
            Learn how to convert data into visuals that reveal meaningful information to important decision makers.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Data Visuzalization</ServicesH2>
          <ServicesP>
            Learn how to get the most important information from your data from a variety of data sources.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
