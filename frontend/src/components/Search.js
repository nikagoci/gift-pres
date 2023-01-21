import React, {useState} from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Search = ({getInputValue}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value === ''){
            return
        }

        getInputValue(value)

        setValue('')
    }

  return (
    <div className="flex justify-center w-full my-10">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Product"
          className="px-4 py-3 focus:outline-none w-[300px] sm:w-[500px] rounded-2xl h-[45px]"
        />
        <div className="absolute top-0 right-0">
          <div className="flex items-center text-white cursor-pointer h-[45px]">
            <button
              className="flex items-center h-full px-4 py-2 text-white transition duration-300 bg-indigo-400 border border-indigo-400 sm:px-8 gap-x-2 rounded-2xl hover:bg-indigo-200 hover:border-indigo-400 hover:text-gray-900"
              type="submit"
            >
              <AiOutlineSearch size={20} />
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
