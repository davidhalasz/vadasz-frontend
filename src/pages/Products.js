import { Outlet } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import ImageViewer from "../components/ImageViewer";
import { ImageViewerContext } from "../context/ImageViewerContext";
import { useViewer } from "../shared/hooks/viewer-hook";
import '../shared/scroll.css';

const Products = () => {
  const {
    display,
    currentImg,
    images,
    toggleDisplay,
    selectImage,
    nextImage,
    prevImage,
  } = useViewer();


  return (
    <ImageViewerContext.Provider
      value={{
        display: display,
        currentImg: currentImg,
        images: images,
        toggleDisplay: toggleDisplay,
        selectImage: selectImage,
        nextImage: nextImage,
        prevImage: prevImage,
      }}
    >
      <div className="flex flex-col md:grid md:grid-cols-12 max-h-screen w-full">
        <FilterSidebar />
        <div className="relative max-h-screen w-full col-span-9 bg-white">
          <Outlet />
        </div>
        {display && <ImageViewer />}
      </div>
    </ImageViewerContext.Provider>
  );
};

export default Products;
