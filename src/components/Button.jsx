import React from "react";

const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      className="text-lg font-semibold inline-block bg-green-500 py-2 px-4 rounded-lg text-white hover:bg-green-700"
    >
      {text}
    </a>
  );
};

export default Button;
