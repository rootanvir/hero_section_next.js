import React,{ReactNode} from 'react';

interface BtnProps{
  text:string;
  variant?:"filled" | "outline" | "default";
  className?:string;
  path?:string;
}

const Btn:React.FC <BtnProps> = ({ text, variant, className, path }) => {
  let base = "px-3 py-2 rounded-md cursor-pointer flex items-center gap-2";
  let btnStyle = "";

  if (variant === "filled") {
    btnStyle = "bg-blue-500 text-white hover:bg-blue-600";
  } else if (variant === "outline") {
    btnStyle = "border border-gray-500 hover:bg-gray-100";
  } else {
    btnStyle = "text-gray-700 hover:text-gray-500";
  }

  return (
    <button className={`${base} ${btnStyle} ${className}`}>
      {path && <img src={path} alt="icon" className="w-5 h-5" />}
      <span>{text}</span>
    </button>
  );
};


export default Btn;
