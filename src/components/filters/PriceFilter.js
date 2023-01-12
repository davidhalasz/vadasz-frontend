import { Slider } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./PriceFilter.css";

const PriceFilter = (props) => {
  const filters = useSelector((state) => state.products.filters.minmax);
  const minmax = useSelector((state) => state.products.minmax);
  const priceFilterHandler = (event, newValue) => {
    props.onBetweenFilter({
        name: "minmax", min: newValue[0], max:  newValue[1],
    });
  };


  return (
    <Fragment>
      <div className="text-sm font-extrabold">
        <span className="bg-clip-text text-transparent bg-customBlue">
          Ár
        </span>
      </div>
      <div className="slider-div">
        <Slider
          getAriaLabel={() => "price range"}
          value={[filters.min, filters.max]}
          onChange={priceFilterHandler}
          valueLabelDisplay="off"
          disableSwap
          min={minmax.min}
          max={minmax.max}
        />
      </div>
      <div className="w-full flex justify-between mb-4">
        <p>{filters.min.toLocaleString() + " Ft"}</p>
        <p>{filters.max.toLocaleString() + " Ft"}</p>
      </div>
    </Fragment>
  );
};

export default PriceFilter;
