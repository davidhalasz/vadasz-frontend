import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/authSlice";
import { getCurrentUser } from "../features/authSlice";
import { fetchProducts } from "../features/productSlice";
import ListItem from "../components/ListItem";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const products = useSelector((state) => state.products.products);

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

  const linkBtn = (pathName, state, title, cardColor) => {
    return (
      <Link to={{ pathname: pathName }} state={state}>
        <div
          className={`w-full text-xl text-white font-bold p-6 rounded-md bg-${cardColor}`}
        >
          <span className="backdrop-opacity-10 bg-black/20 p-3 rounded-md">
            {title}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div>
      <div className="relative grid grid-cols-2 h-screen w-full">
        <div className="h-full w-full bg-customYellow">
          <div className="px-8 pt-2 flex justify-between">
            <p className="text-xl">LOGO</p>
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
          <div className="absolute flex items-stretch h-full -top-4">
            <div className="px-8 font-extrabold self-center flex flex-col gap-3">
              <span className="bg-clip-text text-6xl text-transparent bg-customBlue">
                Vadászbörze
              </span>

              <span className="bg-clip-text text-3xl text-transparent bg-customBlue">
                Lorem ipsum dolor et crtrra.
              </span>
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-customBlue flex items-stretch">
          <div className="w-full pl-14 py-8 flex flex-col self-center gap-1">
            {linkBtn(
              "/hirdetesek",
              { category: "fegyverek" },
              "Fegyverek",
              "customOrange"
            )}
            {linkBtn(
              "/hirdetesek",
              { category: "lőszerek" },
              "Lőszerek",
              "customMint"
            )}
            {linkBtn(
              "/hirdetesek",
              { category: "optikák" },
              "Optikák",
              "customYellow"
            )}
            {linkBtn(
              "/hirdetesek",
              { category: "öltözékek" },
              "Öltözékek",
              "customRed"
            )}
            {linkBtn(
              "/hirdetesek",
              { category: "vadászkutyák" },
              "Vadászkutyák",
              "customGreen"
            )}
            <Link to={{ pathname: '/hirdetesek' }} state={{category: 'járművek'}}>
              <div
                className={`w-full text-xl text-white font-bold p-6 rounded-md bg-customPurple`}
              >
                <span className="backdrop-opacity-10 bg-black/20 p-3 rounded-md">
                  Járművek
                </span>
              </div>
            </Link>
            {linkBtn(
              "/hirdetesek",
              { category: "szolgáltatások" },
              "Szolgáltatások",
              "customIce"
            )}
            {linkBtn(
              "/hirdetesek",
              { category: "kellékek" },
              "Kellékek",
              "customRed"
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 h-screen w-full">
        <div className="h-full w-full bg-white flex flex-col justify-between">
          <div>
            <div className="p-8 font-extrabold">
              <span className="bg-clip-text text-3xl text-transparent bg-customBlue">
                Kiemelt hirdetések
              </span>
            </div>
            <div className="flex flex-col mx-3 gap-1">
              {products.map(
                (product) =>
                  product.featured && (
                    <ListItem
                      product={product}
                      key={product.uuid}
                      cardColor={"customBlue"}
                    />
                  )
              )}
            </div>
          </div>

          <div className="w-full pr-14 py-3">
            <Link to={{ pathname: '/hirdetesek' }} state={{featured: true}}>
              <div className="w-full text-xl text-white font-bold p-3 rounded-md bg-customOrange flex justify-end">
                <span className="backdrop-opacity-10 bg-black/10 p-2 rounded-md ">
                  Még több kiemelt hirdetés
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-full w-full bg-customIce flex flex-col justify-between">
          <div>
            <div className="p-8 font-extrabold">
              <span className="bg-clip-text text-3xl text-transparent bg-customBlue">
                Legutóbb feltöltött
              </span>
            </div>

            <div className="flex flex-col mx-3">
              {products.map((product) => (
                <ListItem
                  product={product}
                  key={product.uuid}
                  cardColor={"customPurple"}
                />
              ))}
            </div>
          </div>

          <div className="w-full pl-14 py-3">
            <Link to={{ pathname: '/hirdetesek' }} state={{reset: true}}>
            <div className="w-full text-xl text-white font-bold p-3 rounded-md bg-customGreen flex justify-start">
              <span className="backdrop-opacity-10 bg-black/10 p-2 rounded-md ">
                Összes mutatása
              </span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;