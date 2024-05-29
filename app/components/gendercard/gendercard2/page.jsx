"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
const GenderCard2 = (props) => {
  const router = useRouter();
  const handleClick = () => {
    if (
      props.imgSrc.includes("18male.webp") ||
      props.imgSrc.includes("25male.webp") ||
      props.imgSrc.includes("44male.webp") ||
      props.imgSrc.includes("45male.webp")
    ) {
      console.log("go to start page page");
      router.push("/components/continuegamecard");
    } else {
      router.push("/components/continuegamecard/continuegamecardfemale");
    }
  };

  return (
    <div>
      {/* gender card div strats */}
      <div className="border-2 border-[#5653FE] w-32 h-36 md:w-36 md:h-40 relative mt-10 rounded-xl cursor-pointer">
        {/* absolute div starts */}
        <div className="absolute p-2 bg-[#5653FE] bottom-0 w-full z-10 rounded-b">
          {/* icon div starts */}
          <div className="flex items-center gap-2 text-white justify-center">
            <p
              onClick={() => {
                handleClick();
              }}
              className="font-bold text-base"
            >
              {props.label}
            </p>
            <FaChevronRight />
          </div>
          {/* icon div ends */}
        </div>
        {/* absolute div ends */}
        {/* image div starts*/}
        <Image
          src={`/Images/${props.imgSrc}`}
          height={200}
          width={200}
          className="w-full h-full absolute top-[-22px]"
          alt="image"
        />
        {/* image div ends */}
      </div>
      {/* gender card div ends */}
    </div>
  );
};

export default GenderCard2;
