import React from "react";
import img1 from "../../image/icone/download (1).png";
import img2 from "../../image/icone/download (2).png";
import img3 from "../../image/icone/download.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="text-white py-5 md:px-10">
        <div className="flex items-center justify-end">
          <p>Flow us</p>
          <p><img className="w-8 rounded-full mx-3" src={img1} alt="" /></p>
          <p><img className="w-8 rounded-full" src={img2} alt="" /></p>
          <p><img className="w-8 rounded-full ml-3" src={img3} alt="" /></p>
        </div>
      </div>
      <hr />
      <footer className="footer p-10  text-white">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
          <p className="text-4xl font-bold">udemy</p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
