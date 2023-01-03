import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from "../../features/authSlice";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { getCurrentUser } from "../../features/authSlice";

import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const [formState, inputHandler] = useForm(
    {
      username: {
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
    if(user) {
      navigate("/kezelofelulet/feltoltott-hirdetesek", {replace: true});
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const username = formState.inputs.username.value;
    const password = formState.inputs.password.value;
    dispatch(loginUser({username, password}));
  };

  return (
    <div>
      <div className="relative grid grid-cols-2 h-screen w-full">
        <div className="h-full w-full bg-customYellow"></div>
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
                id="username"
                type="text"
                label="Felhasználónév"
                placeholder="Felhasználónév"
                element="input"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Add meg a felhasználóneved!"
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
                {isLoading ? "Küldés..." : "Bejelentkezés" }
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
                onClick={() => navigate('/regisztracio')}
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
