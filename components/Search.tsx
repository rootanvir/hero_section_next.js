import React, { FC, InputHTMLAttributes } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Search: FC<SearchProps> = ({ className = "", ...props }) => {
  return (
    <div className={`relative w-40 sm:w-56 md:w-64 lg:w-80  ${className}`}>
      <img
        src="/assets/images/search.png"
        alt="search icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md px-8 py-2 w-full outline-none focus:ring-2 focus:ring-blue-400"
        {...props}
      />
    </div>
  );
};

export default Search;
