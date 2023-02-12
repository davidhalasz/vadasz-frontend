import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, productActions } from "../features/productSlice";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./MainProductList.css";
import LoadingSpinner from "../shared/LoadingSpinner";
import logo from '../uploads/images/logo.png';
const featuredBg = "w-full bg-customYellow p-1 rounded-md my-2 text-customBlue";
const baseBg = "w-full bg-customBlue p-1 rounded-md my-2 text-white";

const MainProductList = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const [isFetching, setIsFetching] = useState(false);
  const [numberOfItemsShown, setNumberOfItemsShown] = useState(20);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(productActions.filteringProducts());
  }, [dispatch, products]);

  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  function fetchMoreListItems() {
    setTimeout(() => {
      setIsFetching(false);
      setNumberOfItemsShown(numberOfItemsShown + 20);
    }, 2000);
  }

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (filteredProducts.length > numberOfItemsShown) {
      if (bottom) {
        e.preventDefault();
        setIsFetching(true);
        fetchMoreListItems();
      }
    }
  };

  return (
    <Fragment>
      <div className="text-customBlue h-full flex flex-col">
        <h1 className="grow-0 font-bold text-2xl text-center p-4 flex-none">
          Hirdetések
        </h1>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div
            className="grow mx-auto w-11/12 md:w-10/12 flex-1 scrollhost_container"
            onScroll={handleScroll}
          >
            <div className="w-full ">
              <TransitionGroup className="product-list">
                {filteredProducts
                  .slice(0, numberOfItemsShown)
                  .map((product, index) => (
                    <CSSTransition
                      key={product._id}
                      timeout={500}
                      classNames="item"
                    >
                      <div
                        key={product._id}
                        className={product.featured ? featuredBg : baseBg}
                      >
                        <Link
                          to={{ pathname: `/hirdetesek/${product._id}` }}
                          state={{ product: product }}
                        >
                          <div className="w-full rounded-md flex flex-row gap-3">
                            <div className="h-20 w-20 shrink-0 my-1  ml-1 rounded-md">
                              {product["images"][0] ? (
                                <img
                                  className="object-cover h-20 w-20 border border-1 border-customGreen rounded-sm"
                                  src={`${process.env.REACT_APP_ASSET_URL}/${product["images"][0]}`}
                                  alt="public"
                                />
                              ) : (
                                <img
                                  alt="avat"
                                  className="object-cover h-20 w-auto"
                                  src={logo}
                                />
                              )}
                            </div>
                            <div className="w-full flex flex-col">
                              <div className="w-full flex flex-col lg:flex-row  justify-between pb-2">
                                <h3 className="font-bold  py-1 px-2 rounded-md">
                                  {product.title}
                                </h3>
                                <div className="flex gap-1">
                                  <p
                                    className={` py-1 px-2 rounded-md whitespace-nowrap  font-bold ${
                                      product.featured
                                        ? "text-customBlue"
                                        : "text-customGreen"
                                    }`}
                                  >
                                    {product.price.toLocaleString()} Ft
                                  </p>
                                  <p className=" py-1 px-2 rounded-md">
                                    {product.place.city}
                                  </p>
                                </div>
                              </div>
                              <p className="line-clamp-2 overflow-hidden mb-2">
                                {product.desc}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
              {isFetching && (
                <p className="py-4">További termékek beöltése...</p>
              )}
              {filteredProducts.length < numberOfItemsShown && (
                <p className="py-4">Nincs több termék</p>
              )}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default MainProductList;
