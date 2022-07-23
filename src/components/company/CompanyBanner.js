import React from "react";
import "../../styel/header.css";

const CompanyBanner = () => {
  return (
    <div>
      <section className="bg-color">
        <div className="md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="mr-4">
              <h1 className="text-5xl font-bold">
                Connecting people with knowledge
              </h1>
            </div>
            <div>
              <img
                src="https://about.udemy.com/wp-content/uploads/2021/07/company.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:px-64 text-center my-20 bg-white">
          <h1 className="text-4xl font-bold">Our origins</h1>
          <p className="my-8 text-2xl">
            Growing up in a small Turkish village, Udemy founder Eren Bali had
            few educational opportunities — until he got a computer. Fueled by
            his dream to compete in mathematics, he used the internet to learn
            his way to a silver medal in the International Math Olympiad.
          </p>
          <p className="text-2xl">
            After learning online changed his life, Eren partnered with
            co-founders Oktay Caglar and Gagan Biyani to achieve a common goal:
            to make quality education accessible to all.
          </p>
        </div>
      </section>
      <section className="bg-color">
        <div className="md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-4 pb-20">
            <div>
              <img
                src="https://about.udemy.com/wp-content/uploads/2021/07/video-still-eren.jpeg"
                alt=""
              />
            </div>
            <div className="ml-4">
              <h1 className="text-4xl font-bold mb-4">How we start</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                corporis perspiciatis blanditiis accusamus facilis sit?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyBanner;
