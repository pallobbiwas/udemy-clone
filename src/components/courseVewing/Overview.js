import React, { useState } from "react";
import img1 from "../../image/icone/download (1).png";
import img2 from "../../image/icone/download (2).png";
import img3 from "../../image/icone/download.png";
import "./courseVewing.css";

const Overview = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="my-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-3">About this course</h1>
        <p>Learn to program using the Java programming language</p>
      </div>
      <hr />
      <div className="my-6">
        <div className="flex">
          <div className="w-64">
            <h3>By the number</h3>
          </div>
          <div className="w-80">
            <h3>Skill level: All Levels</h3>
            <h3>Students: 1732389</h3>
            <h3>Languages: English</h3>
            <h3>Captions: Yes</h3>
          </div>
          <div className="w-64">
            <h3>Lecture 73</h3>
            <h3>Video: 16 total hours</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-6">
        <div className="flex">
          <div className="w-64">
            <h3>Features</h3>
          </div>
          <div className="w-80">
            <h3>
              Available on{" "}
              <a className="text-blue-500 font-bold" href="#f">
                iOS
              </a>{" "}
              and{" "}
              <a className="text-blue-500 font-bold" href="#f">
                Android
              </a>
            </h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-6">
        <div className={show ? "text-transparent bg-clip-text bg-gradient-to-b from-black to-white" : "none"}>
          <div className="flex">
            <div className="w-64">
              <h3>Description</h3>
            </div>
            <div className="w-3/5">
              <h3>
                Learn to program in the Java programming language. This course
                assumes no prior programming knowledge, just a desire to learn
                to program.
              </h3>
              <div>
                <h1 className="mt-5 text-1xl font-bold">What you learn</h1>
                <ul>
                  <li className="bulet ml-3">Learn to program in Java</li>
                </ul>
              </div>
              <div>
                <h1 className="mt-5 text-1xl font-bold">
                  Are there any course requirements or prerequisites?
                </h1>
                <ul>
                  <li className="bulet ml-3">Basic fluency with computers</li>
                </ul>
              </div>
              <div>
                <h1 className="mt-5 text-1xl font-bold">
                  Who this course is for:
                </h1>
                <ul>
                  <li className="bulet ml-3">Anyone who wants to learn Java</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* hide section */}
        <div className={show ? "hidden" : "block"}>
          <hr />
          <div className="mt-5">
            <div className="flex">
              <div className="w-64">
                <h3>Instructor</h3>
              </div>
              <div className="w-3/5">
                <div className="flex items-center">
                  <div class="avatar online placeholder mr-8">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                      <span class="text-xl">JO</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">John Purcell</h3>
                    <p>Software Development Trainer</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <a href="#f">
                    <img className="w-8  mx-3" src={img1} alt="" />
                  </a>
                  <a href="#F">
                    <img className="w-8 " src={img2} alt="" />
                  </a>
                  <a href="#F">
                    <img className="w-8 ml-3" src={img3} alt="" />
                  </a>
                </div>
                <div className="mt-5">
                  <p>
                    {" "}
                    After working as a software developer and contractor for
                    over 14 years for a whole bunch of companies including CSC,
                    Proquest, SPSS and AT&T in the UK and Netherlands, I decided
                    to work full-time as a private software trainer. After
                    spending four years in the beautiful city of Budapest,
                    Hungary and a year in Berlin, I now live in my home town of
                    Derby, UK.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => setShow(!show)}
            className="text-blue-600 font-bold"
          >
            {show ? "show more..." : "Less more..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
