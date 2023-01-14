import axios from "axios";
import { useCallback, useState } from "react";

export const useAlert = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [changedData, setChangedData] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");

  const toggleAlertDisplay = useCallback(() => {
    setDisplayAlert(!displayAlert);
  }, [displayAlert]);

  const changeCurrentProductId = useCallback(
    (id) => {
      setCurrentProduct(id);
    },
    []
  );

  const okSubmit = useCallback(async () => {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/product/${currentProduct}`
    );
    setChangedData(true);
    setDisplayAlert(!displayAlert);
  }, [currentProduct, displayAlert]);

  const changedDataHandler = useCallback(() => {
    setChangedData(!changedData);
  }, [changedData]);

  return {
    toggleAlertDisplay,
    okSubmit,
    displayAlert,
    changedDataHandler,
    changedData,
    changeCurrentProductId,
  };
};
