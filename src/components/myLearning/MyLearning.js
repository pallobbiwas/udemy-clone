import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../hooks/CustomLink";
import Footer from "../shared/Footer";
import MyNavbar from "./MyNavbar";

const MyLearning = () => {
  return (
    <div>
      <MyNavbar />
      <div>
        <div className="bg-black text-white pb-1">
          <div className="md:px-32 pt-20">
            <h1 className="text-4xl font-bold mb-8">My learning</h1>
            <div className="flex">
              <CustomLink to="allcourse" className=" text-1xl font-bold">
                All courses
              </CustomLink>
              <CustomLink className="mx-4 text-1xl font-bold" to="mylist">
                My lists
              </CustomLink>
              <CustomLink to="wishlist" className=" text-1xl font-bold">
                Wishlist
              </CustomLink>
              <CustomLink className="mx-4 text-1xl font-bold" to="archived">
                Archived
              </CustomLink>
              <CustomLink to="learningtools" className=" text-1xl font-bold">
                Learnig tools
              </CustomLink>
            </div>
          </div>
        </div>
        <div className="md:px-32 mt-5">
          <Outlet></Outlet>
        </div>
      </div>
      {/* footer */}
      <div className="bg-black py-4">
        <div className="md:px-16 text-white flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Teach the world online</h1>
            <h3 className="font-bold">
              Create an online video course, reach students across the globe,
              and earn money
            </h3>
          </div>
          <div>
            <button className="btn btn-active px-4 rounded-none outline">
              Tech on udemy
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-black">
        <div className="md:px-16 grid grid-cols-2 md:grid-cols-2 items-center py-4">
          <div>
            <p className="text-1xl text-white font-bold">
              Top companies choose <a className="text-blue-400" href="#f">Udemy Business</a> to build
              in-demand career skills.
            </p>
          </div>
          <div className="flex justify-around">
            <div>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default MyLearning;
