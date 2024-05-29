"use client";

import Image from "next/image";
import React, { useState } from "react";
import data from "@/data";
import BreakCard from "../components/breakcard/page";
import Resultcard from "../components/resultcard/page";

function Male() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [end, setEnd] = useState(false);
  const [percent, setpercent] = useState(10);

  // Define function body to increment the question index variable
  function handleAnswerClick(answerIndex) {
    setSelectedAnswer(answerIndex);

    // Move to next question after 1 second delay
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setpercent((prev) => prev + 5);
      setSelectedAnswer(null); // Reset selected answer when moving to the next question
      if (currentIndex === 18) {
        setEnd(true);
      }
    }, 1000); // Delay of 1 second before moving to next question
  }

  return (
    <div>
      {/* progress bar section */}

      <div className="flex justify-center my-4">
        <div className="w-[24.1rem]  bg-gray-200 rounded-full h-2 dark:bg-gray-100">
          <div
            className={`bg-blue-600 h-2 rounded-full`}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      {/* Question section started here */}
      {end ? (
        <div className="flex justify-center">
          {" "}
          <Resultcard />
        </div>
      ) : (
        <div>
          <div>
            <h2 className="lg:text-3xl lg:font-bold text-center md:text-2xl md:font-bold text-xl font-bold mt-5 relative ">
              {data[currentIndex].question}

              {data[currentIndex].sidepic ? (
                <div className="hidden md:block absolute right-0 top-40 ">
                  <img
                    src={data[currentIndex].sidepic}
                    alt=""
                    width={300}
                    height={200}
                  />
                </div>
              ) : (
                ""
              )}
            </h2>
          </div>
          {/* Quiz section started here */}
          {data[currentIndex].options.map((answer, index) => {
            return (
              <div key={answer.opt} className="duration-300  mx-4 lg:mx-0">
                <div
                  className={`p-2 bg-gray-100 gap-2 h-28 flex items-center md:w-8/12 lg:w-4/12 w-full rounded-xl m-auto mt-5 ${
                    selectedAnswer === index
                      ? "border-2 bg-[rgba(89,92,177,0.2)] border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleAnswerClick(index)}
                >
                  {/* image div starts */}
                  <div>
                    {answer.pic ? (
                      <img
                        className="bg-blue-100 rounded-full w-16 h-16"
                        src={answer.pic}
                        width={100}
                        height={100}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex justify-center items-center">
                    <h2 className="lg:font-bold lg:text-xl md:font-bold md:text-sm text-sm font-bold">
                      {answer.opt}
                    </h2>
                  </div>
                  {/* image div ends */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Male;
