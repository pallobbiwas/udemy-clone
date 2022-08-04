import React from "react";
import { Link } from "react-router-dom";
import "./AllLearn.css";

const MyNavbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-3xl" href="#R">
            udemy
          </a>
          <h1 className="mx-3">Catagories</h1>
          <div class="form-control ">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered rounded-full seach-box"
            />
          </div>
        </div>
        <div class="flex-none gap-2">
          <div class="dropdown dropdown-end flex items-center">
            <div className="flex mr-6">
              <Link to="/nan">Udemy Business</Link>
              <Link className="mx-6" to="/nan">
                Tech on Udemy
              </Link>
              <Link to="/nan">My Learning</Link>
              <Link className="mx-6" to="/nan">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
              <Link className="mr-6" to="/nan">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
              <Link to="/nan">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </Link>
            </div>
            <label class="">
              <div class="btn w-12 rounded-full bg-black flex items-center justify-center">
                <div className=" text-white">p</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
