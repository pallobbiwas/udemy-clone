import React from "react";
import "../../styel/header.css";

const InvestorLastpart = () => {
  return (
    <div>
      <section className="pt-28">
        <div>
          <div className="text-center text-black md:px-32 mb-32">
            <h3 className="text-5xl font-bold mb-5">Corporate Profile</h3>
            <p className="text-2xl">
              Whether you want to learn or to share what you know, you’ve come
              to the right place. As a global destination for online learning,
              we connect people through knowledge.
            </p>
          </div>
          <div className="bg-color py-8">
            <div className="md:px-32">
              <div className="carousel ">
                <div id="slide1" className="carousel-item relative w-full">
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-64">
                      <div>
                        <iframe
                          className="h-full w-full"
                          src="https://www.youtube.com/embed/pPNAnx3UqfQ"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="ml-4">
                        <h1 className="text-3xl font-bold mb-3">
                          Our Instructer
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quas architecto nam consequatur beatae eligendi,
                          fugiat repellat, eum in dolore officiis pariatur,
                          aliquid eos voluptas natus reiciendis veritatis?
                          Quidem architecto dolorem culpa, impedit amet at
                          accusamus, omnis ullam earum, facere cum!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-64">
                      <div>
                        <iframe
                          className="h-full w-full"
                          src="https://www.youtube.com/embed/pPNAnx3UqfQ"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="ml-4">
                        <h1 className="text-3xl font-bold mb-3">
                          Our Instructer
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quas architecto nam consequatur beatae eligendi,
                          fugiat repellat, eum in dolore officiis pariatur,
                          aliquid eos voluptas natus reiciendis veritatis?
                          Quidem architecto dolorem culpa, impedit amet at
                          accusamus, omnis ullam earum, facere cum!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-64">
                      <div>
                        <iframe
                          className="h-full w-full"
                          src="https://www.youtube.com/embed/pPNAnx3UqfQ"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="ml-4">
                        <h1 className="text-3xl font-bold mb-3">
                          Our Instructer
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quas architecto nam consequatur beatae eligendi,
                          fugiat repellat, eum in dolore officiis pariatur,
                          aliquid eos voluptas natus reiciendis veritatis?
                          Quidem architecto dolorem culpa, impedit amet at
                          accusamus, omnis ullam earum, facere cum!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-32 mt-16">
        <div className="py-16 px-5">
          <h1 className="text-center text-4xl font-bold mb-10">Latest News</h1>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="text-center">
              <a className="text-3xl underline" href="#f">
                Udemy Second Quarter Fiscal 2022 Earnings Call
              </a>
              <p className="mt-5">August 3, 2022 at 5:00 PM EDT</p>
            </div>
            <div className="text-center">
              <a className="text-3xl underline" href="#f">
                Udemy Second Quarter Fiscal 2022 Earnings Call
              </a>
              <p className="mt-5">August 3, 2022 at 5:00 PM EDT</p>
            </div>
            <div className="text-center">
              <a className="text-3xl underline" href="#f">
                Udemy Second Quarter Fiscal 2022 Earnings Call
              </a>
              <p className="mt-5">August 3, 2022 at 5:00 PM EDT</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="btn btn-active rounded-none">Vew all</button>
          </div>
        </div>
      </section>
      <section className="md:px-32 mb-16 bg-color">
        <div className="py-16 px-5">
          <h1 className="text-center text-4xl font-bold mb-10">
            Recent Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="text-center">
              <a className="text-3xl underline" href="#f">
                Udemy Second Quarter Fiscal 2022 Earnings Call
              </a>
              <p className="mt-5">August 3, 2022 at 5:00 PM EDT</p>
            </div>
            <div className="text-center">
              <a className="text-3xl underline" href="#f">
                Udemy Second Quarter Fiscal 2022 Earnings Call
              </a>
              <p className="mt-5">August 3, 2022 at 5:00 PM EDT</p>
            </div>
            <div className="text-center">
              <a className="text-3xl underline" href="#f">
                Udemy Second Quarter Fiscal 2022 Earnings Call
              </a>
              <p className="mt-5">August 3, 2022 at 5:00 PM EDT</p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-32 my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-500 p-10 text-white">
            <div className="">
              <h2 className="text-2xl mb-5 font-bold">SEC Filings</h2>
            </div>
            <div className="mt-20">
              <a className=" font-bold" href="#F">
                Join our team
              </a>
            </div>
          </div>
          <div className="bg-yellow-300 p-10  mx-2">
            <div className="">
              <h2 className="text-2xl mb-5 font-bold">Corporate Governance</h2>
            </div>
            <div className="mt-20">
              <a className=" font-bold" href="#F">
                Join our team
              </a>
            </div>
          </div>
          <div className="bg-green-600 p-10 text-white">
            <div className="">
              <h2 className="text-2xl mb-5 font-bold">Contact IR</h2>
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

export default InvestorLastpart;
