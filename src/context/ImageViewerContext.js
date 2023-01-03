import { createContext } from "react";

export const ImageViewerContext = createContext({
    display: false,
    currentImg: "",
    images: [],
    toggleDisplay: () => {},
    selectImage: () => {},
    nextImage: () => {},
    prevImage: () => {},
});