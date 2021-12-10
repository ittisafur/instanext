import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      type="submit"
      className="w-full h-10 font-bold text-white rounded bg-blue-medium"
    >
      {children}
    </button>
  );
};

export default Button;
