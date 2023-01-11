import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Activation = () => {
    const [activated, setActivated] = useState(false);
    const { uuid } = useParams();  
    const navigate = useNavigate();

    useEffect(() => {
        console.log('hu')
        const activationHandler = async () => {
            setActivated(false);
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/activation/${uuid}`);
                if(response.statusText === 'OK') {
                    setActivated(true);
                    const timeout = setTimeout(() => {
                        navigate('/bejelentkezes');
                    }, 5000);

                    return () => clearTimeout(timeout);
                }
            } catch (error) {
                console.log(error);
            }
        }

        activationHandler();
    }, [activated, navigate, uuid]);


  return (
    <Fragment>
      <div className="relative grid grid-cols-2 h-screen w-full">
        <div className="h-full w-full bg-customOrange"></div>
        <div className="h-full w-full bg-customMint"></div>
        <div className="absolute m-auto place-self-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 content-fit">
          <div className="w-full text-center">
            <h1 className="pb-4 text-2xl font-bold text-customBlue">
              {activated
                ? "Sikeres regisztráció! Néhány másodperc mulva visszairányítunk a bejelentkező felületre!"
                : "Regisztráció megerősítése folyamatban..."}
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Activation;
