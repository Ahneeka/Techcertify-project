import React from "react";
import { ArrowRight } from "lucide-react";

function index() {
  return (
    <button className="flex items-center bg-[#06BA63] font-bold text-white rounded-[0.5rem] py-2 px-2">
      <span>Get Started</span>
      <div className="ml-2">
        <ArrowRight />
      </div>
    </button>
  );
}

export default index;
