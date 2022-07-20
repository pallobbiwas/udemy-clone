import React from "react";
import img1 from "../../image/Aflac_logo1.png";
import img2 from "../../image/box_logo.png";
import img3 from "../../image/eventbrite-logo-grey.png";
import img4 from "../../image/gofundme.png";
import img5 from "../../image/Kaiser-logo-grey.png";
import img6 from "../../image/Nordea.png";
import img7 from "../../image/SurveyMonkey-logo-grey.png";
import img9 from "../../image/Tata_logo.png";
import img8 from "../../image/VW-logo-grey.png";

const Brand = () => {
  return (
    <div>
      <section className="bg-color py-10 my-14">
        <div className="md:px-32">
          <div className="grid grid-cols-2 md:grid-cols-5 justify-center py-10">
            <div clasName="">
              <img className="w-40 h-20 mb-10" src={img1} alt="" />
            </div>
            <div clasName="">
              <img className="w-40 h-12" src={img2} alt="" />
            </div>
            <div clasName="">
              <img className="w-40 h-12" src={img3} alt="" />
            </div>
            <div clasName="">
              <img className="w-40 h-12" src={img4} alt="" />
            </div>
            <div clasName="">
              <img className="w-40 h-12" src={img5} alt="" />
            </div>
            <div clasName="">
              <img className="w-40 h-12" src={img6} alt="" />
            </div>
            <div clasName="">
              <img className="w-40 h-12" src={img7} alt="" />
            </div>
            <div clasName="">
              <img className="w-40 h-12" src={img8} alt="" />
            </div>
            <div clasName="">
              <img className="w-40 h-12" src={img9} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;
