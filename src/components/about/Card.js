import React from "react";

const Card = () => {
  return (
    <div>
      <section className="md:px-32 my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-500 p-10 text-white">
            <div className="">
              <h2 className="text-3xl mb-5 font-bold">Work with us</h2>
              <p className="min-h-16">
                At Udemy, we’re all learners and instructors. We live out our
                values every day to create a culture that is diverse, inclusive,
                and committed to helping employees thrive.
              </p>
            </div>
            <div className="mt-20">
              <a className=" font-bold" href="#F">
                Join our team
              </a>
            </div>
          </div>
          <div className="bg-yellow-300 p-10  mx-2">
            <div className="">
              <h2 className="text-3xl mb-5 font-bold">Work with us</h2>
              <p className="min-h-16">
                At Udemy, we’re all learners and instructors. We live out our
                values every day to create a culture that is diverse, inclusive,
                and committed to helping employees thrive.
              </p>
            </div>
            <div className="mt-20">
              <a className=" font-bold" href="#F">
                Join our team
              </a>
            </div>
          </div>
          <div className="bg-green-600 p-10 text-white">
            <div className="">
              <h2 className="text-3xl mb-5 font-bold">Work with us</h2>
              <p className="min-h-16">
                At Udemy, we’re all learners and instructors. We live out our
                values every day to create a culture that is diverse, inclusive,
                and committed to helping employees thrive.
              </p>
            </div>
            <div className="mt-20">
              <a className=" font-bold" href="#F">
                Join our team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
