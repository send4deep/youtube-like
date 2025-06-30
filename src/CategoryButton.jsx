import React from "react";

const CategoryButton = ({ name }) => {
  return (
    <>
      <button className="py-2 px-3 mr-3 bg-gray-200 rounded-md">{name}</button>
    </>
  );
};

export default CategoryButton;
