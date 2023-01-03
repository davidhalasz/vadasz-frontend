import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, productActions } from "../features/productSlice";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./MainProductList.css";

const MainProductList = () => {
  const products = useSelector((state) => state.products.products);
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

  return (
    <Fragment>
      <div className="w-full text-center p-4 text-customBlue font-bold text-2xl">
        <h1>Hirdetések</h1>
      </div>
      <div className="mx-auto w-10/12">
        <div className="w-full">
          <TransitionGroup className="product-list">
              {filteredProducts.map((product, index) => (
                <CSSTransition key={product.uuid} timeout={500} classNames="item">
                <div
                  key={product.uuid}
                  className="w-full bg-customBlue p-1 rounded-md my-2"
                >
                  <Link
                    to={{ pathname: `/hirdetesek/${product.uuid}` }}
                    state={{ product: product }}
                  >
                    <div className="w-full rounded-md flex flex-row gap-3">
                      <div className="h-20 w-20 shrink-0 mt-1 backdrop-opacity-10 bg-black/10 ml-1 rounded-md">
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
                          <h3 className="font-bold backdrop-opacity-10 bg-black/10 py-1 px-2 rounded-md">
                            {product.title}
                          </h3>
                          <p className="backdrop-opacity-10 bg-black/10 py-1 px-2 rounded-md whitespace-nowrap">
                            {product.price} Ft
                          </p>
                          <p className="backdrop-opacity-10 bg-black/10 py-1 px-2 rounded-md">
                            Debrecen
                          </p>
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
        </div>
      </div>
    </Fragment>
  );
};

export default MainProductList;
