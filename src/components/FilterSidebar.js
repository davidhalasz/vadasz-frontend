import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { productActions } from "../features/productSlice";
import CategoryFilter from "./filters/CategoryFilter";
import FeaturedFilter from "./filters/FeaturedFilter";
import ImageFilter from "./filters/ImageFilter";
import SubCategoryFilter from "./filters/SubCategoryFilter";
import "../shared/scroll.css";
import PriceFilter from "./filters/PriceFilter";
import CountyFilter from "./filters/CountyFilter";
import { useState } from "react";
import useWindowDimensions from "../shared/hooks/screenSizes-hook";

const openedFilterStyle = {maxHeight: "0px", transition: "max-height 0.15s ease-out", overflow: "hidden"};
const closedFilterStyle = {maxHeight: "1000px", transition: "max-height 0.25s ease-in"};

const FilterSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const saveFilterHandler = ({ name, value }) => {
    dispatch(productActions.addFilter({ name: name, value: value }));
    dispatch(productActions.filteringProducts({ name: name, value: value }));
  };

  const saveFeaturedFilterHandler = ({ name, value }) => {
    dispatch(productActions.changeFeaturedFilter({ name: name, value: value }));
    dispatch(productActions.filteringProducts({ name: name, value: value }));
  };

  const saveImageFilterHandler = ({ name, value }) => {
    dispatch(
      productActions.changeShowImageFilter({ name: name, value: value })
    );
    dispatch(productActions.filteringProducts({ name: name, value: value }));
  };
 
  const saveBetweenHandler = ({ name, min, max }) => {
    dispatch(productActions.addBetweenData({ name: name, min: min, max: max }));
    dispatch(productActions.filteringProducts({ name: name }));
  };

  const navigateByLocation = () => {
    if (location.pathname === "/hirdetesek") {
      navigate("/");
    } else {
      navigate("/hirdetesek");
    }
  };

  return (
    <div className="md:h-screen col-span-3 w-full bg-customYellow p-3 text-customBlue font-bold flex flex-col justify-between">
      <div className="md:h-full flex flex-col min-w-full">
        <button
          className="grow-0 h-fit flex"
          onClick={() => navigateByLocation()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="pl-2">
            {location.pathname === "/hirdetesek"
              ? "Vissza a főoldalra"
              : "Vissza a hirdetésekhez"}
          </span>
        </button>
        {location.pathname === "/hirdetesek" && width < 768 && (
          <div className="relative grow flex flex-col mt-4">
              <div style={isOpenFilter ? closedFilterStyle : openedFilterStyle}>
                <p className="text-customBlue text-center mb-4">
                  Szűrési feltételek
                </p>
                <PriceFilter onBetweenFilter={saveBetweenHandler} />
                <CategoryFilter onSaveFilter={saveFilterHandler} />
                <SubCategoryFilter onSaveFilter={saveFilterHandler} />
                <CountyFilter onSaveFilter={saveFilterHandler} />
                <FeaturedFilter onFeaturedFilter={saveFeaturedFilterHandler} />
                <ImageFilter onShowImageFilter={saveImageFilterHandler} />
              </div>
            

            <button
              onClick={() => setIsOpenFilter(!isOpenFilter)}
              className="text-center p-2 border border-customBlue rounded-md self-center"
            >
              {isOpenFilter ? "Szűrő elrejtése" : "Szűrő mutatása"}
            </button>
          </div>
        )}

        {location.pathname === "/hirdetesek" && width > 767 && (
          <div className="relative grow scrollhost_container mt-4">
            <p className="text-customBlue text-center mb-4">
              Szűrési feltételek
            </p>
            <PriceFilter onBetweenFilter={saveBetweenHandler} />
            <CategoryFilter onSaveFilter={saveFilterHandler} />
            <SubCategoryFilter onSaveFilter={saveFilterHandler} />
            <CountyFilter onSaveFilter={saveFilterHandler} />
            <FeaturedFilter onFeaturedFilter={saveFeaturedFilterHandler} />
            <ImageFilter onShowImageFilter={saveImageFilterHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
