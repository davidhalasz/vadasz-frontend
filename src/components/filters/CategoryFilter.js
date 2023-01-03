import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { productActions } from "../../features/productSlice";
import FilterButton from "../../shared/FormElements/FilterButton";

const CategoryFilter = (props) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const categoryName = location.state ? location.state.category : "";
  const resetFilter = location.state ? location.state.reset : false;
  let filters = useSelector((state) => state.products.filters.categories);
  const addCategoryFilterHandler = (event) => {
    props.onSaveFilter({ name: "categories", value: event.target.value });
  };

  useEffect(() => {
    if (categoryName) {
      dispatch(productActions.resetFilter());
      props.onSaveFilter({ name: "categories", value: categoryName });
    }
  }, [dispatch, props, categoryName]);

  useEffect(() => {
    if(resetFilter) {
      dispatch(productActions.resetFilter());
    }
  }, [dispatch, resetFilter]);

  return (
    <Fragment>
      <div className="text-sm font-extrabold">
        <span className="bg-clip-text text-transparent bg-customBlue">
          Kategóriák
        </span>
      </div>
      <div>
        <FilterButton
          value="fegyverek"
          title="fegyverek"
          activated={filters.includes("fegyverek")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="lőszerek"
          title="lőszerek"
          activated={filters?.includes("lőszerek")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="optikák"
          title="optikák"
          activated={filters?.includes("optikák")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="öltözékek"
          title="öltözékek"
          activated={filters?.includes("öltözékek")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="vadászkutyák"
          title="vadászkutyák"
          activated={filters?.includes("vadászkutyák")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="járművek"
          title="járművek"
          activated={filters?.includes("járművek")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="szolgáltatások"
          title="szolgáltatások"
          activated={filters?.includes("szolgáltatások")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="kellékek"
          title="kellékek"
          activated={filters?.includes("kellékek")}
          onSaveData={addCategoryFilterHandler}
        />
      </div>
    </Fragment>
  );
};

export default CategoryFilter;
