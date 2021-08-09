import React, { ReactElement, useState } from "react";
import { Animated } from "react-animated-css";
import { XIcon } from "@heroicons/react/solid";

const FeatureAds = (): ReactElement => {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* Desktop */}
      <Animated
        animationIn="bounceInLeft"
        animationOut="rotateInDownLeft"
        isVisible={show}
      >
        <div className="inline-flex bg-secondary rounded-2xl p-5">
          <div className="h-3 w-3 text-[#D8D8D8] justify-end hover:text-gray-700 cursor-pointer">
            <XIcon onClick={(e) => setShow(false)} />
          </div>
        </div>
      </Animated>

      {/* Mobile */}
    </>
  );
};

export default FeatureAds;
