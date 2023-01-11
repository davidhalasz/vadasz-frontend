import { createContext } from "react";

export const AlertContext = createContext({
    displayAlert: false,
    toggleAlertDisplay: () => {},
    okSubmit: () => {},
    changedDataHandler: () => {},
    changedData: false,
    changeCurrentProductId: () => {},
});