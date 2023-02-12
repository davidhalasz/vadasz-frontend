import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ImageViewerContext } from "../../context/ImageViewerContext";
import "../../shared/scroll.css";
import logo from "../../uploads/images/logo.png";
import he from "he";

const ShowProduct = () => {
  const { toggleDisplay, selectImage } = useContext(ImageViewerContext);
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/product/${id}`
        );
        setProduct(response.data.product);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  const getArrayOfImages = () => {
    if (product['images']) {
      if (product['images'].length === 1) return;

      return product['images'].slice(1).map((img, index) => (
        <img
          onClick={() => openImageViewer(img)}
          key={index}
          className="w-full aspect-square object-cover h-20 w-20 md:h-auto md:w-auto"
          src={`${process.env.REACT_APP_ASSET_URL}/${img}`}
          alt="thumbnails"
        />
      ));
    }
    return;
  };

  const openImageViewer = (currentImage) => {
    selectImage(currentImage, product['images']);
    toggleDisplay();
  };

  return (
    product &&
    <div className="h-full relative pt-0 pb-14 pl-1 md:pl-8 scrollhost_container">
      <h1 className="font-bold text-customBlue text-xl md:text-2xl py-8 px-3">
        {he.decode(product.title)}
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/12 mx-auto">
          <div className="w-7/12 md:w-full mx-auto">
            <img
              onClick={() => openImageViewer(product['images'][0])}
              alt="avat"
              className="w-full aspect-square object-cover pb-1"
              src={
                product['images'][0]
                  ? `${process.env.REACT_APP_ASSET_URL}/${product['images'][0]}`
                  : logo
              }
            />
          </div>
          <div className="flex flex-row md:grid md:grid-cols-3 gap-1 overflow-x-auto mx-auto w-fit">{getArrayOfImages()}</div>
        </div>
        <div className="w-full md:w-9/12 pl-8 pt-4 md:pt-0">
          <h2 className="p-3 bg-customRed w-full text-white text-lg font-bold rounded-l-md">
            Információk
          </h2>
          <div className="mb-4 p-3">
            <div className="flex flex-col gap-2 pb-4 text-lg">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="py-2 border-b border-slate-200">Ár</td>
                    <td className="py-2 border-b border-slate-200">
                      {product.price && product.price.toLocaleString()} Ft
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b border-slate-200">Helye</td>
                    <td className="py-2 border-b border-slate-200">
                      {product.place.city} ({product.place.county} vármegye)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b border-slate-200">
                      Kategória
                    </td>
                    <td className="py-2 border-b border-slate-200">
                      {product.category}
                    </td>
                  </tr>
                  {product.subCategory && (
                    <tr>
                      <td className="py-2 border-b border-slate-200">
                        Alkategória
                      </td>
                      <td className="py-2 border-b border-slate-200">
                        {product.subCategory}
                      </td>
                    </tr>
                  )}
                  {product.category !== "Vadászkutyák" && (
                    <tr>
                      <td className="py-2 border-b border-slate-200">
                        Állapot
                      </td>
                      <td className="py-2 border-b border-slate-200">
                        {product.condition}
                      </td>
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
            <p>{he.decode(product.desc)}</p>
          </div>

          <h2 className="p-3 bg-customGreen w-full text-white text-lg font-bold rounded-l-md">
            Kapcsolat
          </h2>
          {product.user && (
            <div className="mb-4 p-3 flex flex-col gap-2 text-lg">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="py-2 border-b border-slate-200">Név</td>
                    <td className="py-2 border-b border-slate-200">
                      {product.user.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b border-slate-200">email</td>
                    <td className="py-2 border-b border-slate-200">
                      {product.user.email}
                    </td>
                  </tr>
                  {product.user.telephone && (
                    <tr>
                      <td className="py-2 border-b border-slate-200">
                        Telefon
                      </td>
                      <td className="py-2 border-b border-slate-200">
                        {product.user.telephone}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
