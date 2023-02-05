import { useEffect, useReducer } from "react";

import { validate } from "../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isTouched: false,
        isValid: validate(action.val, action.vaidators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isTouched: false,
    isValid: props.valid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, onInput, value, isValid]);

  const changeHandler = (event) => {
    if (props.id === "price") {
      let value = event.target.value.replace(/[^0-9]/g, "");
      dispatch({
        type: "CHANGE",
        val: Number(value).toLocaleString(),
        vaidators: props.validators,
      });
    } else {
      dispatch({
        type: "CHANGE",
        val: event.target.value,
        vaidators: props.validators,
      });
    }
  };

  const touchHandler = () => {
    if (props.id !== "madeYear") {
      dispatch({
        type: "TOUCH",
      });
    }

    if(props.id === "madeYear" && inputState.value.trim().length > 0) {
      dispatch({
        type: "TOUCH",
      });
    }
  };

  const element =
    props.element === "input" ? (
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          !inputState.isValid && inputState.isTouched && "border-red-500"
        }`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={() => touchHandler()}
        value={inputState.value}
      />
    ) : (
      <textarea
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          !inputState.isValid && inputState.isTouched && "border-red-500"
        }`}
        id={props.id}
        rows={props.rows || 6}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div className="form-control">
      <label
        className="block text-customBlue text-sm font-bold mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <p className="text-red-500">{props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
