import React from "react";
import CategoryButton from "./CategoryButton";

const categoryList = [
  "All",
  "React",
  "JavaScript",
  "Redux",
  "Node.js",
  "CSS",
  "HTML",
  "TypeScript",
  "GraphQL",
  "Next.js",
  "React",
  "JavaScript",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {categoryList.map((category, index) => {
        return <CategoryButton key={index} name={category} />;
      })}
    </div>
  );
};

export default ButtonList;
