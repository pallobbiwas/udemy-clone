import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import InvestorCover from "./InvestorCover";
import InvestorLastpart from "./InvestorLastpart";

const Investores = () => {
  return (
    <div>
      <Header>
        <InvestorCover />
        <InvestorLastpart />
        <Footer />
      </Header>
    </div>
  );
};

export default Investores;
