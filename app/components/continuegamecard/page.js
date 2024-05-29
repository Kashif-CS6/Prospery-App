"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const ContinueGameCard = () => {
  const router = useRouter();
  return (
    <div>
      {/* continue game div starts */}
      <div className="text-center">
        <h2 className="lg:font-bold lg:text-3xl text-indigo-500 mt-5 md:text-2xl md:font-bold font-bold text-lg">
          More than 550,000
        </h2>
        <p className="lg:font-medium lg:text-xl md:font-medium md:text-lg font-medium text-sm">
          people have chosen Prosperi
        </p>
        {/* image starts */}
        <div className="flex justify-center">
          <Image src={"/Images/group.png"} width={300} height={300} />
        </div>
        {/* image ends */}
        {/* button starts */}
        <div className="mx-4 lg:mx-0 ">
          <button
            onClick={() => {
              router.push("/male");
            }}
            className="bg-indigo-600 text-white p-4 w-96 rounded-lg md:text-medium  "
          >
            CONTINUE
          </button>
        </div>
        {/* button ends */}
      </div>
      {/* continue game div ends */}
    </div>
  );
};

export default ContinueGameCard;
