import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import CareerBanner from "./CareerBanner";
import CareerLastPart from "./CareerLastPart";
import JoinOurTeam from "./JoinOurTeam";

const Career = () => {
  return (
    <div>
      <Header>
        <CareerBanner />
        <CareerLastPart />
        <JoinOurTeam />
        <Footer />
      </Header>
    </div>
  );
};

export default Career;
