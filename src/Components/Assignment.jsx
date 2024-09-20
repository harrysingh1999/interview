import React from "react";

export default function Assignment({ value, onChange, title }) {
  return (
    <div className="">
      {title}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e, title)}
        className="border border-black p-3"
      />
      <div
        className="grid grid-rows-6 md:grid-row-3 lg:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[800px] lg:h-[500px] border gap-4
       border-black p-5 mx-auto"
      >
        <div className=" border border-black p-3 ">1</div>
        <div className=" border border-black p-3  ">2</div>
        <div className=" border border-black p-3 ">3</div>
        <div className=" border border-black p-3  ">4</div>
        <div className=" border border-black p-3 ">5</div>
        <div className=" border border-black p-3 ">6</div>
      </div>

      <div className=" lg:w-[800px] lg:h-[500px] border gap-4 flex items-center justify-center border-black p-5 mx-auto">
        <div className=" border border-black p-3 w-30 h-30 ">1</div>
        <div className=" border border-black p-3 w-30 h-30  ">2</div>
        <div className=" border border-black p-3 w-30 h-30 ">3</div>
        <div className=" border border-black p-3 w-30 h-30  ">4</div>
        <div className=" border border-black p-3 w-30 h-30 ">5</div>
      </div>
    </div>
  );
}
