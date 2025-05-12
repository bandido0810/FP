import React from 'react';

const Divider = () => {
  return (
    <div className="relative my-10">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-4 text-gray-500">✦ ✦ ✦</span>
      </div>
    </div>
  );
};

export default Divider;