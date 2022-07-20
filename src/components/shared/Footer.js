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
      <footer class="footer p-10  text-white">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
          <p className="text-4xl font-bold">udemy</p>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span class="footer-title">Newsletter</span>
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text">Enter your email address</span>
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="username@site.com"
                class="input input-bordered w-full pr-16"
              />
              <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
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
