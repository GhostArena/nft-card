import React from "react";
import testImg from "../images/image-equilibrium.jpg";
import nftIcon from "../images/icon-ethereum.svg";
import timeIcon from "../images/icon-clock.svg";
import avatar from "../images/image-avatar.png";
import eyeIcon from "../images/icon-view.svg";
import "./Card.css";

export const Card = () => {
  return (
    <>
      <div className="container w-[300px] flex justify-between h-screen m-auto items-center ">
        <div className="bg-[#14273F] flex flex-col p-4 md:p-6 shadow-lg rounded-lg overflow-hidden">
          <div className="group relative overflow-hidden  bg-red-500 rounded-lg  mb-4 md:mb-6">
            {/* Hero Image */}
            <div className="w-full h-full md:w-[100%] ">
              <img
                src={testImg}
                alt="eth"
                className="object-cover hover:bg-[#00fff7] cursor-pointer"
              />
            </div>
            {/* Hover Overlay */}
            <div className="absolute bg-[#00fff76e] rounded-lg h-full md:h-full w-[100%] top-0 left-0 cursor-pointer flex items-center justify-between opacity-0 hover:opacity-100 transition-all duration-300">
              <img src={eyeIcon} alt="view" className="m-auto" />
            </div>
          </div>
          <div>
            {/* Title and Copy */}
            <h2 className="text-white text-xl font-display font-bold mb-4 md:mb-6 hover:text-[#00fff7] transition-all duration-300 cursor-pointer">
              Equilibrim #3429
            </h2>
            <p className="text-[18px] font-display font-light text-[#8bacda] mb-4 md:mb-6">
              Our Equilibrim collection promotes balance and calm
            </p>
          </div>
          <div className="flex justify-between mb-4 md:mb-6">
            {/* Icon and Amount */}
            <div className="flex items-center">
              <img src={nftIcon} alt="nft" className="h-[50%] " />
              <h3 className="ml-2 text-[#00fff7] font-bold">0.014 ETH</h3>
            </div>
            <div>
              {/* Time */}
              <div className="flex items-center">
                <img src={timeIcon} alt="nft" className="h-[50%] " />
                <span className="text-[#8bacda] ml-2 text-[16px]">
                  3 days left
                </span>
              </div>
            </div>
          </div>
          <hr className="line mb-4 md:mb-6" />
          {/* Avatar and Name */}
          <div className="flex items-center">
            <img
              src={avatar}
              alt="avatar"
              className="w-8 h-8 border-2 rounded-full"
            />
            <span className="ml-3 font-display text-[#8bacda]">
              Creation of{" "}
              <span className="text-white hover:text-[#00fff7] transition-all duration-300 cursor-pointer">
                Jules Wyvern
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
