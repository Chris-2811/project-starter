import React from 'react';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <header>
      <div className="section-container bg-white">
        <div className="flex justify-between items-center space-x-11 pt-10 pb-[140px] md:pt-[55px]">
          <img src={logo} alt="" />
          <div className="flex flex-1 justify-between">
            <nav className="hidden md:flex space-x-4 text-gray">
              <a href="#" className="hover:text-grayishViolet">
                Features
              </a>
              <a href="#" className="hover:text-grayishViolet">
                Pricing
              </a>
              <a href="#" className="hover:text-grayishViolet">
                Ressources
              </a>
            </nav>
            <div>
              <a href="#" className="">
                Login
              </a>
              <a href="#" className="py-2 px-6 btn-primary ml-9">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
