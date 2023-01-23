import { Fragment } from "react";
import { useSelector } from "react-redux";
import FilterButton from "../../shared/FormElements/FilterButton";

const CategoryFilter = (props) => {
  let filters = useSelector((state) => state.products.filters.categories);
  const addCategoryFilterHandler = (event) => {
    props.onSaveFilter({ name: "categories", value: event.target.value });
  };


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
