import React from "react";
import { Link, Outlet } from "react-router-dom";
import MyNavbar from "./MyNavbar";

const MyLearning = () => {
  return (
    <div>
      <MyNavbar />
      <div>
        <Link to="allcourse">allcourse</Link>
        <Link className="mx-4" to="/">
          hello
        </Link>
        <Link className="mx-4" to="/">
          home
        </Link>
        <Link to="/">kom</Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MyLearning;
