import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { productActions } from "../features/productSlice";
import CategoryFilter from "./filters/CategoryFilter";
import FeaturedFilter from "./filters/FeaturedFilter";
import ImageFilter from "./filters/ImageFilter";
import SubCategoryFilter from "./filters/SubCategoryFilter";
import "../shared/scroll.css";

const FilterSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const saveFilterHandler = ({ name, value }) => {
    dispatch(productActions.addFilter({ name: name, value: value }));
    dispatch(productActions.filteringProducts({ name: name, value: value }));
  };

  const saveFeaturedFilterHandler = ({name, value}) => {
    dispatch(productActions.changeFeaturedFilter({name: name, value: value}));
    dispatch(productActions.filteringProducts({name: name, value: value}));
  }

  const saveImageFilterHandler = ({ name, value}) => {
    dispatch(productActions.changeShowImageFilter({name: name, value: value}));
    dispatch(productActions.filteringProducts({name: name, value: value}));
  }

  const navigateByLocation = () => {
    if(location.pathname === "/hirdetesek") {
      navigate("/");
    } else {
      navigate("/hirdetesek");
    }
  }

  return (
    <div className="max-h-screen col-span-3 w-full bg-customYellow p-3 text-customBlue font-bold flex flex-col justify-between">
      <div className="h-full flex flex-col min-w-full">
        <button className="grow-0 h-fit flex mb-10" onClick={() => navigateByLocation() }>
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
          <span className="pl-2">{ location.pathname === "/hirdetesek" ? 'Vissza a főoldalra' : 'Vissza a hirdetésekhez'}</span>
        </button>
        {location.pathname === "/hirdetesek" && (
          <div className="grow scrollhost_container">
            <p className="text-customBlue text-center mb-4">
              Szűrési feltételek
            </p>
            <CategoryFilter onSaveFilter={saveFilterHandler} />
            <SubCategoryFilter onSaveFilter={saveFilterHandler}/>
            <FeaturedFilter onFeaturedFilter={saveFeaturedFilterHandler}/>
            <ImageFilter onShowImageFilter={saveImageFilterHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
