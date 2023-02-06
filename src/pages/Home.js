import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/authSlice";
import { getCurrentUser } from "../features/authSlice";
import { fetchProducts, productActions } from "../features/productSlice";
import ListItem from "../components/ListItem";
import "./Home.css";
import BaseFooter from "../components/BaseFooter";
import LoadingSpinner from "../shared/LoadingSpinner";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleLogin = () => {
    navigate("/bejelentkezes");
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const setCategoryFilter = (value) => {
    dispatch(productActions.resetFilter());
    dispatch(productActions.addFilter({ name: "categories", value: value }));
  };

  const linkBtn = (pathName, category, title, cardColor) => {
    return (
      <Link
        to={{ pathname: pathName }}
        onClick={() => setCategoryFilter(category)}
      >
        <div
          className={`w-full text-xl text-white font-bold p-6 rounded-l-md bg-${cardColor}`}
        >
          <span className="backdrop-opacity-10 bg-black/20 p-3 rounded-md">
            {title}
          </span>
        </div>
      </Link>
    );
  };

  const getFeaturedProducts = () => {
    let isThereFeatured = products.find((prod) => {
      if (prod.featured === true) {
        return true;
      }
      return false;
    });

    if (isThereFeatured) {
      return products
        .slice(0, 10)
        .map(
          (product) =>
            product.featured && (
              <ListItem
                product={product}
                key={product._id}
                cardColor={"customBlue"}
              />
            )
        );
    } else {
      return (
        <p className="text-center font-bold text-lg">
          Jelenleg nincs kiemelt termék
        </p>
      );
    }
  };

  const getLatestProducts = () => {
    if (typeof products !== "undefined" && products.length > 0) {
      return products
        .slice(0, 10)
        .map((product) => (
          <ListItem
            product={product}
            key={product._id}
            cardColor={"customPurple"}
          />
        ));
    } else {
      return (
        <p className="text-center font-bold text-lg">
          Jelenleg nincs feltöltött termék
        </p>
      );
    }
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex flex-col md:grid md:grid-cols-2 md:h-screen w-full">
        <div className="relative h-full w-full bg-customYellow flex">
          <div className="absolute w-full">
            <div className="px-8 pt-2 flex justify-between">
              <div className="text-xl">LOGO</div>
              <div className="flex gap-4">
                {!user && (
                  <button
                    onClick={handleLogin}
                    className="text-xl text-customBlue font-bold"
                  >
                    Belépés
                  </button>
                )}
                {user && (
                  <button
                    onClick={() =>
                      navigate("/kezelofelulet/feltoltott-hirdetesek")
                    }
                    className="text-md text-customBlue font-bold border border-2 border-customBlue rounded-md p-1"
                  >
                    Kezelőfelület
                  </button>
                )}
                {user && (
                  <button
                    onClick={handleLogout}
                    className="text-md text-customBlue font-bold"
                  >
                    Kijelentkezés
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="py-16 md:py-0 text-center w-full md:text-left md:w-fit px-8 font-extrabold self-center flex flex-col gap-3">
            <span className="bg-clip-text text-4xl md:text-5xl lg:text-6xl text-transparent bg-customBlue">
              Vadászhirdető
            </span>

            <span className="bg-clip-text text-xl md:text-2xl lg:text-3xl text-transparent bg-customBlue">
              Lorem ipsum dolor et crtrra.
            </span>
          </div>
        </div>
        <div className="h-full w-full bg-customBlue flex items-stretch">
          <div className="w-full pl-14 py-4 md:py-0 flex flex-col self-center gap-1">
            {linkBtn("/hirdetesek", "Ingatlanok", "Ingatlanok", "customIce")}
            <Link
              to={{ pathname: "/hirdetesek" }}
              onClick={() => setCategoryFilter("Járművek")}
            >
              <div
                className={`w-full text-xl text-white font-bold p-6 rounded-md bg-customPurple`}
              >
                <span className="backdrop-opacity-10 bg-black/20 p-3 rounded-md">
                  Járművek
                </span>
              </div>
            </Link>
            {linkBtn("/hirdetesek", "Kellékek", "Kellékek", "customRed")}
            {linkBtn("/hirdetesek", "Lőszerek", "Lőszerek", "customMint")}
            {linkBtn("/hirdetesek", "Optikák", "Optikák", "customYellow")}
            {linkBtn("/hirdetesek", "Ruházat", "Ruházat", "customRed")}
            {linkBtn(
              "/hirdetesek",
              "Vadászfegyverek",
              "Vadászfegyverek",
              "customOrange"
            )}
            {linkBtn(
              "/hirdetesek",
              "Vadászkutyák",
              "Vadászkutyák",
              "customGreen"
            )}
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="relative grid grid-cols-1 md:grid-cols-2  max-h-screen md:h-screen w-full">
          <div className="w-full max-h-screen bg-white justify-between">
            <div className="h-full flex flex-col">
              <div className="grow-0 p-8 font-extrabold flex-none">
                <span className="bg-clip-text text-3xl text-transparent bg-customBlue">
                  Kiemelt hirdetések
                </span>
              </div>
              <div className="grow h-fit scrollhost_container">
                <div className="flex flex-col mx-3 gap-1">
                  {isLoading ? <LoadingSpinner /> : getFeaturedProducts()}
                </div>
              </div>
              <div className="grow-0 h-fit w-full pr-14 py-3">
                <Link
                  to={{ pathname: "/hirdetesek" }}
                  onClick={() =>
                    dispatch(
                      productActions.changeFeaturedFilter({ value: true })
                    )
                  }
                >
                  <div className="w-full text-xl text-white font-bold p-3 rounded-r-md bg-customOrange flex justify-end">
                    <span className="backdrop-opacity-10 bg-black/10 p-2 rounded-md ">
                      Még több kiemelt hirdetés
                    </span>
                  </div>
                </Link>
              </div>{" "}
            </div>
          </div>
          <div className="w-full max-h-screen bg-customIce justify-between">
            <div className="h-full flex flex-col">
              <div className="grow-0 p-8 font-extrabold flex-none">
                <span className="bg-clip-text text-3xl text-transparent bg-customBlue">
                  Legutóbb feltöltött
                </span>
              </div>
              <div className="grow h-fit scrollhost_container">
                <div className="flex flex-col mx-3 gap-1">
                  {isLoading ? <LoadingSpinner /> : getLatestProducts()}
                </div>
              </div>

              <div className="grow-0 h-fit w-full pl-14 py-3">
                <Link
                  to={{ pathname: "/hirdetesek" }}
                  onClick={() => dispatch(productActions.resetFilter())}
                >
                  <div className="w-full text-xl text-white font-bold p-3 rounded-l-md bg-customGreen flex justify-start">
                    <span className="backdrop-opacity-10 bg-black/10 p-2 rounded-md ">
                      Összes mutatása
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full bg-customBlue text-white py-10 md:col-span-2">
            <div className="container mx-auto grid grid-cols-3 divider">
              <div>
                <h2 className="text-left pb-4 text-lg font-bold">Kapcsolat</h2>
                <ul>
                  <li>lorem</li>
                  <li>ipsum</li>
                  <li>dolot</li>
                  <li>etevgg</li>
                </ul>
              </div>
              <div>
                <h2 className="text-left pb-4 text-lg font-bold">Valami</h2>
                <ul>
                  <li>lorem</li>
                  <li>ipsum</li>
                  <li>dolot</li>
                  <li>etevgg</li>
                </ul>
              </div>
              <div>
                <h2 className="text-left pb-4 text-lg font-bold">
                  Lorem ipsum
                </h2>
                <ul>
                  <li>lorem</li>
                  <li>ipsum</li>
                  <li>dolot</li>
                  <li>etevgg</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
