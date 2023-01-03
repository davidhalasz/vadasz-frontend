import { Link } from "react-router-dom";


const ListItem = (props) => {
  const getImage = (str) => {
    if (str) {
      const images = str.split(", ");
      return (
        <img
          className="h-full w-full object-cover h-20 w-20 border border-1 border-customGreen rounded-sm"
          src={process.env.REACT_APP_ASSET_URL + '/' + images[0]}
          alt="public"
        />
      );
    }
    return;
  };

  return (
    <div
      key={props.product.uuid}
      className={`bg-${props.cardColor} w-full p-1 rounded-md my-2`}
    >
      <Link
        to={{ pathname: `/hirdetesek/${props.product.uuid}` }}
        state={{ product: props.product }}
      >
        <div className="w-full rounded-md flex flex-row gap-3">
          <div className="h-20 w-20 shrink-0 mt-1 backdrop-opacity-10 bg-black/10 ml-1 rounded-md">
            {getImage(props.product.images) ?? (
              <img
                alt="avat"
                className="h-full w-full object-cover h-20 w-20"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Deer_%28example%29.svg/1024px-Deer_%28example%29.svg.png?20180723123450"
              />
            )}
          </div>
          <div className="w-full flex flex-col text-white">
            <div className="w-full flex justify-between pb-2">
              <h3 className="font-bold backdrop-opacity-10 bg-black/10 py-1 px-2 rounded-md">
                {props.product.title}
              </h3>
              <p className="backdrop-opacity-10 bg-black/10 py-1 px-2 rounded-md whitespace-nowrap">
                {props.product.price} Ft
              </p>
              <p className="backdrop-opacity-10 bg-black/10 py-1 px-2 rounded-md">
                Debrecen
              </p>
            </div>
            <p className="line-clamp-2 overflow-hidden mb-2">
              {props.product.desc}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
