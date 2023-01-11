import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from "../../features/authSlice";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { getCurrentUser } from "../../features/authSlice";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
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
      navigate("/kezelofelulet/feltoltott-hirdetesek", { replace: true });
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const email = formState.inputs.email.value;
    const password = formState.inputs.password.value;
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <div className="relative grid grid-cols-2 h-screen w-full">
        <div className="h-full w-full bg-customYellow">
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

        <div className="absolute z-10 m-auto place-self-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 content-fit">
          <div className="w-full text-center">
            {isError && <p>{message}</p>}
            <h1 className="pb-4 text-2xl font-bold text-customBlue">
              Bejelentkezés
            </h1>
          </div>

          <form onSubmit={loginSubmitHandler}>
            <div className="mb-4">
              <Input
                id="email"
                type="text"
                label="Email"
                placeholder="Email"
                element="input"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Add meg az email címed!"
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
            <div className="flex items-center justify-between">
              <button
                className="bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLoading ? "Küldés..." : "Bejelentkezés"}
              </button>
              <a
                className="ml-2 inline-block align-baseline font-bold text-sm text-customGreen hover:text-blue-800"
                href="http://localhost:3000/"
              >
                Elfelejtetted a jelszavad?
              </a>
            </div>
            <div className="pt-6">
              <button
                type="button"
                className="inline-block align-baseline font-bold text-sm text-customGreen hover:text-blue-800"
                onClick={() => navigate("/regisztracio")}
              >
                Nincs még felhasználói fiókod? Regisztrálj!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
