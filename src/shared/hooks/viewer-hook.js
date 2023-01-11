import { useCallback, useState } from "react";

export const useViewer = () => {
  const [display, setDisplay] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [images, setImages] = useState([]);

  const toggleDisplay = useCallback(() => {
    setDisplay(!display);
  }, [display]);

  const selectImage = useCallback((imageValue, imagesList) => {
    setCurrentImg(imageValue);
    if (imagesList) {
      setImages([...imagesList]);
    }
  }, []);

  const nextImage = useCallback(() => {
    let currentIndex = images.findIndex(x => x === currentImg);
    if(currentIndex < images.length - 1) {
        setCurrentImg(images[currentIndex+1]);
    }
  }, [currentImg, images]);

  const prevImage = useCallback(() => {
    let currentIndex = images.findIndex(x => x === currentImg);
    if(currentIndex > 0) {
        setCurrentImg(images[currentIndex-1]);
    }
  }, [currentImg, images]);

  return { display, currentImg, images, toggleDisplay, selectImage, nextImage, prevImage };
};
