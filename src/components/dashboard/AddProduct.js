import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../shared/FormElements/ImageUpload";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_YEAR,
} from "../../shared/util/validators";
import jsoncities from "../../shared/cities";
import { useDispatch } from "react-redux";
import { productActions } from "../../features/productSlice";

const CAT_FEGYVEREK = [
  "Golyós puska",
  "Sörétes puska",
  "Vegyescsövű puska",
  "Maroklőfegyver",
  "Egyéb fegyverek",
];
const CAT_OPTIKAK = ["Távcsövek", "Éjjellátó távcső", "Hőkamerák", "Vadkamera"];

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileReader = new FileReader();
  const [isValidForms, setIsValidForm] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      desc: {
        value: "",
        isValid: false,
      },
      madeYear: {
        value: "",
        isValid: true,
      },
    },
    false
  );

  const initSelectValue = {
    selectCity: {
      value: "",
      isTouched: false,
      isValid: false,
      errorMsg: "Hely kiválasztása kötelező!",
    },
    selectCondition: {
      value: "",
      isTouched: false,
      isValid: false,
      errorMsg: "Állapot kiválasztása kötelező!",
    },
    selectCategory: {
      value: "",
      isTouched: false,
      isValid: false,
      errorMsg: "Kategória kiválasztása kötelező!",
    },
  };

  const [selectForm, setSelectForm] = useState(initSelectValue);

  const handleFileRead = (e) => {
    const content = fileReader.result;
    const urls = [...previewUrls];
    urls.push({ filePath: content, isDeleted: false });
    setPreviewUrls(urls);
  };

  fileReader.addEventListener("load", handleFileRead);

  const imageHandler = (file) => {
    const uploaded = [...images];
    uploaded.push({ file: file, isDeleted: false });
    setImages(uploaded);
    setSelectedFile(file);
  };

  useEffect(() => {
    if (images.length !== previewUrls.length) {
      fileReader.readAsDataURL(selectedFile);
    }
  }, [selectedFile, images, previewUrls]);

  const checkboxHandler = () => {
    setFeatured(!featured);
  };

  const handleChangeSelectedValue = (e) => {
    setSelectForm((prevState) => ({
      ...prevState,
      [e.target.name]: {
        ...prevState[e.target.name],
        value: e.target.value,
        isValid: true,
      },
    }));
  };

  const handleSelectError = (e) => {
    setSelectForm((prevState) => ({
      ...prevState,
      [e.target.name]: {
        ...prevState[e.target.name],
        isTouched: true,
      },
    }));
  };

  const handleDeleteImage = (index) => {
    setImages((prevState) => {
      const newState = [...prevState];
      newState[index].isDeleted = true;
      return newState;
    });

    setPreviewUrls((prevState) => {
      const newState = [...prevState];
      newState[index].isDeleted = true;
      return newState;
    });
  };

  useEffect(() => {
    const checkValidation = () => {
      if (
        (selectForm.selectCategory.value === "Vadászkutyák" &&
          formState.isValid &&
          selectForm.selectCategory.isValid &&
          selectForm.selectCity.isValid) ||
        (formState.isValid &&
          selectForm.selectCategory.isValid &&
          selectForm.selectCity.isValid &&
          selectForm.selectCondition.isValid)
      ) {
        setIsValidForm(true);
      } else {
        setIsValidForm(false);
      }
    };
    checkValidation();
  }, [formState, selectForm, isValidForms]);

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const desc = formState.inputs.desc.value;
    const title = formState.inputs.title.value;
    const priceStr = formState.inputs.price.value;
    const price = parseInt(priceStr.replaceAll(/\s/g, ""));
    const madeYear = formState.inputs.madeYear.value;
    const city = jsoncities[parseInt(selectForm.selectCity.value)];
    let subCategory = "";
    let category = selectForm.selectCategory.value;

    if (CAT_FEGYVEREK.includes(category)) {
      subCategory = category;
      category = "Vadászfegyverek";
    }

    if (CAT_OPTIKAK.includes(category)) {
      subCategory = category;
      category = "Optikák";
    }

    const formData = new FormData();
    images.forEach((image) => {
      if (image.isDeleted === false) {
        formData.append("files", image.file);
      }
    });

    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("featured", featured);
    formData.append("condition", selectForm.selectCondition.value);
    formData.append("place", JSON.stringify(city));
    formData.append("madeYear", madeYear);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/product`,
        formData
      );
      dispatch(productActions.addMessageHandler({messageType: "success", message: response.data.msg}));
      navigate("/kezelofelulet/feltoltott-hirdetesek");
    } catch (error) {
      if (error.response) {
        dispatch(productActions.addMessageHandler({messageType: "error", message: error.response.data.msg}));
      }
    }
  };

  return (
    <Fragment>
      <div className="w-full text-center p-4 text-customBlue font-bold text-2xl">
        <h1 className="text-customBlue">Új hirdetés hozzáadása</h1>
      </div>
      <div className="mx-auto w-10/12">
        <form onSubmit={submitFormHandler}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4">
              <div className="mb-8">
                <div className="form-control">
                  <label
                    className="block text-customBlue text-sm font-bold mb-2"
                    htmlFor="category"
                  >
                    Kategória
                  </label>
                  <select
                    onChange={handleChangeSelectedValue}
                    defaultValue={selectForm.selectCategory.value}
                    className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      !selectForm.selectCategory.isValid &&
                      selectForm.selectCategory.isTouched &&
                      "border-red-500"
                    }`}
                    name="selectCategory"
                    id="selectCategory"
                    onBlur={handleSelectError}
                  >
                    <option disabled value="">
                      Válassz kategóriát
                    </option>
                    <optgroup label="Vadászegyverek">
                      <option value="Golyós puska">Golyós puska</option>
                      <option value="Sörétes puska">Sörétes puska</option>
                      <option value="Vegyescsövű puska">
                        Vegyescsövű puska
                      </option>
                      <option value="Maroklőfegyver">Maroklőfegyver</option>
                      <option value="Egyéb fegyverek">Egyéb fegyverek</option>
                    </optgroup>

                    <option value="Lőszerek">Lőszerek</option>
                    <optgroup label="Optikák">
                      <option value="Távcsövek">Távcsövek</option>
                      <option value="Éjjellátó távcső">Éjjellátó távcső</option>
                      <option value="Hőkamerák">Hőkamerák</option>
                      <option value="Vadkamera">Vadkamera</option>
                    </optgroup>
                    <option value="Ruházat">Ruházat</option>
                    <option value="Vadászkutyák">Vadászkutyák</option>
                    <option value="Járművek">Járművek</option>
                    <option value="Ingatlanok">Ingatlanok</option>
                    <option value="Kellékek">Kellékek</option>
                  </select>
                  {!selectForm.selectCategory.isValid &&
                    selectForm.selectCategory.isTouched && (
                      <p className="text-red-500">
                        {selectForm.selectCategory.errorMsg}
                      </p>
                    )}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4">
              <div className="mb-8">
                <Input
                  id="price"
                  type="text"
                  label="Ár"
                  placeholder="Ár"
                  element="input"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Ár megadása kötelező"
                  onInput={inputHandler}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4">
              <div className="mb-8">
                <Input
                  id="madeYear"
                  type="number"
                  label={`${
                    selectForm.selectCategory.value === "Vadászkutyák"
                      ? "Születés éve"
                      : "Gyártási év"
                  }`}
                  placeholder={`${
                    selectForm.selectCategory.value === "Vadászkutyák"
                      ? "Születés éve"
                      : "Gyártási év"
                  }`}
                  element="input"
                  validators={[VALIDATOR_YEAR()]}
                  onInput={inputHandler}
                  errorText="Nem valid évszám! 0 vagy 4 jegyű számjegyből kell állni!"
                  valid={formState.inputs.madeYear.isValid}
                />
              </div>
            </div>
            {selectForm.selectCategory.value !== "Vadászkutyák" && (
              <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                <div className="mb-8">
                  <div className="form-control">
                    <label
                      className="block text-customBlue text-sm font-bold mb-2"
                      htmlFor="selectCondition"
                    >
                      Állapot
                    </label>
                    <select
                      onChange={handleChangeSelectedValue}
                      defaultValue={selectForm.selectCondition.value}
                      className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        !selectForm.selectCondition.isValid &&
                        selectForm.selectCondition.isTouched &&
                        "border-red-500"
                      }`}
                      name="selectCondition"
                      id="selectCondition"
                      onBlur={handleSelectError}
                    >
                      <option disabled value="">
                        Válassz állapotot
                      </option>
                      <option value="új">Új</option>
                      <option value="használt">Használt</option>
                    </select>
                    {!selectForm.selectCondition.isValid &&
                      selectForm.selectCondition.isTouched && (
                        <p className="text-red-500">
                          {selectForm.selectCondition.errorMsg}
                        </p>
                      )}
                  </div>
                </div>
              </div>
            )}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4">
              <div className="mb-8">
                <div className="form-control">
                  <label
                    className="block text-customBlue text-sm font-bold mb-2"
                    htmlFor="selectCity"
                  >
                    Termék helye
                  </label>
                  <select
                    onChange={handleChangeSelectedValue}
                    defaultValue={selectForm.selectCity.value}
                    className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      !selectForm.selectCity.isValid &&
                      selectForm.selectCity.isTouched &&
                      "border-red-500"
                    }`}
                    name="selectCity"
                    id="selectCity"
                    onBlur={handleSelectError}
                  >
                    <option disabled value="">
                      Válaszd ki a települést
                    </option>
                    {jsoncities.map((city, index) => {
                      return (
                        <option key={index} value={index}>
                          {city.nev}
                        </option>
                      );
                    })}
                  </select>
                  {!selectForm.selectCity.isValid &&
                    selectForm.selectCity.isTouched && (
                      <p className="text-red-500">
                        {selectForm.selectCity.errorMsg}
                      </p>
                    )}
                </div>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-8">
                <Input
                  id="title"
                  type="text"
                  label="Termék neve"
                  placeholder="Termék neve"
                  element="input"
                  validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                  errorText="A termék nevének megadása kötelező és legalább 5 karakterből kell állnia!"
                  onInput={inputHandler}
                />
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8">
                <Input
                  id="desc"
                  type="text"
                  label="Leírás"
                  placeholder="Leírás"
                  element="textaera"
                  validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                  errorText="Leírás megadása kötelező és legalább 5 karakterből kell állnia!"
                  onInput={inputHandler}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-5 w-fit flex content-center justify-center">
                <label
                  htmlFor="featured"
                  className="font-medium text-base text-black inline-block inline-block"
                >
                  Kiemelt hirdetés
                </label>
                <input
                  type="checkbox"
                  name="featured"
                  checked={featured}
                  onChange={checkboxHandler}
                  className="border-[1.5px] border-form-stroke block ml-2 p-2 font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <p className="font-medium text-base text-black mb-3">
                Képek hozzáadása
              </p>
              <div className="flex flex-wrap gap-2 w-full">
                {previewUrls.map(
                  (el, index) =>
                    el.isDeleted === false && (
                      <div
                        key={index}
                        className="relative border border-mint w-24 h-24"
                      >
                        <img
                          className="object-cover object-center w-full h-full"
                          src={el.filePath}
                          alt="public"
                        />
                        <button
                          onClick={() => handleDeleteImage(index)}
                          type="button"
                          className="bg-customRed rounded-full text-white absolute -top-1 -right-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    )
                )}
                <ImageUpload
                  id="image"
                  onInput={imageHandler}
                  showPreview={false}
                />
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-12 text-right">
              {isValidForms ? (
                <button
                  type="submit"
                  className="px-4 bg-customBlue rounded-md text-white text-base px-5 py-2.5"
                >
                  Feltöltés
                </button>
              ) : (
                <button
                  disabled
                  className="px-4 bg-slate-200 rounded-md text-white text-base px-5 py-2.5"
                >
                  Feltöltés
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddProduct;
