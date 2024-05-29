import React from "react";
import './wealthprofile/bubble.css'

function ProgressBar() {
  return (
    <div className="mb-2 relative">

      {/* talking bubble */}
      <div class="absolute top-14 left-40 md:left-44 speech down w-28 h-10 flex justify-center items-center text-sm">Moderate</div>
      {/* pin */}
      <div className="absolute z-0 top-28  right-28 h-7 w-7 rounded-full bg-gray-400 flex justify-center items-center">
        <div className="h-5 w-5 rounded-full bg-white"></div>
      </div>
      {/* progress bar started */}
      <div class="relative h-3 rounded-full overflow-hidden bg-gray-300 mt-20 z-10">
        <div
          class="absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
          style={{ width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
