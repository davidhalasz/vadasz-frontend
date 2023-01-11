import { Fragment } from "react";
import { useSelector } from "react-redux";
import FilterButton from "../../shared/FormElements/FilterButton";

const SubCategoryFilter = (props) => {
  let filters = useSelector((state) => state.products.filters);
  const addCategoryFilterHandler = (event) => {
    props.onSaveFilter({ name: "subCategories", value: event.target.value });
  };

  return (
    (filters.categories.includes("Vadászfegyverek") || filters.categories.includes("Optikák")) && (
      <Fragment>
        <div className="text-sm font-extrabold mt-4">
          <span className="bg-clip-text text-transparent bg-customBlue">
            Alkategóriák
          </span>
        </div>
        {filters.categories.includes("Vadászfegyverek") && (
          <div>
            <FilterButton
              value="Golyós puska"
              title="golyós puska"
              activated={filters?.subCategories.includes("Golyós puska")}
              onSaveData={addCategoryFilterHandler}
            />
            <FilterButton
              value="Sörétes puska"
              title="sörétes puska"
              activated={filters?.subCategories.includes("Sörétes puska")}
              onSaveData={addCategoryFilterHandler}
            />
            <FilterButton
              value="Vegyescsövű puska"
              title="Vegyescsövű puska"
              activated={filters?.subCategories.includes("Vegyescsövű puska")}
              onSaveData={addCategoryFilterHandler}
            />
            <FilterButton
              value="Maroklőfegyver"
              title="Maroklőfegyver"
              activated={filters?.subCategories.includes("Maroklőfegyver")}
              onSaveData={addCategoryFilterHandler}
            />
            <FilterButton
              value="Egyéb fegyverek"
              title="egyéb fegyverek"
              activated={filters?.subCategories.includes("Egyéb fegyverek")}
              onSaveData={addCategoryFilterHandler}
            />
          </div>
        )}

        {filters.categories.includes("Optikák") && (
          <div>
            <FilterButton
              value="Távcsövek"
              title="távcsövek"
              activated={filters?.subCategories.includes("Távcsövek")}
              onSaveData={addCategoryFilterHandler}
            />
            <FilterButton
              value="Éjjellátó távcsövek"
              title="éjjellátó távcső"
              activated={filters?.subCategories.includes("Éjjellátó távcsövek")}
              onSaveData={addCategoryFilterHandler}
            />
            <FilterButton
              value="Hőkamerák"
              title="hőkamerák"
              activated={filters?.subCategories.includes("Hőkamerák")}
              onSaveData={addCategoryFilterHandler}
            />
            <FilterButton
              value="Vadkamera"
              title="vadkamera"
              activated={filters?.subCategories.includes("Vadkamera")}
              onSaveData={addCategoryFilterHandler}
            />
          </div>
        )}
      </Fragment>
    )
  );
};

export default SubCategoryFilter;
