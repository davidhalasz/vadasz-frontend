import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { getCurrentUser, reset } from "../../features/authSlice";
import { CSSTransition } from "react-transition-group";
import "./Register.css";
import "./alert.css";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSentEmail, setIsSentEmail] = useState(false);
  const { user, isSuccess } = useSelector((state) => state.auth);
  const nodeRef = useRef(null);
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      telephone: {
        value: "",
        isValid: true,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/profil/feltoltott-hirdetesek", { replace: true });
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        setIsError(false);
        setMsg('');
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isError, msg]);


  const registerSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/regisztracio`, {
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
        telephone: formState.inputs.telephone.value,
      });
      setIsSentEmail(true);
    } catch (error) {
      if (error.response) {
        setIsError(true);
        setMsg(error.response.data.msg);
      }
    }
  };

  const resendEmailHandler = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/resend-email`, {
          email: formState.inputs.email.value,
        });
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      <div className="relative grid grid-cols-2 h-screen w-full">
        <div className="h-full w-full bg-customOrange">
          <button
            className="flex p-4 top-0 left-0"
            onClick={() => navigate("/")}
          >
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
            <span className="pl-2 font-bold">Vissza a főoldalra</span>
          </button>
        </div>
        <div className="h-full w-full bg-customMint"></div>
        {!isSentEmail ? (
          <div className="absolute m-auto place-self-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-[400px]">
            <div className="w-full text-center">
            <CSSTransition in={isError} timeout={300} nodeRef={nodeRef} classNames="alert">
                <div ref={nodeRef} className={`${msg !== '' && "p-2 bg-customRed text-white font-bold rounded-md my-2"} `}>
                  <p>{msg}</p>
                </div>
              </CSSTransition>
              <h1 className="pb-4 text-2xl font-bold text-customBlue">
                Regisztráció
              </h1>
            </div>

            <form onSubmit={registerSubmitHandler}>
              <div className="mb-4">
                <Input
                  id="name"
                  type="text"
                  label="Név"
                  placeholder="Név"
                  element="input"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Add meg a neved!"
                  onInput={inputHandler}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  id="email"
                  label="Email"
                  placeholder="Email"
                  element="input"
                  validators={[VALIDATOR_EMAIL()]}
                  errorText="Adj meg egy helyes email címet!"
                  onInput={inputHandler}
                />
              </div>
              <div className="mb-6">
                <Input
                  type="password"
                  id="password"
                  label="Jelszó"
                  placeholder="Jelszó"
                  element="input"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Add meg a jelszavad!"
                  onInput={inputHandler}
                />
              </div>
              <div className="mb-6">
                <Input
                  type="text"
                  id="telephone"
                  label="Telefonszám (opcionális)"
                  placeholder="Telefonszám"
                  element="input"
                  onInput={inputHandler}
                  validators={[]}
                  valid={true}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Regisztrálás
                </button>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  className="inline-block align-baseline font-bold text-sm text-customGreen hover:text-blue-800"
                  onClick={() => navigate("/bejelentkezes")}
                >
                  Már van fiókod?
                </button>
              </div>
            </form>
          </div>
        ) : (
          <CSSTransition
            in={isSentEmail}
            timeout={300}
            classNames="emailSent"
            unmountOnExit
            appear
            mountOnEnter
            nodeRef={nodeRef}
          >
            <div
              ref={nodeRef}
              className="absolute m-auto place-self-center bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 content-fit"
            >
              <div className="w-full text-center flex flex-col">
                <h1 className="text-lg font-bold text-customBlue">
                  A regisztrációval kapcsolatos további teendőket a megadott
                  email címre továbbítottuk.
                </h1>
                <div className="w-full flex place-content-end mt-2 gap-2">
                  <p className="place-end">Nem kaptad meg az emailt?</p>
                  <button type="button" onClick={() => resendEmailHandler()} className="text-customGreen font-bold">Újraküldés</button>
                </div>
              </div>
            </div>
          </CSSTransition>
        )}
      </div>
    </div>
  );
};

export default Register;
