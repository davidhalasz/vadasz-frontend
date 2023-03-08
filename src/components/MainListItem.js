import "./MainProductList.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import logo from "../uploads/images/logo.png";
import { useRef } from "react";
const featuredBg = "w-full bg-customYellow p-1 rounded-md my-2 text-customBlue";
const baseBg = "w-full bg-customBlue p-1 rounded-md my-2 text-white";


const MainListItem = ({ product, ...rest }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
    {...rest}
      nodeRef={nodeRef}
      timeout={500}
      classNames="item"
    >
      <div ref={nodeRef} className={product.featured ? featuredBg : baseBg}>
        <Link
          to={{ pathname: `/hirdetesek/${product._id}` }}
          state={{ product: product }}
        >
          <div className="w-full rounded-md flex flex-row gap-3">
            <div className="h-20 w-20 shrink-0 my-1  ml-1 rounded-md">
              {product["images"][0] ? (
                <img
                  className="object-cover h-20 w-20 border border-1 border-customGreen rounded-sm"
                  src={`${process.env.REACT_APP_ASSET_URL}/${product["images"][0]}`}
                  alt="public"
                />
              ) : (
                <img
                  alt="avat"
                  className="object-cover h-20 w-auto"
                  src={logo}
                />
              )}
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col lg:flex-row  justify-between pb-2">
                <h3 className="font-bold  py-1 px-2 rounded-md">
                  {product.title}
                </h3>
                <div className="flex gap-1">
                  <p
                    className={` py-1 px-2 rounded-md whitespace-nowrap  font-bold ${
                      product.featured ? "text-customBlue" : "text-customGreen"
                    }`}
                  >
                    {product.price.toLocaleString()} Ft
                  </p>
                  <p className=" py-1 px-2 rounded-md">{product.place.city}</p>
                </div>
              </div>
              <p className="line-clamp-2 overflow-hidden mb-2">
                {product.desc}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </CSSTransition>
  );
};

export default MainListItem;
