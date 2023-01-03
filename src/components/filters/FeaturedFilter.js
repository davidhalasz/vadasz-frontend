import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { productActions } from "../../features/productSlice";

const FeaturedFilter = (props) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const locationFeaturedValue = location.state ? location.state.featured : false;
  const featuredFilterValue = useSelector((state) => state.products.filters.featured);
  const toggleFeaturedFilterValue = (e) => {
    if(e.target.checked) {
        props.onFeaturedFilter({value: true});
    } else {
        props.onFeaturedFilter({value: false});
    }
  }

  useEffect(() => {
    if(locationFeaturedValue) {
      dispatch(productActions.resetFilter());
      props.onFeaturedFilter({value: true});
    }
  }, [dispatch, props, locationFeaturedValue]);
  return (
    <Fragment>
      <div className="text-sm font-extrabold pt-4">
        <span className="bg-clip-text text-transparent bg-customBlue">
          Csak kiemelt hirdetések
        </span>
      </div>
      <label
        htmlFor="checked-toggle"
        className="inline-flex relative items-center cursor-pointer pb-4"
      >
        <input
          type="checkbox"
          value={featuredFilterValue}
          id="checked-toggle"
          name="checked-toggle"
          className="sr-only peer"
          onChange={toggleFeaturedFilterValue}
          checked={featuredFilterValue}
        />
        <div className="w-11 h-6 bg-customBlue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-customGreen"></div>
      </label>
    </Fragment>
  );
};

export default FeaturedFilter;
