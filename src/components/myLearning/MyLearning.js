import React from "react";
import { Link, Outlet } from "react-router-dom";

const MyLearning = () => {
  return (
    <div>
      <div>
        <h1>hello</h1>
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
