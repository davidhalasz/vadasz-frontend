import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-customYellow p-3 text-customBlue font-bold flex flex-col justify-between">
      <div className="min-w-full">
        <button className="flex mb-10" onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="pl-2">Vissza a főoldalra</span>
        </button>
        <NavLink to={"/kezelofelulet/feltoltott-hirdetesek"}>
          <button className="w-full p-3 backdrop-opacity-10 bg-black/10 rounded-md text-center my-2">
            Hirdetéseim
          </button>
        </NavLink>
        <NavLink to={"/kezelofelulet/uj-hirdetes"}>
          <button className="w-full p-3 backdrop-opacity-10 bg-black/10 rounded-md text-center my-2">
            Új hirdetés
          </button>
        </NavLink>
        <NavLink to={"/kezelofelulet/adataim"}>
          <button className="w-full p-3 backdrop-opacity-10 bg-black/10 rounded-md text-center my-2">
            Profil adatok
          </button>
        </NavLink>
      </div>
      <button className="flex mb-4 min-w-full" onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>

        <span className="pl-2">Kijelentkezés</span>
      </button>
    </div>
  );
};

export default Sidebar;
