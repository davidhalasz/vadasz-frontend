import { Link } from "react-router-dom";

import he from "he";
import logo from "../uploads/images/logo.png";

const ListItem = (props) => {
  return (
    <div
      key={props.product._id}
      className={`bg-${props.cardColor} w-full p-1 rounded-md my-2`}
    >
      <Link
        to={{ pathname: `/hirdetesek/${props.product._id}` }}
        state={{ product: props.product }}
      >
        <div className="w-full rounded-md flex flex-row gap-3">
          <div className="h-20 w-20 shrink-0 my-1 ml-1 rounded-md">
            {props.product['images'][0] ? (
              <img
                className="h-full w-full object-cover h-20 w-20 border border-1 border-customGreen rounded-sm"
                src={process.env.REACT_APP_ASSET_URL + "/" + props.product['images'][0]}
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
          <div className="w-full flex flex-col text-white">
            <div className="w-full flex flex-col lg:flex-row lg:justify-between pb-2">
              <h3 className="font-bold py-1 px-2 rounded-md">
                {he.decode(props.product.title)}
              </h3>
              <div className="flex gap-1">
                <p className="py-1 px-2 rounded-md lg:whitespace-nowrap">
                  {props.product.price.toLocaleString()} Ft
                </p>
                <p className="py-1 px-2 rounded-md">
                  {props.product.place.city}
                </p>
              </div>
            </div>
            <p className="line-clamp-2 overflow-hidden mb-2">
              {he.decode(props.product.desc)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
