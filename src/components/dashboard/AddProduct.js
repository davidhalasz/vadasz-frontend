import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../shared/FormElements/ImageUpload";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const AddProduct = () => {
  const navigate = useNavigate();
  const fileReader = new FileReader();
  const [images, setImages] = useState([]);
  const [msg, setMsg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [selectedValue, setSelectedValue] = useState("fegyverek");
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
      }
    },
    false
  );

  const handleFileRead = (e) => {
    const content = fileReader.result;
    const urls = [...previewUrls];
    urls.push({filePath: content, isDeleted: false});
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
  }

  const submitFormHandler = async (event) => {
    event.preventDefault();
    const desc = formState.inputs.desc.value;
    const title = formState.inputs.title.value;
    const price = formState.inputs.price.value;

    const formData = new FormData();
    images.forEach((image) => {
      if (image.isDeleted === false) {
        formData.append("files", image.file);
      }
    });
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("category", selectedValue);
    formData.append("featured", featured);

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/product`, formData);
      navigate("/kezelofelulet/feltoltott-hirdetesek");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(error.response.data.msg);
      }
    }
  };

  const handleChangeSelectedValue = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleDeleteImage = (index) => {
    setImages(prevState => {
      const newState = [...prevState];
      newState[index].isDeleted = true;
      return newState;
    });

    setPreviewUrls(prevState => {
      const newState = [...prevState];
      newState[index].isDeleted = true;
      return newState;
    });
  }


  return (
    <Fragment>
      <div className="w-full text-center p-4 text-customBlue font-bold text-2xl">
        <h1 className="text-customBlue">Új hirdetés hozzáadása</h1>
      </div>
      <div className="mx-auto w-10/12">
        {msg && <p>{msg}</p>}
        <form onSubmit={submitFormHandler}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
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
                    defaultValue={selectedValue}
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="category"
                    id="category"
                  >
                    <option value="fegyverek">Fegyverek</option>
                    <option value="lőszerek">Lőszerek</option>
                    <option value="optikák">Optikák</option>
                    <option value="öltözékek">Öltözékek</option>
                    <option value="vadászkutyák">Vadászkutyák</option>
                    <option value="járművek">Járművek</option>
                    <option value="szolgáltatások">Szolgáltatások</option>
                    <option value="kellékek">Kellékek</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-8">
                <Input
                  id="price"
                  type="number"
                  label="Ár"
                  placeholder="Ár"
                  element="input"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Ár megadása kötelező"
                  onInput={inputHandler}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-8">
                <Input
                  id="title"
                  type="text"
                  label="Cím"
                  placeholder="Cím"
                  element="input"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Cím megadása kötelező"
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
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Leírás megadása kötelező"
                  onInput={inputHandler}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-5 w-fit flex">
                <label
                  htmlFor="featured"
                  className="font-medium text-base text-black block mb-3"
                >
                  Kiemelt hirdetés
                </label>
                <input
                  type="checkbox"
                  name="featured"
                  checked={featured}
                  onChange={checkboxHandler}
                  className="border-[1.5px] border-form-stroke ml-2 p-2 font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <p className="font-medium text-base text-black mb-3">
                Képek hozzáadása
              </p>
              <div className="flex flex-row gap-2">
                {previewUrls.map((el, index) => (
                  el.isDeleted === false &&
                  <div
                    key={index}
                    className="relative border border-mint w-24 h-24 shrink-0"
                  >
                    <img
                      className="object-cover object-center w-full h-full"
                      src={el.filePath}
                      alt="public"
                    />
                    <button onClick={() => handleDeleteImage(index)} type="button" className="bg-customRed rounded-full text-white absolute -top-1 -right-1">
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
                  
                ))}
                <ImageUpload
                  id="image"
                  onInput={imageHandler}
                  showPreview={false}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-right">
              <button
                type="submit"
                className="px-4 bg-customBlue rounded-md text-white text-base px-5 py-2.5"
              >
                Feltöltés
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddProduct;
