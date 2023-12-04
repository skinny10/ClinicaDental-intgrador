import React from 'react';
import Label from '../atoms/Label';

const AtomicInput = ({ label, value, onChange }) => {
  return (
    <>
      <Label label={label} htmlFor="id" />
      <input
        id="id"
        type="text"
        value={value}
        onChange={onChange}
        className="mt-1 p-2 border border-gray-300 rounded-md w-[calc(225px)]"
        required
      />
    </>
  );
};

export default AtomicInput;