import axios from "axios";
import { useCallback, useState } from "react";

export const useAlert = () => {
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
        await axios.delete(
          `${process.env.REACT_APP_BACKEND_URL}/product/${currentProduct}`
        );
        setChangedData(true);
      }

      if (type === "profile") {
        await axios.delete(
          `${process.env.REACT_APP_BACKEND_URL}/user/delete-user/${uuid}`
        );
        setChangedData(true);
      }
    } catch (error) {
      setChangedData(false);
    }
    setDisplayAlert(!displayAlert);
  }, [uuid, type, currentProduct, displayAlert]);

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
