import React from "react";
import "./courseVewing.css";

const CourseHeader = () => {
  return (
    <div>
      <div className="navbar bg-black text-white">
        <div className="flex-1">
          <p>
            <a className="text-3xl font-bold" href="#f">
              udemy
            </a>
            <span className="mx-4">|</span>
            <a className="text-1xl" href="#f">
              Java Tutorial for Complete Beginners
            </a>
          </p>
        </div>
        <div className="flex-none">
          <div className="flex items-center">
            <div className="blackRound"></div>
            <div className="flex items-center ml-3">
              <p> Your prograss</p>
              <button className="ml-2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex btn bg-black outline rounded-none px-4 mx-3">
            <p>Share </p>
            <p className="ml-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </p>
          </div>
          <div className="btn bg-black outline rounded-none px-2">
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
