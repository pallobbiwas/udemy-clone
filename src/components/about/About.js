import React from "react";
import img from "../../image/cover.png";
import "../../styel/header.css";

const About = () => {
  return (
    <div>
      {/* banner */}
      <section className="bg-color ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-10 md:mx-32">
            <div className="md:order-2">
              <img src={img} alt="" />
            </div>
            <div className="text-3xl md:text-6xl font-bold md:order-1">
              <p>We share knowledge with the world</p>
            </div>
          </div>
          <div className="bg-purple-800 text-center py-5">
            <a className="text-white text-1xl py-10" href="#hello">
              <span className="text-1xl font-bold">Company News:</span> Udemy Rings the Opening Bell in Celebration of its
              IPO!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
