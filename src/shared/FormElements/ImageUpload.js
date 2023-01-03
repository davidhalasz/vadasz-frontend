import { useEffect, useRef, useState } from "react";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(true);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    if (props.showPreview) {
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
    }
    fileReader.readAsDataURL(file);
  }, [file, props.showPreview]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files || event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(pickedFile);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const handleRemoveImage = () => {
    setFile();
    setPreviewUrl();
    props.onInput();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview w-full flex justify-center">
          {previewUrl && (
            <div className="w-24 h-24 relative">
              <button type="button" onClick={handleRemoveImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute -top-3 -right-3 w-7 h-7 bg-red-500 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              <button type="button" onClick={pickImageHandler}>
                <img
                  className="w-24 h-24 object-cover"
                  src={previewUrl}
                  alt="Preview"
                />
              </button>
            </div>
          )}
          {!previewUrl && (
            <button
              type="button"
              onClick={pickImageHandler}
              className="w-24 h-24 text-customBlue hover:text-mint border rounded-sm border-customBlue hover:border-mint flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {!isValid && <p>Nem megfelelo kepformatum</p>}
    </div>
  );
};

export default ImageUpload;
