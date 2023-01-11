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
          value="Vadászfegyverek"
          title="vadászfegyverek"
          activated={filters.includes("Vadászfegyverek")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="Lőszerek"
          title="lőszerek"
          activated={filters?.includes("Lőszerek")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="Optikák"
          title="optikák"
          activated={filters?.includes("Optikák")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="Ruházat"
          title="ruházat"
          activated={filters?.includes("Őltözékek")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="Vadászkutyák"
          title="vadászkutyák"
          activated={filters?.includes("Vadászkutyák")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="Járművek"
          title="járművek"
          activated={filters?.includes("Járművek")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="Ingatlanok"
          title="ingatlanok"
          activated={filters?.includes("Ingatlanok")}
          onSaveData={addCategoryFilterHandler}
        />
        <FilterButton
          value="Kellékek"
          title="kellékek"
          activated={filters?.includes("Kellékek")}
          onSaveData={addCategoryFilterHandler}
        />
      </div>
    </Fragment>
  );
};

export default CategoryFilter;
