import React from 'react'

const Button = ({ title, className, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#D81159] text-white w-[213px] h-[80px] rounded-full text-[24px] font-medium hover:bg-[#E31C5F]/90 transition-colors ${className}`}
    >
      {title}
    </button>
  );
};

export default Button