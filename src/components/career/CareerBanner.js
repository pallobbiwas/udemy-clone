import React from "react";

const CareerBanner = () => {
  return (
    <div>
      <section className="bg-color">
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-32 items-center gap-4">
          <div className="mr-5 ">
            <div className="bg-white p-4">
              {" "}
              <h1 className="text-4xl font-bold mb-5">
                Let's shape the future of learning
              </h1>
              <p>
                loremLet's shape the future of learningLet's shape the future of
                learningLet's shape the future of learning
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/WellnessFairNov2019-90-2-760x490.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="md:px-32 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="my-10 mr-5">
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/learners.png"
              alt=""
            />
            <h2 className="text-3xl font-bold my-4">We are learners</h2>
            <p>
              Enjoy a yearly learning stipend, office-wide learning events,
              unlimited access to Udemy courses, plus a monthly DEAL hour — a
              time for the whole company to drop everything and learn. Want to
              try teaching? Use our in-house production studio to film courses.
            </p>
          </div>
          <div className="mr-5">
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/navigators.png"
              alt=""
            />
            <h2 className="text-3xl font-bold my-4">We are navigators</h2>
            <p>
              Enjoy a yearly learning stipend, office-wide learning events,
              unlimited access to Udemy courses, plus a monthly DEAL hour — a
              time for the whole company to drop everything and learn. Want to
              try teaching? Use our in-house production studio to film courses.
            </p>
          </div>
          <div className="mr-5">
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/download.png"
              alt=""
            />
            <h2 className="text-3xl font-bold my-4">We make an impact</h2>
            <p>
              Enjoy a yearly learning stipend, office-wide learning events,
              unlimited access to Udemy courses, plus a monthly DEAL hour — a
              time for the whole company to drop everything and learn. Want to
              try teaching? Use our in-house production studio to film courses.
            </p>
          </div>
          <div className="mr-5">
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/global.png"
              alt=""
            />
            <h2 className="text-3xl font-bold my-4">We are global</h2>
            <p>
              Enjoy a yearly learning stipend, office-wide learning events,
              unlimited access to Udemy courses, plus a monthly DEAL hour — a
              time for the whole company to drop everything and learn. Want to
              try teaching? Use our in-house production studio to film courses.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-32">
          <div>
            <img
              src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/career_mosaic.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/career_mosaic.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/career_mosaic.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/career_mosaic.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="md:px-32 my-32">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Our Core Values</h1>
          <a className="text-blue-600" href="#f">
            Learn more about our values
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-10">
          <div>
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/Brand-Values_illos_color_Mission-Inspired-1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/Brand-Values_Always-Learning.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/Brand-Values_illos_Individually-Humble.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/Brand-Values_Earnestly-Authentic.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerBanner;
