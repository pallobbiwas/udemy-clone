import React from "react";

const Happyclient = () => {
  return (
    <div>
      <section className="bg-blue-700 mt-10 mb-20">
        <div className="py-10 md:px-32">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-4">We just keep growing</h3>
            <p>
              Our global community and our course catalog get bigger every day.
              Check out our latest numbers as of December 2021.
            </p>
          </div>
          <div className="md:px-32 pt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 justify-around">
              <div class="text-white ">
                <div class="stat">
                  <div class="stat-value">82K+</div>
                  <p class="font-bold">Course</p>
                </div>
              </div>
              <div class="text-white ">
                <div class="stat">
                  <div class="stat-value">98K+</div>
                  <p class="font-bold">Total apply</p>
                </div>
              </div>
              <div class="text-white ">
                <div class="stat">
                  <div class="stat-value">76K+</div>
                  <p class="font-bold">Instructor</p>
                </div>
              </div>
              <div class="text-white ">
                <div class="stat">
                  <div class="stat-value">51K+</div>
                  <p class="font-bold">Total students</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 pt-14">
              <div class="text-white text-center">
                <div class="stat">
                  <div class="stat-value">41K+</div>
                  <p class="font-bold">Students</p>
                </div>
              </div>
              <div class="text-white text-center">
                <div class="stat">
                  <div class="stat-value">75+</div>
                  <p class=" font-bold">Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Happyclient;
