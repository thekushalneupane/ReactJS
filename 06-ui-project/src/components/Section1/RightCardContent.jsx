import React from "react";
import { MoveRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-9 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-11 w-11  flex justify-center items-center font-semibold text-[20px]">
        {props.id+1}
      </h2>
      <div>
        <p className="text-lg text-white leading-relaxed mb-13">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          error rem ad sunt, quasi sapiente!
        </p>
        <div className="flex justify-between">
          <button style={{backgroundColor:props.color}} className=" text-white text-lg tracking-wide rounded-full font-md  px-8 py-2 ">
            {props.tag}
          </button>
          <button style={{backgroundColor:props.color}} className=" text-white text-lg rounded-full font-md  px-3 py-1 ">
            {" "}
            <MoveRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
