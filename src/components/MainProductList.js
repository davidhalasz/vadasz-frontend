import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productActions } from "../features/productSlice";
import { TransitionGroup } from "react-transition-group";
import "./MainProductList.css";
import LoadingSpinner from "../shared/LoadingSpinner";
import MainListItem from "./MainListItem";

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
                    <MainListItem product={product} key={index}/>
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
