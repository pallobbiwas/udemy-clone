import React from "react";
import { Link } from "react-router-dom";
import "../../styel/header.css";

const Header = ({ children }) => {
  return (
    <div>
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar border-bottom ">
            <div class="flex-1 text-3xl font-bold">Udemy</div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div class="flex-none hidden lg:block">
              <div className="flex items-center lg:mr-6">
                <ul class="menu menu-horizontal lg:mr-48 font-bold text-1xl">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li className="md:mx-4">
                    <Link to="/usgudemy">ESG at Udemy</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blog</Link>
                  </li>
                  <li className="md:mx-4">
                    <Link to="/company">Company</Link>
                  </li>
                  <li>
                    <Link to="/career">Careers</Link>
                  </li>
                  <li className="md:mx-4">
                    <Link to="/press">Press</Link>
                  </li>
                  <li>
                    <Link to="/investor">Investors</Link>
                  </li>
                </ul>
                <ul className="menu menu-horizontal">
                  <li><Link className=" btn btn-outline btn-active lg:mr-4" to='/login'>Login</Link></li>
                  <li><Link className=" btn btn-active text-white" to='/signup'>Signup</Link></li>
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/usgudemy">ESG at Udemy</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/career">Careers</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
            <li>
              <Link to="/investor">Investors</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
