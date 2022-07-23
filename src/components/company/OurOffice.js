import React from "react";

const OurOffice = () => {
  return (
    <div className="my-20">
      <section className="md:px-32">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Our Office</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-20">
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/san-francisco-460x350.jpeg"
              alt=""
            />
            <h3 className="text-3xl font-bold mt-3">San Francisco, CA</h3>
          </div>
          <div className="">
            <img
              src="https://about.udemy.com/wp-content/uploads/2022/01/Downtown-Mountain-View-CRPD1400x500-480x350.jpeg"
              alt=""
            />
            <h3 className="text-3xl font-bold mt-3">Mountain View, CA</h3>
          </div>
          <div className="">
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/denver-460x350.jpeg"
              alt=""
            />
            <h3 className="text-3xl font-bold mt-3">Denver, CO</h3>
          </div>
          <div className="">
            <img
              src="https://about.udemy.com/wp-content/uploads/2022/01/Harrisburg-e1643412155657-480x350.jpeg"
              alt=""
            />
            <h3 className="text-3xl font-bold mt-3">Mechanicsburg, PA</h3>
          </div>
          <div className="">
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/dublin-1-460x350.jpeg"
              alt=""
            />
            <h3 className="text-3xl font-bold mt-3">Dublin, Ireland</h3>
          </div>
          <div className="">
            <img
              src="https://about.udemy.com/wp-content/uploads/2021/07/ankara-1-450x350.jpeg"
              alt=""
            />
            <h3 className="text-3xl font-bold mt-3">Ankara, Turkey</h3>
          </div>
        </div>
        <div className="md:px-32 my-10">
          <p>
            Check out our Help and Support center to find quick answers to your
            questions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurOffice;
