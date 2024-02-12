import React from "react";
import img from "../../assets/Images/img.jpeg";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="relative">
      <img src={img} alt="img" />
      <div className="absolute top-1/4 bottom-0 flex-col left-0 items-center justify-center  p-10">
        <h1 className="text-[#0C2027] w-8/12  font-medium text-7xl leading-[73.67px] mb-6">
          Accounting, but make it easy - withTraed!
        </h1>
        <p className="w-7/12 font-normal text-15 text-[#7E8693] mb-6">
          Applications that power financial institutions, marketplaces that
          accelerate industry & an open innovation platform for banks, fintechs
          & non-banks to connect and collaborate.
        </p>
        <div className="flex">
          <Button />
          <p className="text-[#6D758F] ml-10 mt-2">
            No credit card necessary. Its free!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
