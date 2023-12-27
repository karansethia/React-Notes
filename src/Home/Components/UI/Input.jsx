import React from "react";

const Input = ({iotype, field}) => {
  return (
    <div className="flex">
      <label className="relative cursor-pointer">
        <input
          type={iotype}
          placeholder={field}
          className="h-8 w-[15rem] px-3 text-royal border-royal border-b-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
        />
        <span className=" text-royal bg-white rounded-lg text-opacity-80 absolute left-1 top-1 px-1 transition duration-200 input-text font-textFont text-sm">
          {field}
        </span>
      </label>
    </div>
  );
};

export default Input;
