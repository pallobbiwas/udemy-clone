import React from "react";
import headImg from "../../image/ESG at Udemy/esg-head2-759x490-1.png";
import introCeo from "../../image/ESG at Udemy/intro_ceo-1-newheadshot-1.png";
import "../../styel/header.css";

const UsgBanner = () => {
  return (
    <div className="mb-20">
      <section className="bg-color h-96">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20 md:px-20 ">
            <div>
                <h1 className="text-5xl font-bold">Environmental, Social, and Corporate Governance at Udemy</h1>
            </div>
            <div>
                <img src={headImg} alt="" />
            </div>
        </div>
      </section>
      <section className="pt-32 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="w-2/3">
                <img className="full" src={introCeo} alt="" />
            </div>
            <div>
                <h1 className="font-bold text-4xl">Welcome from Gregg Coccari, CEO</h1>
                <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat nesciunt tenetur, beatae accusamus ab ipsam corporis fugit, maiores iste esse delectus perspiciatis iusto ducimus nulla quam velit. Est, laboriosam.</p>
                <button className="btn btn-active rounded-none">Download Udemy ESG Impact Report</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default UsgBanner;
