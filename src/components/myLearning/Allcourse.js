import React from "react";
import "./AllLearn.css";

const Allcourse = () => {
  return (
    <div className="mb-32">
      <div className="border p-4">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="ml-5">
            <h1 className="text-1xl font-bold">Schedule learning time</h1>
            <p className="my-2">
              Learning a little each day adds up. Research shows that students
              who make learning a habit are more likely to reach their goals.
              Set time aside to learn and get reminders using your learning
              scheduler.
            </p>
            <div>
              <button className="btn btn-active rounded-none px-2 mr-4">
                Get Started
              </button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcourse;
