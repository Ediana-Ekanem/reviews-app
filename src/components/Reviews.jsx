import React, { useState } from "react";
import people from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  //   Functions

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className="flex flex-col items-center justify-center">
      <div className="bg-white w-[360px] shadow-2xl p-8 ">
        <div className="w-28 h-28 rounded-full mx-auto relative">
          <img
            src={image}
            alt={name}
            className=" rounded-full w-full h-full object-cover relative z-20"
          />

          <div className="w-5 h-5 bg-blue-500 rounded-full absolute top-5 z-30">
            <FaQuoteRight
              className=" absolute top-[5px] left-[5px] text-white"
              size={10}
            />
          </div>

          <div className="w-24 h-24 bg-blue-500 rounded-full absolute top-0 left-[18px] z-10"></div>
        </div>

        <div className="text-center">
          <h6 className="font-bold ">{name}</h6>
          <h6 className="text-blue-600 font-semibold">{job}</h6>
          <p className="text-sm">{text}</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 pt-3">
          <div className="flex text-blue-500 gap-5">
            <button onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button
            className="bg-blue-500 px-2 py-1 rounded text-white"
            onClick={randomPerson}
          >
            suprise me
          </button>
        </div>
      </div>
    </article>
  );
};

export default Reviews;
