import React from "react";
import img from "../../image/cover.png";
import "../../styel/header.css";

const About = () => {
  return (
    <div>
      {/* banner */}
      <section className="bg-color ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-10 md:mx-32">
            <div className="md:order-2">
              <img src={img} alt="" />
            </div>
            <div className="text-3xl md:text-6xl font-bold md:order-1">
              <p>We share knowledge with the world</p>
            </div>
          </div>
          <div className="bg-purple-800 text-center py-5">
            <a className="text-white text-1xl py-10" href="#hello">
              <span className="text-1xl font-bold">Company News:</span> Udemy
              Rings the Opening Bell in Celebration of its IPO!
            </a>
          </div>
        </div>
      </section>
      {/*next banner part  */}
      <section className="pt-28 pb-10">
        <div>
          <div className="text-center text-black md:px-32 mb-32">
            <h3 className="text-5xl font-bold mb-5">
              Changing learning for the better
            </h3>
            <p className="text-2xl">
              Whether you want to learn or to share what you know, you’ve come
              to the right place. As a global destination for online learning,
              we connect people through knowledge.
            </p>
          </div>
          <div className="bg-color py-8">
            <div className="px-32">
              <div class="carousel ">
                <div id="slide1" class="carousel-item relative w-full">
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
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" class="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>

                <div id="slide2" class="carousel-item relative w-full">
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
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" class="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>

                <div id="slide3" class="carousel-item relative w-full">
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
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" class="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
