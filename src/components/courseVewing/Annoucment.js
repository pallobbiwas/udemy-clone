import React from "react";

const Annoucment = () => {
  return (
    <div className="md:px-32 mb-10">
      <div className="flex items-center">
        <div class="avatar placeholder mr-3">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>MX</span>
          </div>
        </div>
        <div>
          <div>
            <a className="text-blue-600 underline" href="#f">
              Jhon
            </a>
          </div>
          <div className="flex">
            <p>posted an announcement · 6 years ago . </p>
            <div class="tooltip" data-tip="hello">
              <button class="">
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
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl my-5">Browse Code Online</h1>
        <p className="mb-5">
          Hello, you can now browse the source code for Java for Complete
          Beginners online, <br /> all in one place.
        </p>
        <h1>
          See{" "}
          <a className="text-blue-600 underline" href="#f">
            the Java for Beginners Github Repository
          </a>
        </h1>
        <p className="my-2">
          GitHub allows you to download it as a zip, or if you've installed
          "git", the popular version control software, you can download it like
          this:
        </p>
        <p className="mb-2">
          git clone https://github.com/caveofprogramming/java-beginners.git
        </p>
        <p>Happy Coding!</p>
        <p>John</p>
      </div>
      <div className="my-4 flex">
        <div class="avatar placeholder mr-3">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>p</span>
          </div>
        </div>
        <div className="bg-red-500">
            <input placeholder="Type your comment" className="input input-bordered input-accent wid rounded-none" type="text" />
        </div>
      </div>
      <a  className="text-blue-600 underline" href="#f">Show comment (324)</a>
    </div>
  );
};

export default Annoucment;
