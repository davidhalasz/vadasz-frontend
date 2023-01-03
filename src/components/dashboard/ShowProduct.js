import { useContext } from "react";
import { useLocation } from "react-router";
import { ImageViewerContext } from "../../context/ImageViewerContext";

const ShowProduct = (props) => {
  let location = useLocation();
  const prod = location.state.product;
  const { toggleDisplay, selectImage } = useContext(ImageViewerContext);

  let images;
  if (prod.images) {
    images = prod.images.split(", ");
  }

  const getArrayOfImages = () => {
    if (images) {
      if (images.length === 1) return;

      let first = images[0];
      let selectedImages = images.filter((x) => {
        return x !== first;
      });
      return selectedImages.map((img, index) => (
        <img
          onClick={() => openImageViewer(img)}
          key={index}
          className="w-full aspect-square object-cover"
          src={`${process.env.REACT_APP_ASSET_URL}/${img}`}
          alt="thumbnails"
        />
      ));
    }
    return;
  };

  const openImageViewer = (currentImage) => {
    selectImage(currentImage, images);
    toggleDisplay();
  };

  return (
    <div className="relative pt-4 px-8">
      <h1 className="font-bold text-customBlue text-2xl py-8">{prod.title}</h1>
      <div className="flex gap-3">
        <div className="w-3/12">
          <div className="w-full">
            <img
              onClick={() => openImageViewer(images[0])}
              alt="avat"
              className="w-full aspect-square object-cover"
              src={
                images
                  ? `${process.env.REACT_APP_ASSET_URL}/${images[0]}`
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Deer_%28example%29.svg/1024px-Deer_%28example%29.svg.png?20180723123450"
              }
            />
          </div>
          <div className="grid grid-cols-3 gap-1">{getArrayOfImages()}</div>
        </div>
        <div className="w-9/12 px-8">
          <h2 className="p-3 bg-customGreen w-fit text-white text-lg font-bold rounded-t-md">
            Információk
          </h2>
          <div className="border-2 border-customGreen rounded-r-md rounded-bl-md mb-4 p-3">
            <div className="flex flex-col gap-2 pb-4 text-lg">
              <p>Ár: {prod.price} Ft</p>
              <p>Helye: Debrecen</p>
              <p>Kategória: {prod.category}</p>
              <p>Állapot: új</p>
            </div>
            <p>{prod.desc}</p>
          </div>

          <h2 className="p-3 bg-customRed w-fit text-white text-lg font-bold rounded-t-md">
              Kapcsolat
          </h2>
          <div className="border-2 border-customRed rounded-r-md rounded-bl-md mb-4 p-3 flex flex-col gap-2 text-lg">
            <p>Email: emailœemail.com</p>
            <p>Telefon: +36303692738</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
