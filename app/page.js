"use client";
import { useState } from "react";
import ContinueGameCard from "./components/continuegamecard/page";
import GenderCard from "./components/gendercard/page";
import QuizOption from "./components/quizoption/page";
import Image from "next/image";
import BreakCard from "./components/breakcard/page";
import WealthProfile from "./components/wealthprofile/page";
import GenderCard2 from "./components/gendercard/gendercard2/page";
export default function Home() {
  const [gender, setGender] = useState("");

  const handleGenderMale = () => {
    setGender("male");
  };
  const handleGenderFemale = () => {
    setGender("female");
  };
  return (
    <div>
      <div>
        {/* parent div starts  */}
        {gender === "" && (
          <div className="flex justify-center text-center lg:mt-[80px] mt-5 ">
            <div>
              {/* content section starts  */}
              <div>
                <h2 className="lg:font-bold lg:text-3xl md:font-bold md:text-2xl text-lg font-bold    ">
                  WEALTH GROWTH <br></br>CHALLENGE
                </h2>

                <p className="text-gray-500 font-light my-5 text-base">
                  SELECT YOUR{" "}
                  <span className=" text-gray-500 font-bold text-base">
                    GENDER
                  </span>
                </p>
                <p className="md:font-bold text-xs font-bold ">1-MINUTE QUIZ</p>
              </div>
              {/* content section ends  */}
              {/* gender cards start  */}
              <div className="flex gap-4">
                <div onClick={handleGenderMale}>
                  <GenderCard imgSrc="18male.webp" label="Male" />
                </div>
                <div onClick={handleGenderFemale}>
                  <GenderCard imgSrc="19female.png" label="Female" />
                </div>
              </div>
              {/* gender cards ends  */}
            </div>
          </div>
        )}
        {/* parent div ends  */}

        {/* age selection div starts  */}
        {gender !== "" && (
          <div className="flex justify-center text-center lg:mt-[80px] mt-5 ">
            <div>
              {/* content section starts  */}
              <div>
                <h2 className="lg:font-bold lg:text-3xl md:font-bold md:text-2xl text-lg font-bold    ">
                  WEALTH GROWTH <br></br>CHALLENGE
                </h2>

                <p className="text-gray-500 font-light mt-4 mb-2 text-base">
                  SELECT YOUR{" "}
                  <span className=" text-gray-500 font-bold text-base">
                    AGE
                  </span>
                </p>
                <p className="md:font-bold text-sm font-bold ">
                  1-MINUTE<span className="font-medium mx-1">QUIZ</span>{" "}
                </p>
              </div>
              {/* content section ends  */}
              {/* gender cards start  */}
              <div className="flex gap-4 lg:gap-[50px]">
                <GenderCard2
                  imgSrc={`${
                    gender === "male" ? "18male.webp" : "19female.png"
                  } `}
                  label="Age: 18-24"
                />
                <GenderCard2
                  imgSrc={`${
                    gender === "male" ? "25male.webp" : "female25.webp"
                  } `}
                  label="Age: 25-34"
                />
              </div>
              <div className="flex gap-4 lg:gap-[50px]">
                <GenderCard2
                  imgSrc={`${
                    gender === "male" ? "44male.webp" : "female35.webp"
                  } `}
                  label="Age: 35-44"
                />
                <GenderCard2
                  imgSrc={`${
                    gender === "male" ? "45male.webp" : "female45.webp"
                  } `}
                  label="Age: 45+"
                />
              </div>
              {/* gender cards ends  */}
            </div>
          </div>
        )}
        {/* age selection div ends  */}
      </div>

      {/* midquestions section starts */}
    </div>
  );
}
