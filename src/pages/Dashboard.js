import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import { getCurrentUser } from "../features/authSlice";
import { ImageViewerContext } from "../context/ImageViewerContext";
import { useViewer } from "../shared/hooks/viewer-hook";
import ImageViewer from "../components/ImageViewer";
import { useAlert } from "../shared/hooks/alert-hook";
import { AlertContext } from "../context/AlertContext";
import AlertView from "../shared/AlertView";
import "./Home.css";
import { productActions } from "../features/productSlice";
import { removeAuthMessageHandler } from "../features/authSlice";
import { CSSTransition } from "react-transition-group";
import "./productSnackbar.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const {
    user,
    isSuccessAuth,
    isErrorAuth,
    authMessage,
    isLoading,
    isSuccess,
  } = useSelector((state) => state.auth);
  const { isErrorProduct, isSuccessProduct, productMessage } = useSelector(
    (state) => state.products
  );

  const {
    display,
    currentImg,
    images,
    toggleDisplay,
    selectImage,
    nextImage,
    prevImage,
  } = useViewer();

  const {
    alertText,
    toggleAlertDisplay,
    okSubmit,
    displayAlert,
    changedData,
    changedDataHandler,
    changeCurrentProductId,
    changeCurrentUserId,
  } = useAlert();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading === false) {
      if (isSuccess === false) {
        if (!user) {
          navigate("/");
        }
      }
    }
  }, [user, navigate, isLoading, isSuccess]);

  useEffect(() => {
    if (isErrorProduct || isSuccessProduct) {
      const timer = setTimeout(() => {
        dispatch(productActions.removeMessageHandler());
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isErrorProduct, isSuccessProduct, dispatch]);

  useEffect(() => {
    if (isErrorAuth || isSuccessAuth) {
      const timer = setTimeout(() => {
        dispatch(removeAuthMessageHandler());
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isErrorAuth, isSuccessAuth, dispatch]);

  return (
    <ImageViewerContext.Provider
      value={{
        display: display,
        currentImg: currentImg,
        images: images,
        toggleDisplay: toggleDisplay,
        selectImage: selectImage,
        nextImage: nextImage,
        prevImage: prevImage,
      }}
    >
      <AlertContext.Provider
        value={{
          alertText: alertText,
          displayAlert: displayAlert,
          toggleAlertDisplay: toggleAlertDisplay,
          okSubmit: okSubmit,
          changedData: changedData,
          changedDataHandler: changedDataHandler,
          changeCurrentProductId: changeCurrentProductId,
          changeCurrentUserId: changeCurrentUserId,
        }}
      >
        <div className="flex flex-col md:grid md:grid-cols-12 h-screen w-full">
          <Sidebar user={user} />
          <div className="relative h-full w-full col-span-9 bg-white scrollhost_container">
            <Outlet />
            <CSSTransition
              in={
                isSuccessProduct ||
                isErrorProduct ||
                isSuccessAuth ||
                isErrorAuth
              }
              nodeRef={nodeRef}
              timeout={300}
              classNames="snackbar"
            >
              <div
                ref={nodeRef}
                className={`absolute flex gap-3 top-4 right-0 p-2  text-white font-bold rounded-md mr-4 
                ${(isErrorProduct || isErrorAuth) && "bg-customRed"} 
                ${(isSuccessProduct || isSuccessAuth) && "bg-customGreen"}`}
              >
                {(isSuccessProduct || isSuccessAuth) && (
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {(isErrorProduct || isErrorAuth) && (
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
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                )}
                {productMessage !== "" && <p>{productMessage}</p>}
                {authMessage !== "" && <p>{authMessage}</p>}
              </div>
            </CSSTransition>
          </div>
          {display && <ImageViewer />}
          {displayAlert && <AlertView />}
        </div>
      </AlertContext.Provider>
    </ImageViewerContext.Provider>
  );
};

export default Dashboard;
