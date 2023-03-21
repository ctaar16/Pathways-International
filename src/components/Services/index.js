import React from "react";
import Icon1 from "../../images/boardroom.jpg";
import Icon2 from "../../images/sheet.jpg";
import Icon3 from "../../images/sql2.jpg";
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
    <ServicesContainer id="courses">
      <ServicesH1>Course Overview</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Data Analytics</ServicesH2>
          <ServicesP>
            You will learn how to analyze and manipulate data from a variety of sources. You will master the ETL process and use the information to influence decisions makers.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Advanced Power BI</ServicesH2>
          <ServicesP>
            Learn how to convert data into visuals that reveal meaningful information. You will learn to create new measures using DAX.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>SQL</ServicesH2>
          <ServicesP>
            Learn how to get the most important information from your data using SQL and SSMS. We will teach how to create databases, tables, and write queries.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
