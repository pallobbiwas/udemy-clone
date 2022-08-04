import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../hooks/CustomLink";
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
      <div>

      </div>
    </div>
  );
};

export default MyLearning;
