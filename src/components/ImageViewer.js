import { useContext, useRef } from "react";
import { ImageViewerContext } from "../context/ImageViewerContext";
import { CSSTransition } from "react-transition-group";
import './ImageViewer.css'


const ImageViewer = (props) => {
  const { toggleDisplay, currentImg, images, selectImage, nextImage, prevImage, display } =
    useContext(ImageViewerContext);

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={display}
      timeout={400}
      classNames="transitionode"
      unmountOnExit
      appear
      mountOnEnter
      nodeRef={nodeRef}
    >
    <div ref={nodeRef} dismissible className=" absolute max-h-screen top-0 left-0 bottom-0 right-0 bg-black/90 backdrop-blur-md flex place-center">
      <button
        className="absolute text-white z-10 top-10 right-10"
        type="button"
        onClick={toggleDisplay}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="relative w-full h-full pt-8 text-white">
        <div className="mx-auto w-full h-5/6 flex justify-between">
          <div className="flex items-center">
            <svg
              onClick={prevImage}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 ml-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <img
            className="h-full pb-2"
            src={`${process.env.REACT_APP_ASSET_URL}/${currentImg}`}
            alt="current"
          />

          <div className="flex items-center">
            <svg
              onClick={nextImage}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 mr-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="h-1/6 flex flex-row gap-1 p-1 w-fit mx-auto">
          {images.map((img, index) => (
            <img
              key={index}
              onClick={() => selectImage(img)}
              className="h-full aspect-square object-cover"
              src={`${process.env.REACT_APP_ASSET_URL}/${img}`}
              alt="thumbnails"
            />
          ))}
        </div>
      </div>
    </div>
    </CSSTransition>
  );
};

export default ImageViewer;
