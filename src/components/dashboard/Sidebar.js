import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../shared/hooks/screenSizes-hook";

const openedFilterStyle = {
  maxHeight: "0px",
  transition: "max-height 0.15s ease-out",
  overflow: "hidden",
};
const closedFilterStyle = {
  maxHeight: "1000px",
  transition: "max-height 0.25s ease-in",
};

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [openActions, setOpenActions] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if(width > 767) {
      setOpenActions(false);
    } else {
      setOpenActions(true);
    }
  }, [width]);

  return (
    <div className="col-span-3 md:h-full w-full bg-customYellow p-3 text-customBlue font-bold flex flex-col">
      <div className="relative flex justify-between">
        <button className="flex" onClick={() => navigate("/")}>
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
        <button className="md:hidden">
          {openActions ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
              onClick={() => setOpenActions(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
              onClick={() => setOpenActions(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </button>
      </div>
      <div style={openActions ? openedFilterStyle : closedFilterStyle} className="flex flex-col justify-between h-full">
        <div className="min-w-full pt-10">
          <div>
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
            {props.user && (
              <NavLink to={`/kezelofelulet/adataim/${props.user.uuid}`}>
                <button className="w-full p-3 backdrop-opacity-10 bg-black/10 rounded-md text-center my-2">
                  Profil adatok
                </button>
              </NavLink>
            )}
          </div>
        </div>
        <button className="flex my-4 min-w-full" onClick={() => navigate("/")}>
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
    </div>
  );
};

export default Sidebar;
