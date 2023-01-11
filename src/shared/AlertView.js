import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const AlertView = () => {
  const { okSubmit, toggleAlertDisplay } =
    useContext(AlertContext);

  return (
    <div className="absolute max-h-screen top-0 left-0 bottom-0 right-0 backdrop-blur-md flex place-center">
      <div className="m-auto w-[400px] bg-customBlue h-fit rounded-md p-4 border border-1 border-customYellow">
        <p className="text-center text-lg text-white mb-8">
          Biztosan törölni szeretnéd a hirdetést?
        </p>
        <div className="flex justify-between mx-14 pb-4">
          <button
            type="button"
            className="p-2 bg-customRed text-white rounded-md"
            onClick={() => okSubmit()}
          >
            {" "}
            Törlés
          </button>
          <button
            type="button"
            className="p-2 bg-customGreen text-white rounded-md"
            onClick={() => toggleAlertDisplay()}
          >
            {" "}
            Mégsem
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertView;
