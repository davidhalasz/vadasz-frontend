import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { getCurrentUser, reset } from "../../features/authSlice";
import { VALIDATOR_REQUIRE,VALIDATOR_EMAIL } from "../../shared/util/validators";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('');
  const { user, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
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
    if(user) {
      navigate("/profil/feltoltott-hirdetesek", {replace: true});
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const registerSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/user/regisztracio", {
        username: formState.inputs.username.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      });
      navigate("/bejelentkezes");
    } catch (error) {
      if(error.response) {
        setMsg(error.data.msg);
      }
    }
  };

  return (
    <div>
      <div className="relative grid grid-cols-2 h-screen w-full">
        <div className="h-full w-full bg-customOrange"></div>
        <div className="h-full w-full bg-customMint"></div>

        <div className="absolute m-auto place-self-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 content-fit">
          <div className="w-full text-center">
            {msg && <p>{msg}</p>}
            <h1 className="pb-4 text-2xl font-bold text-customBlue">
              Regisztráció
            </h1>
          </div>

          <form onSubmit={registerSubmitHandler}>
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
                onClick={() => navigate('/belepes')}
              >
                Már van fiókod?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
