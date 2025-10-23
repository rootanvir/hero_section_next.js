import React from 'react';

const Btn = ({ text, variant, className }) => {
    let base = "px-2 py-2 rounded-md cursor-pointer";
    let btnStyle = "";
    
    if(variant === "filled"){
        btnStyle = "bg-blue-500 text-white hover:bg-blue-600"
    } else if(variant === "outline"){
        btnStyle = "border border-gray-500 hover:bg-gray-100"
    }
    else{
        btnStyle = "text-black-600 hover:text-gray-500"
    }

  return (
    <button
      className={`${base} ${btnStyle} ${className}`}>
      {text}
    </button>
  );
};

export default Btn;
