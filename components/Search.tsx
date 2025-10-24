import React ,{FC, InputHTMLAttributes } from 'react';

const Search : FC= () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-300 rounded-md px-2 py-2 w-80 outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default Search;