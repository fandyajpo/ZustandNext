"use client";
import { useTransition, animated } from "@react-spring/web";
import { StaticImageData } from "next/image";
import Screen from "../layout/Screen";
import FaouziaImage from "../../../public/faouzia_site.jpg";
import { useEffect } from "react";
const FirstSection = () => {
  const [transitions, api] = useTransition(1, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  }));

  useEffect(() => {
    api.start();
  }, []);

  return (
    <div className="relative">
      <Screen
        image={FaouziaImage as StaticImageData}
        className="h-screen"
        imageStyle={``}
      >
        <div className="flex justify-center items-center w-full h-full">
          {transitions((style, item) => (
            <animated.div style={style}>
              <p className="text-white text-center text-5xl drop-shadow-md font-semibold">
                Faouzia
              </p>
              <hr />
              <p className="text-white text-center text-xl drop-shadow-md font-semibold">
                Fur Elise
              </p>
            </animated.div>
          ))}
        </div>
      </Screen>
      <div className="w-full h-2/4 bg-gradient-to-t from-black via-transparent animate-pulse to-transparent absolute bottom-0"></div>
    </div>
  );
};

export default FirstSection;
