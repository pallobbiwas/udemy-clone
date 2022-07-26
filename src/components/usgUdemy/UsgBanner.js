import React from "react";
import img1 from "../../image/ESG at Udemy/Best-Workplaces-greenbrd.png";
import img5 from "../../image/ESG at Udemy/Best-Workplaces.png";
import img6 from "../../image/ESG at Udemy/Best-Workplaces_withspacers-1.png";
import img3 from "../../image/ESG at Udemy/BPTW.png";
import headImg from "../../image/ESG at Udemy/esg-head2-759x490-1.png";
import {
  default as img2,
  default as img4
} from "../../image/ESG at Udemy/Great-place-to-work.png";
import introCeo from "../../image/ESG at Udemy/intro_ceo-1-newheadshot-1.png";
import img11 from "../../image/ESG at Udemy/sasb_logo.png";
import img10 from "../../image/ESG at Udemy/sdg_logo.png";
import img12 from "../../image/ESG at Udemy/sustainalytics_logo.png";
import female from "../../image/ESG at Udemy/woman-sit2.png";
import "../../styel/header.css";

const UsgBanner = () => {
  return (
    <div className="mb-72">
      <section className="bg-color h-96">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20 md:px-20 gap-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">
              Environmental, Social, and Corporate Governance at Udemy
            </h1>
          </div>
          <div>
            <img src={headImg} alt="" />
          </div>
        </div>
      </section>
      <section className="pt-32 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className="w-2/3">
            <img className="full" src={introCeo} alt="" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-bold text-4xl">
              Welcome from Gregg Coccari, CEO
            </h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              fugiat nesciunt tenetur, beatae accusamus ab ipsam corporis fugit,
              maiores iste esse delectus perspiciatis iusto ducimus nulla quam
              velit. Est, laboriosam.
            </p>
            <button className="btn btn-active rounded-none">
              Download Udemy ESG Impact Report
            </button>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="md:px-20">
          <div className="bg-color px-32 py-20">
            <div>
              <h3 className="text-center text-3xl font-bold mb-20">
                We’re humbled to be recognized for our efforts worldwide
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6">
              <div>
                <img className="w-20" src={img1} alt="" />
              </div>
              <div>
                <img className="w-20" src={img2} alt="" />
              </div>
              <div>
                <img className="w-20" src={img3} alt="" />
              </div>
              <div>
                <img className="w-20" src={img4} alt="" />
              </div>
              <div>
                <img className="w-20" src={img5} alt="" />
              </div>
              <div className="">
                <img className="w-20" src={img6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 bg-color pt-20 md:margin-bottom">
        <div className="md:px-20 md:relative">
          <div className="grid grid-cols-1 md:grid-cols-2 items-baseline">
            <div>
              <h1 className="text-5xl font-bold mb-5">
                Committed to Creating New Possibilities
              </h1>
              <p>
                As a mission-driven company, we enable anyone from virtually
                anywhere in the world to create a course and to market their
                expertise. This access enables new opportunities for people and
                organizations everywhere by connecting them to the knowledge and
                skills they need to be prepared for whatever comes next.
              </p>
            </div>
            <div>
              <img src={female} alt="" />
            </div>
          </div>
          <div className="md:absolute bg-white top-3/4 right-20 left-20 py-20 px-10">
            <div className="pb-10">
              <h1 className="text-center text-4xl font-bold pb-4">
                Udemy’s ESG Goals, Policies and Reporting
              </h1>
              <hr />
            </div>
            <div className="flex px-20 mb-10">
              <div className=" w-1/5">
                <img className="w-4/5" src={img10} alt="" />
              </div>
              <div className="ml-10 w-full">
                <h1 className="text-3xl mb-5 font-bold">
                  United Nations Sustainable Development Goals
                </h1>
                <p>
                Recognizing the growing importance of fact-based, actionable assessments of ESG risks and opportunities across business operations, we engaged Sustainalytics, a Morningstar company and an independent provider of ESG and corporate governance ratings, research, and analysis to develop an ESG risk-rating report. The ESG risk-rating report is available from Sustainalytics, and a summary is available on the Sustainalytics website.
                </p>
              </div>
            </div>
            <hr />
            <div className="flex px-20 my-20">
              <div className=" w-1/5">
                <img className="w-4/5" src={img11} alt="" />
              </div>
              <div className="ml-10 w-full">
                <h1 className="text-3xl mb-5 font-bold">
                Sustainability Accounting Standards Board (SASB)
                </h1>
                <p>
                Recognizing the growing importance of fact-based, actionable assessments of ESG risks and opportunities across business operations, we engaged Sustainalytics, a Morningstar company and an independent provider of ESG and corporate governance ratings, research, and analysis to develop an ESG risk-rating report. The ESG risk-rating report is available from Sustainalytics, and a summary is available on the Sustainalytics website.
                </p>
              </div>
            </div>
            <hr />
            <div className="flex px-20 mt-10">
              <div className=" w-1/5">
                <img className="w-4/5" src={img12} alt="" />
              </div>
              <div className="ml-10 w-full">
                <h1 className="text-3xl mb-5 font-bold">
                Sustainalytics
                </h1>
                <p className="mb-16">
                Recognizing the growing importance of fact-based, actionable assessments of ESG risks and opportunities across business operations, we engaged Sustainalytics, a Morningstar company and an independent provider of ESG and corporate governance ratings, research, and analysis to develop an ESG risk-rating report. The ESG risk-rating report is available from Sustainalytics, and a summary is available on the Sustainalytics website.
                </p>
                <small className="italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error odio repudiandae temporibus corrupti iste modi adipisci, maiores itaque quia ex quae nemo? Repellat praesentium error at soluta reiciendis cumque repellendus?</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsgBanner;
