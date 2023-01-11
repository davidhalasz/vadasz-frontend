import { useEffect } from "react";
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
import './Home.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.auth);
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
    toggleAlertDisplay,
    okSubmit,
    displayAlert,
    changedData,
    changedDataHandler,
    changeCurrentProductId,
  } = useAlert();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

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
          displayAlert: displayAlert,
          toggleAlertDisplay: toggleAlertDisplay,
          okSubmit: okSubmit,
          changedData: changedData,
          changedDataHandler: changedDataHandler,
          changeCurrentProductId: changeCurrentProductId,
        }}
      >
        <div className="grid grid-cols-6 h-screen w-full">
          <Sidebar />
          <div className="h-full w-full col-span-5 bg-white scrollhost_container">
            <Outlet />
          </div>
          {display && <ImageViewer />}
          {displayAlert && <AlertView />}
        </div>
      </AlertContext.Provider>
    </ImageViewerContext.Provider>
  );
};

export default Dashboard;
