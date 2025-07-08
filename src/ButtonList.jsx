import React, { useRef, useState } from "react";
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
  "Redux",
  "Node.js",
  "CSS",
  "HTML",
  "TypeScript",
  "GraphQL",
  "Next.js",
];
const ButtonList = () => {
  const [showPrev, setShowPrev] = useState(false);
  const cont = useRef(null);
  const clickNext = () => {
    cont.current.scrollLeft += 100;
    console.log(cont.current.scrollLeft);
    cont.current.scrollLeft > 0 && setShowPrev(true);
  };
  const clickPrev = () => {
    cont.current.scrollLeft -= 100;
    console.log(cont.current.scrollLeft);
    cont.current.scrollLeft === 0 && setShowPrev(false);
  };
  return (
    <div className="flex overflow-x-auto items-center" ref={cont}>
      {showPrev && (
        <button
          className="bg-white inline-block rounded-[50%] hover:cursor-pointer absolute px-3 py-1 text-2xl "
          onClick={clickPrev}
        >
          {"<"}
        </button>
      )}
      <button
        className="bg-white inline-block rounded-[50%] hover:cursor-pointer absolute right-0 px-3 py-1 text-2xl"
        onClick={clickNext}
      >
        {">"}
      </button>
      {categoryList.map((category, index) => {
        return <CategoryButton key={index} name={category} />;
      })}
    </div>
  );
};

export default ButtonList;
