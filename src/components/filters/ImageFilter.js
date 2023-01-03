import { Fragment } from "react";
import { useSelector } from "react-redux";

const ImageFilter = (props) => {
  const showImage = useSelector((state) => state.products.filters.showImage);
  const toggleShowImage = (e) => {
    if(e.target.checked) {
        props.onShowImageFilter({value: true});
    } else {
        props.onShowImageFilter({value: false});
    }
  }

  return (
    <Fragment>
      <div className="text-sm font-extrabold pt-4">
        <span className="bg-clip-text text-transparent bg-customBlue">
          Csak képpel rendelkező hirdetések
        </span>
      </div>
      <label
        htmlFor="checked-toggle-image"
        className="inline-flex relative items-center cursor-pointer pb-4"
      >
        <input
          type="checkbox"
          value={showImage}
          id="checked-toggle-image"
          name="checked-toggle-image"
          className="sr-only peer"
          onChange={toggleShowImage}
          checked={showImage}
        />
        <div className="w-11 h-6 bg-customBlue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-customGreen"></div>
      </label>
    </Fragment>
  );
};

export default ImageFilter;