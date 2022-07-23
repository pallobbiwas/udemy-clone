import React from "react";

const PressCover = () => {
  return (
    <div>
      <section className="bg-color">
        <div className="md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="mr-20">
              <h1 className="text-5xl font-bold">What others are saying</h1>
            </div>
            <div>
              <img
                src="https://about.udemy.com/wp-content/uploads/2021/07/camera2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-32 my-20">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-bold mb-5">Udemy in the news</h1>
          <p>
            For media interviews and inquiries, please send an email to{" "}
            <a className="text-blue-500" href="#g">
              press@udemy.com
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-color flex justify-center items-center h-72 mb-20">
            <div>
              <img
                src="https://about.udemy.com/wp-content/uploads/2017/09/inc-logo-200x69.png"
                alt=""
              />
            </div>
          </div>
          <div className="ml-8 mb-20">
            <h1 className="font-bold text-blue-500 mb-3">May 10, 2022</h1>
            <a className="text-4xl font-bold" href="#f">
              If You Want to Stay Competitive, These Are...
            </a>
            <p className="mt-3">
              Data from Udemy shows a serious uptick in the number of workers
              getting educated on blockchain technology. In the first quarter of
              2022, learners on Udemy, an online learning...
            </p>
          </div>

          <div className="bg-color flex justify-center items-center h-72 mb-20">
            <div>
              <img
                src="https://about.udemy.com/wp-content/uploads/2021/05/harvard-business-review-logo-FD07ED9958-seeklogo.com_-135x80.png"
                alt=""
              />
            </div>
          </div>
          <div className="ml-8 mb-20">
            <h1 className="font-bold text-blue-500 mb-3">May 10, 2022</h1>
            <a className="text-4xl font-bold" href="#f">
              What is World Studying Online? Blockchain...
            </a>
            <p className="mt-3">
              Data from Udemy shows a serious uptick in the number of workers
              getting educated on blockchain technology. In the first quarter of
              2022, learners on Udemy, an online learning...
            </p>
          </div>

          <div className="bg-color flex justify-center items-center h-72 mb-20">
            <div>
              <img
                src="https://about.udemy.com/wp-content/uploads/2016/10/Forbes_logo-200x52.png"
                alt=""
              />
            </div>
          </div>
          <div className="ml-8 mb-20">
            <h1 className="font-bold text-blue-500 mb-3">May 10, 2022</h1>
            <a className="text-4xl font-bold" href="#f">
              In The Digital 2020s, Jobs Are More Than Just Jobs...
            </a>
            <p className="mt-3">
              Data from Udemy shows a serious uptick in the number of workers
              getting educated on blockchain technology. In the first quarter of
              2022, learners on Udemy, an online learning...
            </p>
          </div>

          <div className="bg-color flex justify-center items-center h-72 mb-20">
            <div>
              <img
                src="https://about.udemy.com/wp-content/uploads/2021/05/harvard-business-review-logo-FD07ED9958-seeklogo.com_-135x80.png"
                alt=""
              />
            </div>
          </div>
          <div className="ml-8 mb-20">
            <h1 className="font-bold text-blue-500 mb-3">May 10, 2022</h1>
            <a className="text-4xl font-bold" href="#f">
              It’s Time to Rethink Job Descriptions for the...
            </a>
            <p className="mt-3">
              Data from Udemy shows a serious uptick in the number of workers
              getting educated on blockchain technology. In the first quarter of
              2022, learners on Udemy, an online learning...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressCover;
