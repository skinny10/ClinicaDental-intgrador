import React from 'react';

const Label = ({ label, htmlFor }) => {
  return (
    <label
      className="block text-sm font-medium leading-5 text-gray-700"
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
};

export default Label;