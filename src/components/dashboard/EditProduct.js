import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImageUpload from "../../shared/FormElements/ImageUpload";
import Input from "../../shared/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";

const activeImg = "grayscale object-cover object-center w-full h-full"
const deactivateImg = "object-cover object-center w-full h-full"

const deleteBtn = "w-full bg-customRed text-white";
const undeleteBtn = "w-full bg-customBlue text-white";


const EditProduct = (props) => {
  let location = useLocation();
  const prod = location.state.product;
  let prodImages = [];
  if (prod.images) {
    prodImages = prod.images.split(", ");
  }
  const navigate = useNavigate();
  const fileReader = new FileReader();
  const [savedImages, setSavedImages] = useState(prodImages);
  const [deletedImages, setDeletedImages] = useState([]);
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [msg, setMsg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [selectedValue, setSelectedValue] = useState(prod.category);
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
    },
    false
  );

  const handleFileRead = (e) => {
    const content = fileReader.result;
    const urls = [...previewUrls];
    urls.push(content);
    setPreviewUrls(urls);
  };

  fileReader.addEventListener("load", handleFileRead);

  const imageHandler = (file) => {
    const uploaded = [...images];
    uploaded.push(file);
    setImages(uploaded);
    setSelectedFile(file);
    setNewImages([...newImages, false]);
  };

  useEffect(() => {
    if (images.length !== previewUrls.length) {
      fileReader.readAsDataURL(selectedFile);
    }
  }, [selectedFile, images, previewUrls]);

  const submitFormHandler = async (event) => {
    event.preventDefault();
    const desc = formState.inputs.desc.value;
    const title = formState.inputs.title.value;
    const price = formState.inputs.price.value;
   
    const formData = new FormData();
    images.forEach((image, index) => {
      if(newImages[index] === false) {
        formData.append('files', image);
      }
    });
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('price', price);
    formData.append('category', selectedValue);
    formData.append('deletedImages', deletedImages.join(', '));
  
    try {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/product/${prod.uuid}`, formData);
      navigate('/kezelofelulet/feltoltott-hirdetesek');
    } catch (error) {
        if(error.response) {
          setMsg(error.response.data.msg);
          console.log(error.response.data.msg);
        }
    }
  };

  const handleChangeSelectedValue = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSavedImages = (img) => {
    let index = deletedImages.indexOf(img);
    if(index === -1) {
      setDeletedImages([...deletedImages, img]);
    } else {
      let filteredImages = deletedImages.filter((el) => el !== img);
      setDeletedImages([...filteredImages]);
    }
  };

  const handleNewImages = (index) => {
   
    setNewImages(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }

  return (
    <Fragment>
      <div className="w-full text-center p-4 text-customBlue font-bold text-2xl">
        <h1 className="text-customBlue">Hirdetés szerkesztése</h1>
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
                  value={prod.price}
                  valid={true}
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
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  errorText="Cím megadása kötelező"
                  onInput={inputHandler}
                  value={prod.title}
                  valid={true}
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
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  errorText="Leírás megadása kötelező"
                  onInput={inputHandler}
                  value={prod.desc}
                  valid={true}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-5 w-fit flex">
                <label
                  htmlFor="kiemelt"
                  className="font-medium text-base text-black block mb-3"
                >
                  Kiemelt hirdetés
                </label>
                <input
                  type="checkbox"
                  name="kiemelt"
                  value="1"
                  className="border-[1.5px] border-form-stroke ml-2 p-2 font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <p className="font-medium text-base text-black mb-3">Képek szerkesztése</p>
              <div className="flex flex-row gap-2">
              {savedImages && savedImages.map((el, index) => (
                  <div
                    key={index}
                    className="border border-mint w-24 h-24 shrink-0"
                  >
                    <img
                      className={ deletedImages.includes(el) ? activeImg : deactivateImg }
                      src={`${process.env.REACT_APP_ASSET_URL}/${el}`}
                      alt="public"
                    />
                    <button type="button" onClick={() => handleSavedImages(el)} className={ deletedImages.includes(el) ? undeleteBtn : deleteBtn }>
                      {deletedImages.includes(el) ? "Visszavonás" : "Törlés"}
                    </button>
                  </div>
                ))}
                {previewUrls.map((el, index) => (
                  <div
                    key={index}
                    className="border border-mint w-24 h-24 shrink-0"
                  >
                    <img
                      className={ newImages[index] ? activeImg : deactivateImg }
                      src={el}
                      alt="public"
                    />
                    <button type="button" onClick={() => handleNewImages(index)} className={ newImages[index] ? undeleteBtn : deleteBtn }>
                      {newImages[index] ? "Visszavonás" : "Törlés"}
                    </button>
                    <p className="text-customBlue">{newImages[index].toString()}</p>
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
                Változtatások mentése
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default EditProduct;
