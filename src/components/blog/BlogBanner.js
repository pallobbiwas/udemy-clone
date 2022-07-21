import React from "react";
import "../../styel/header.css";

const BlogBanner = () => {
  return (
    <div>
      <section className="bg-color">
        <div className="md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 pb-10 items-center">
            <div>
              <p className="text-5xl font-bold">Lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img
                src="https://about.udemy.com/wp-content/uploads/2021/07/blog5-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:px-32">
        <div>
          <ul className="flex">
            <li className="item mr-10 text-blue-600 font-bold">
              <a href="#g">All</a>
            </li>
            <li className="item mr-10 text-blue-600">
              <a href="#g">Students</a>
            </li>
            <li className="item mr-10 text-blue-600">
              <a href="#g">Instracter</a>
            </li>
            <li className="item mr-10 text-blue-600">
              <a href="#g">Ideas & Option</a>
            </li>
            <li className="item mr-10 text-blue-600">
              <a href="#g">udemy news</a>
            </li>
            <li className="item mr-10 text-blue-600">
              <a href="#g">udemy business</a>
            </li>
            <li className="item mr-10 text-blue-600">
              <a href="#g">Social innovotion</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-32">
          <div className="">
            <img
              src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/fallbackimage.jpg"
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-2xl font-bold text-purple-700 ">12/5/2022</p>
            <p className="text-5xl font-bold my-6">Wellcome to our brand</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              est numquam, facilis odio sapiente vel veritatis soluta ipsam non
              assumenda rerum dignissimos sequi ea tempora voluptas repellendus
              deserunt exercitationem ipsa.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
          <div className="h-80">
            <img
              className="h-full"
              src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/fallbackimage.jpg"
              alt=""
            />
          </div>
          <div className="ml-4 h-80">
            <img
              className="h-full"
              src="https://about.udemy.com/wp-content/uploads/2022/03/TURBO-ANIMATION-CONCEPT.gif"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;
