import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ImageViewerContext } from "../../context/ImageViewerContext";

const ShowProduct = () => {
  const { toggleDisplay, selectImage } = useContext(ImageViewerContext);
  const { uuid } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/product/${uuid}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [uuid]);

  let images = [];
  if (product.images) {
    images = product.images.split(", ");
    console.log("images: " + images);
  }

  const getPlace = (jsonStr) => {
    if (jsonStr) {
      const json = JSON.parse(jsonStr);
      return `${json.nev} (${json.megye} vármegye)`;
    }
  };

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
    <div className="h-screen relative pt-4 pl-8">
      <h1 className="font-bold text-customBlue text-2xl py-8">
        {product.title}
      </h1>
      <div className="flex gap-3">
        <div className="w-3/12">
          <div className="w-full">
            <img
              onClick={() => openImageViewer(images[0])}
              alt="avat"
              className="w-full aspect-square object-cover"
              src={
                images[0]
                  ? `${process.env.REACT_APP_ASSET_URL}/${images[0]}`
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Deer_%28example%29.svg/1024px-Deer_%28example%29.svg.png?20180723123450"
              }
            />
          </div>
          <div className="grid grid-cols-3 gap-1">{getArrayOfImages()}</div>
        </div>
        <div className="w-9/12 pl-8">
          <h2 className="p-3 bg-customRed w-full text-white text-lg font-bold rounded-l-md">
            Információk
          </h2>
          <div className="mb-4 p-3">
            <div className="flex flex-col gap-2 pb-4 text-lg">
              <table class="table-auto">
                <tbody>
                  <tr>
                    <td className="py-2 border-b border-slate-200">Ár</td>
                    <td className="py-2 border-b border-slate-200">{product.price && product.price.toLocaleString()} Ft</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b border-slate-200">Helye</td>
                    <td className="py-2 border-b border-slate-200">{getPlace(product.place)}</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b border-slate-200">Kategória</td>
                    <td className="py-2 border-b border-slate-200">{product.category}</td>
                  </tr>
                  {product.subCategory && (
                    <tr>
                      <td className="py-2 border-b border-slate-200">Alkategória</td>
                      <td className="py-2 border-b border-slate-200">{product.subCategory}</td>
                    </tr>
                  )}
                  {product.category !== "Vadászkutyák" && (
                    <tr>
                      <td className="py-2 border-b border-slate-200">Állapot</td>
                      <td className="py-2 border-b border-slate-200">{product.condition}</td>
                    </tr>
                  )}
                  {product.madeYear && (
                    <tr>
                      <td className="py-2 border-b border-slate-200">
                        {product.category === "Vadászkutyák"
                          ? "Születési év"
                          : "Gyártási év"}
                      </td>
                      <td className="py-2 border-b border-slate-200">
                        {product.madeYear}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p>{product.desc}</p>
          </div>

          <h2 className="p-3 bg-customGreen w-full text-white text-lg font-bold rounded-l-md">
            Kapcsolat
          </h2>
          <div className="mb-4 p-3 flex flex-col gap-2 text-lg">
            <p>Email: emailœemail.com</p>
            <p>Telefon: +36303692738</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
