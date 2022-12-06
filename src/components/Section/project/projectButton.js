import React, { useState } from "react";
import {
  HorizontalScrollContainer,
  HorizontalScrollItem,
} from "react-simple-horizontal-scroller";
import buttonList from "../../../utils/buttonList";
import projectList from "../../../utils/projectList";

export default function ProjectButton({ setItem }) {
  const [activeBtn, setActiveBtn] = useState("all");
  const filterItem = (category) => {
    setActiveBtn(category);
    if (category === "all") {
      setItem(projectList);
    } else {
      const updateItem = projectList.filter((item) =>
        item.category.includes(category)
      );
      setItem(updateItem);
    }
  };

  return (
    <>
      <div className="text-center mb-6 ">
        <HorizontalScrollContainer>
          <div className="flex md:justify-center w-full">
            {buttonList.map((btn, idx) => (
              <HorizontalScrollItem id={idx} key={idx}>
                <button
                  className={`mx-1 my-1  py-1 capitalize bg-slate-200 hover:bg-slate-300 rounded-3xl text-sm w-[4.2rem]  ${
                    activeBtn === btn.category
                      ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl !text-white"
                      : "dark:text-black"
                  }`}
                  onClick={() => filterItem(btn.category)}
                  
                >
                  {btn.name}
                </button>
              </HorizontalScrollItem>
            ))}
          </div>
        </HorizontalScrollContainer>
      </div>
    </>
  );
}
