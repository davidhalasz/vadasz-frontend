import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AlertContext } from "../../context/AlertContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const {
    toggleAlertDisplay,
    changedData,
    changedDataHandler,
    changeCurrentProductId,
  } = useContext(AlertContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (changedData) {
      getProducts();
      changedDataHandler();
    }
  }, [changedData, changedDataHandler]);

  const getProducts = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/my-products`
    );
    setProducts(response.data);
  };

  const getImage = (str) => {
    if (str) {
      const images = str.split(", ");
      return (
        <img
          className="h-full w-full object-cover h-20 w-20 border border-1 border-customGreen rounded-sm"
          src={`${process.env.REACT_APP_ASSET_URL}/${images[0]}`}
          alt="public"
        />
      );
    }
    return;
  };

  const alertHandler = (id) => {
    changeCurrentProductId(id);
    toggleAlertDisplay("Biztosan törölni szeretnéd a hirdetést?", 'product');
  };

  const getCity = (jsonStr) => {
    const json = JSON.parse(jsonStr);
    return json.nev;
  }

  return (
    <Fragment>
      <div className="w-full text-center p-4 text-customBlue font-bold text-2xl">
        <h1>Feltöltött hirdetéseim</h1>
      </div>
      <div className="mx-auto w-10/12">
        <div className="w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full bg-customBlue p-1 rounded-md my-2"
            >
              <Link
                to={{ pathname: `/kezelofelulet/hirdetes/${product.uuid}` }}
                state={{ product: product }}
              >
                <div className="w-full rounded-md flex flex-row gap-3">
                  <div className="h-20 w-20 shrink-0 mt-1 ml-1 rounded-md">
                    {getImage(product.images) ?? (
                      <img
                        alt="avat"
                        className="h-full w-full object-cover h-20 w-20"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Deer_%28example%29.svg/1024px-Deer_%28example%29.svg.png?20180723123450"
                      />
                    )}
                  </div>
                  <div className="w-full flex flex-col text-white">
                    <div className="w-full flex justify-between pb-2">
                      <h3 className="font-bold py-1 px-2 rounded-md">
                        {product.title}
                      </h3>
                      <div className="flex gap-1">
                        <p className="py-1 px-2 rounded-md whitespace-nowrap">
                          {product.price.toLocaleString()} Ft
                        </p>
                        <p className=" py-1 px-2 rounded-md">
                          {getCity(product.place)}
                        </p>
                      </div>
                    </div>
                    <p className="line-clamp-2 overflow-hidden mb-2">
                      {product.desc}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="w-full flex justify-end gap-4">
                <Link
                  to={{
                    pathname: `/kezelofelulet/hirdetes-szerkesztese/${product.uuid}`,
                  }}
                  state={{ product: product }}
                >
                  <button
                    type="button"
                    className="p-2 rounded-md bg-customGreen text-md text-white font-bold"
                  >
                    Szerkesztés
                  </button>
                </Link>

                <button
                  type="button"
                  onClick={() => alertHandler(product.uuid)}
                  className="p-2 rounded-md bg-customRed text-md text-white font-bold"
                >
                  Törlés
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
