import React from "react";
import img1 from "../../image/investor.jpg";
import "../../styel/header.css";

const InvestorCover = () => {
  return (
    <div>
      <div className="bg-blue-700">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:px-32">
          <div>
            <h2 className="text-6xl font-bold text-white">
              Investor <br /> Overview
            </h2>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-color">
        <div className="grid grid-cols-2 md:grid-cols-5 md:px-32 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold">UDAMY</h1>
            <p>ticker</p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">NASDAQ GS</h1>
            <p>Exchange</p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">$12.15</h1>
            <p>Price</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">-0.32</h1>
            <p>Change ($)</p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">-2.57</h1>
            <p>Change (%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorCover;
