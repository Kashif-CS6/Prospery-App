import Image from "next/image";
import React from "react";

const QuizOption = () => {
  return (
    <div>
      {/* quizoption div strats */}
      <div>
        <div className="p-2 bg-gray-100  gap-2  flex items-center md:w-4/12 w-full rounded-xl m-auto mt-5 ">
          {/* image div starts */}

          <div>
            <Image
              src={"/images/growth.png"}
              width={100}
              height={100}
              
            />
          </div>

          <div>
            <h2 className="lg:font-bold lg:text-xl md:font-bold md:text-sm text-sm font-bold ">
              Grow wealth
            </h2>
          </div>
          {/* image div ends */}
        </div>
      </div>
      {/* quizoption div ends */}
    </div>
  );
};

export default QuizOption;
