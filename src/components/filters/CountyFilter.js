import { Fragment } from "react";
import { useSelector } from "react-redux";
import FilterButton from "../../shared/FormElements/FilterButton";

const CountyFilter = (props) => {
  const counties = useSelector((state) => state.products.counties);
  const filters = useSelector((state) => state.products.filters.counties);
  const addCountyFilterHandler = (event) => {
    props.onSaveFilter({ name: "counties", value: event.target.value });
  };

  console.log(filters);

  return (
    <Fragment>
      <div className="text-sm font-extrabold mt-4">
        <span className="bg-clip-text text-transparent bg-customBlue">
          Vármegye
        </span>
      </div>
      <div>
        {counties.map((item) => {
          return (
            <FilterButton
              value={item}
              title={item}
              activated={filters.includes(item)}
              onSaveData={addCountyFilterHandler}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default CountyFilter;
