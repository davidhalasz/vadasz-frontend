import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AlertContext } from "../../context/AlertContext";
import { getCurrentUser } from "../../features/authSlice";
import he from "he";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const {
    toggleAlertDisplay,
    changedData,
    changedDataHandler,
    changeCurrentProductId,
  } = useContext(AlertContext);

  const {
    user,
    isLoading,
    isSuccess,
  } = useSelector((state) => state.auth); 

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading === false) {
      if (!user) {
        navigate("/");
      }
    }
  }, [user, navigate, isLoading]);

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

  const alertHandler = (id) => {
    changeCurrentProductId(id);
    toggleAlertDisplay("Biztosan törölni szeretnéd a hirdetést?", "product");
  };

  return (
    <Fragment>
      <div className="w-full text-center p-4 text-customBlue font-bold text-2xl">
        <h1>Feltöltött hirdetéseim</h1>
      </div>
      {products && (
        <div className="mx-auto w-10/12">
          <div className="w-full">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full bg-customBlue p-1 rounded-md my-2"
              >
                <Link
                  to={{ pathname: `/kezelofelulet/hirdetes/${product._id}` }}
                  state={{ product: product }}
                >
                  <div className="w-full rounded-md flex flex-row gap-3">
                    <div className="h-20 w-20 shrink-0 mt-1 ml-1 rounded-md">
                      {product['images'].length > 0 ? (
                        <img
                          className="h-full w-full object-cover h-20 w-20 border border-1 border-customGreen rounded-sm"
                          src={`${process.env.REACT_APP_ASSET_URL}/${product['images'][0]}`}
                          alt="public"
                        />
                      ) : (
                        <img
                          alt="avat"
                          className="h-full w-full object-cover h-20 w-20"
                          src={`${process.env.REACT_APP_ASSET_URL}/uploads/images/logo.png`}
                        />
                      )}
                    </div>
                    <div className="w-full flex flex-col text-white">
                      <div className="w-full flex flex-col lg:flex-row justify-between pb-2">
                        <h3 className="font-bold py-1 px-2 rounded-md">
                          {he.decode(product.title)}
                        </h3>
                        <div className="flex gap-1">
                          <p className="py-1 px-2 rounded-md whitespace-nowrap">
                            {product.price.toLocaleString()} Ft
                          </p>
                          <p className=" py-1 px-2 rounded-md">
                            {product.place.city}
                          </p>
                        </div>
                      </div>
                      <p className="line-clamp-2 overflow-hidden mb-2">
                        {he.decode(product.desc)}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="w-full flex justify-end gap-4">
                  <Link
                    to={{
                      pathname: `/kezelofelulet/hirdetes-szerkesztese/${product._id}`,
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
                    onClick={() => alertHandler(product._id)}
                    className="p-2 rounded-md bg-customRed text-md text-white font-bold"
                  >
                    Törlés
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductList;
