import React from "react";
import Footer from "../shared/Footer";
import CourseHeader from "./CourseHeader";

const CourseVewing = () => {
  return (
    <div>
      <CourseHeader />
      <h1>hhh</h1>
      <div>
        <div className="bg-black py-4">
          <div className="md:px-16 text-white flex justify-between">
            <div>
              <h1 className="text-2xl font-bold">Teach the world online</h1>
              <h3 className="font-bold">
                Create an online video course, reach students across the globe,
                and earn money
              </h3>
            </div>
            <div>
              <button className="btn btn-active px-4 rounded-none outline">
                Tech on udemy
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-black">
          <div className="md:px-16 grid grid-cols-2 md:grid-cols-2 items-center py-4">
            <div>
              <p className="text-1xl text-white font-bold">
                Top companies choose{" "}
                <a className="text-blue-400" href="#f">
                  Udemy Business
                </a>{" "}
                to build in-demand career skills.
              </p>
            </div>
            <div className="flex justify-around">
              <div>
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default CourseVewing;
