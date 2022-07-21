import React from "react";
import "../../styel/header.css";

const BlogBanner = () => {
  return (
    <div>
      <section className="bg-color">
        <div className="md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 pb-10 items-center">
            <div>
              <p className="text-5xl font-bold">
                Lorem ipsum dolor sit amet</p>
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
    </div>
  );
};

export default BlogBanner;
