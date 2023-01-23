import { Fragment, useState } from "react";
import useWindowDimensions from "../shared/hooks/screenSizes-hook";
import BaseFooter from "./BaseFooter";
import "./Footer.css";

const Footer = () => {
  const [displayFooter, setDisplayFooter] = useState(false);
  const { height } = useWindowDimensions();

  return (
    <Fragment>
      {displayFooter && (
        <div
          onClick={() => setDisplayFooter(!displayFooter)}
          className="h-full w-full z-5 fixed top-0 left-0 bottom-0 right-0 bg-black/20 backdrop-blur-md"
        ></div>
      )}

      <div
        className={`modal w-full h-1/2 z-5 ${
          !displayFooter ? "absolute" : "fixed"
        }`}
        style={{ bottom: displayFooter ? `0px` : `-${height / 2 - 40}px` }}
      >
        <div className="container mx-auto flex justify-center">
          <button
            onClick={() => setDisplayFooter(!displayFooter)}
            type="button"
            className="flex gap-2 px-4 py-2 bg-customBlue text-white font-bold rounded-t-md"
          >
            <span>Info</span>
            {!displayFooter ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6  animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>
        </div>
        <BaseFooter />
      </div>
    </Fragment>
  );
};

export default Footer;
