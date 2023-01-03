import { Outlet } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import ImageViewer from "../components/ImageViewer";
import { ImageViewerContext } from "../context/ImageViewerContext";
import { useViewer } from "../shared/hooks/viewer-hook";

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
      <div className="grid grid-cols-6 h-screen w-full">
        <FilterSidebar />
        <div className="h-full w-full col-span-5 bg-white px-8 pt-4">
          <Outlet />
        </div>
        {display && <ImageViewer />}
      </div>
    </ImageViewerContext.Provider>
  );
};

export default Products;
