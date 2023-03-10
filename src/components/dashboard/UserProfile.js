import { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import "./UserProfile.css";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import axios from "axios";
import {
  addMessageHandler,
  getCurrentUser,
  reset,
} from "../../features/authSlice";
import { AlertContext } from "../../context/AlertContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);
  const [isTelephoneInput, setIsTelephoneInput] = useState(false);
  const [isNameInput, setIsNameInput] = useState(false);

  const [formState, inputHandler] = useForm(
    {
      telephone: {
        value: "",
        isValid: true,
      },
      name: {
        value: user ? user.name : "",
        isValid: true,
      },
      newPassword: {
        value: "",
        isValid: false,
      },
      oldPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const {
    toggleAlertDisplay,
    changeCurrentUserId,
    changedData,
    changedDataHandler,
  } = useContext(AlertContext);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading === false) {
      if (!user) {
        navigate("/");
      }
    }
  }, [user, navigate, isLoading]);

  useEffect(() => {
    if (changedData) {
      changedDataHandler();
      dispatch(getCurrentUser());
      dispatch(reset());
      window.location.reload(false);
    }
  }, [navigate, changedData, changedDataHandler, dispatch]);

  const addTelephoneHandler = async () => {
    const telephone = formState.inputs.telephone.value;
    const isValid = formState.inputs.telephone.isValid;
    if (isValid) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/update-user/${user._id}`,
          {
            telephone: telephone,
          }
        );

        setIsTelephoneInput(false);
        dispatch(getCurrentUser());
        dispatch(
          addMessageHandler({
            messageType: "success",
            message: response.data.msg,
          })
        );
      } catch (error) {
        console.log(error);
        dispatch(
          addMessageHandler({
            messageType: "error",
            message: error.response.data.msg,
          })
        );
      }
    }
  };

  const addNameHandler = async () => {
    const name = formState.inputs.name.value;
    const isValid = formState.inputs.name.isValid;
    if (isValid) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/update-user/${user._id}`,
          {
            name: name,
          }
        );
        setIsNameInput(false);
        dispatch(getCurrentUser());
        dispatch(
          addMessageHandler({
            messageType: "success",
            message: response.data.msg,
          })
        );
      } catch (error) {
        console.log(error);
        dispatch(
          addMessageHandler({
            messageType: "error",
            message: error.response.data.msg,
          })
        );
      }
    }
  };

  const changePasswordHandler = async () => {
    if (
      formState.inputs.newPassword.isValid &&
      formState.inputs.oldPassword.isValid
    ) {
      try {
        const oldPassword = formState.inputs.oldPassword.value;
        const newPassword = formState.inputs.newPassword.value;

        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/update-user/${user._id}`,
          {
            newpassword: newPassword,
            oldpassword: oldPassword,
          }
        );
        dispatch(getCurrentUser());
        dispatch(
          addMessageHandler({
            messageType: "success",
            message: response.data.msg,
          })
        );
      } catch (error) {
        console.log(error);
        dispatch(
          addMessageHandler({
            messageType: "error",
            message: error.response.data.msg,
          })
        );
      }
    }
  };

  const alertHandler = () => {
    changeCurrentUserId(user._id);
    toggleAlertDisplay("Biztosan t??r??lni szeretn??d a profilod?", "profile");
  };

  return (
    <Fragment>
      <div className="w-full flex flex-col text-center p-4 text-customBlue">
        <h1 className="text-2xl font-bold">Profiladatok</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {user && (
            <div className="w-full shadow-lg p-8 mt-8">
              <h2 className="text-lg font-bold mb-8">Alapadatok</h2>
              <table className="table-auto text-lg">
                <tbody>
                  <tr className="text-left">
                    <td className="py-2 px-4 border-b border-slate-200">
                      N??v:
                    </td>
                    <td className="py-2 px-4 border-b border-slate-200 flex">
                      {!isNameInput ? (
                        <div className="w-full flex justify-between gap-2">
                          <p className="text-left">{user.name}</p>
                          <button
                            type="button"
                            onClick={() => setIsNameInput(true)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-between gap-2">
                          <div className="">
                            <Input
                              id="name"
                              type="text"
                              value={user.name}
                              validators={[VALIDATOR_REQUIRE()]}
                              onInput={inputHandler}
                              element="input"
                            />
                          </div>

                          <div className="flex gap-2">
                            <button
                              className="text-customGreen"
                              type="button"
                              onClick={() => addNameHandler()}
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
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => setIsNameInput(false)}
                              className="text-customRed"
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
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr className="text-left">
                    <td className="py-2 px-4 border-b border-slate-200">
                      Email:
                    </td>
                    <td className="py-2 px-4 border-b border-slate-200">
                      {user["email"]}
                    </td>
                  </tr>
                  <tr className="text-left">
                    <td className="py-2 px-4 border-b border-slate-200">
                      Telefon:
                    </td>
                    <td className="py-2 px-4 border-b border-slate-200 flex ">
                      {!isTelephoneInput ? (
                        <div className="w-full flex justify-between gap-2">
                          <p className="text-left">
                            {user["telephone"] ?? "Nincs megadva"}
                          </p>
                          <button
                            type="button"
                            onClick={() => setIsTelephoneInput(true)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-between gap-2">
                          <div className="">
                            <Input
                              id="telephone"
                              type="number"
                              placeholder="06301456789"
                              validators={[]}
                              onInput={inputHandler}
                              element="input"
                              valid={true}
                            />
                          </div>

                          <div className="flex gap-2">
                            <button
                              className="text-customGreen"
                              type="button"
                              onClick={() => addTelephoneHandler()}
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
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => setIsTelephoneInput(false)}
                              className="text-customRed"
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
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          <div className="flex flex-col gap-3 shadow-lg p-8 mt-8 text-left">
            <h2 className="text-lg font-bold mb-8 text-center">
              Jelsz?? v??ltoztat??s
            </h2>
            <Input
              id="newPassword"
              type="password"
              label="??j jelsz??"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(7)]}
              onInput={inputHandler}
              element="input"
            />
            <Input
              id="oldPassword"
              type="password"
              label="R??gi jelsz??"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(7)]}
              onInput={inputHandler}
              element="input"
            />
            <button
              className="bg-customBlue text-white font-bold p-3 rounded-md"
              type="button"
              onClick={() => changePasswordHandler()}
            >
              Ment??s
            </button>
          </div>
          <div className="flex flex-col gap-3 shadow-lg p-8 mt-8 text-left">
            <h2 className="text-lg font-bold mb-8 text-center">
              Profil t??rl??se
            </h2>
            <button
              className="bg-customRed font-bold text-white text-md p-3 rounded-md"
              type="button"
              onClick={() => alertHandler()}
            >
              T??rl??s
            </button>
            <p className="pt-4">
              A profil t??rl??s??vel az ??sszes adatod, bele??rtve a felt??lt??tt
              hirdet??seid, t??r??lve lesznek!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
