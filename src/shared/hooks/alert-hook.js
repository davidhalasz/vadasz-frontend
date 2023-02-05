import axios from "axios";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../../features/productSlice";

export const useAlert = () => {
  const dispatch = useDispatch();
  const [displayAlert, setDisplayAlert] = useState(false);
  const [changedData, setChangedData] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");
  const [alertText, setAlertText] = useState("");
  const [type, setType] = useState("");
  const [uuid, setUuid] = useState("");

  const toggleAlertDisplay = useCallback(
    (txt, type) => {
      setAlertText(txt);
      setType(type);
      setDisplayAlert(!displayAlert);
    },
    [displayAlert]
  );

  const changeCurrentProductId = useCallback((id) => {
    setCurrentProduct(id);
  }, []);

  const changeCurrentUserId = useCallback((id) => {
    setUuid(id);
  }, []);

  const okSubmit = useCallback(async () => {
    try {
      if (type === "product") {
        const response = await axios.delete(
          `${process.env.REACT_APP_BACKEND_URL}/product/${currentProduct}`
        );
        dispatch(productActions.addMessageHandler({messageType: "success", message: response.data.msg}));
        setChangedData(true);
      }

      if (type === "profile") {
        await axios.delete(
          `${process.env.REACT_APP_BACKEND_URL}/user/delete-user/${uuid}`
        );
        setChangedData(true);
      }
    } catch (error) {
      if (error.response) {
        dispatch(productActions.addMessageHandler({messageType: "error", message: error.response.data.msg}));
      }
      setChangedData(false);
    }
    setDisplayAlert(!displayAlert);
  }, [dispatch, uuid, type, currentProduct, displayAlert]);

  const changedDataHandler = useCallback(() => {
    setChangedData(!changedData);
  }, [changedData]);

  return {
    alertText,
    toggleAlertDisplay,
    okSubmit,
    displayAlert,
    changedDataHandler,
    changedData,
    changeCurrentProductId,
    changeCurrentUserId,
  };
};
