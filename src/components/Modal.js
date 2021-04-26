import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "antd";
import "../styles/style.css";
import UsingHooks from "../components/PaymentHook";
import useForm from "./useForm";
import validate from "./validationInfo";
import axios from "axios";

const GetEbook = styled.div`
  form {
    h2 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .form-group {
      margin-bottom: 25px;
      label {
        font-size: 14px;
        font-weight: 500;
      }
      input,
      textarea {
        font-size: 15px;
        ::placeholder {
          font-size: 13px;
        }
      }
    }
  }
`;

export const RegisterModal = ({ eBookType }) => {
  const initialValues = {
    fullName: "",
    email: "",
    eBookType,
  };
  //console.log(ebookType)
  const { handleChange, values, handleSubmit, errors } = useForm({
    validate,
    initialValues,
  });
  //Visible modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Get Now
      </Button>
      <Modal
        title="Register To Get Ebook"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="container-fluid">
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="form-control"
                type="text"
                name="fullName"
                placeholder="Fullname"
                value={values.fullName}
                onChange={(e) => handleChange(e)}
              />
              {errors.fullname && (
                <p style={{ color: "red", fontSize: "11px", fontWeight: 400 }}>
                  {errors.fullname}
                </p>
              )}
              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={(e) => handleChange(e)}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "11px", fontWeight: 400 }}>
                  {errors.email}
                </p>
              )}
              <br />
              <input
                className="form-control"
                type="text"
                name="eBookType"
                placeholder="Ebook Type"
                value={values.eBookType}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </Modal>
    </>
  );
};

export const GetEbookModal = (props) => {
  //Visible modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //State for each input form
  const url = "https://talcube-api.herokuapp.com/ebook/premium";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [classDuration, setDuration] = useState("");
  const [numberOfModules, setModule] = useState(props.module);
  const [targetAudience, setTargetAudience] = useState([]);
  const [packageType, setPackageType] = useState(props.packageType);
  const [totalAmount, setTotalAmount] = useState([]);
  const premiumValues = {
    fullName,
    email,
    numberOfModules,
    targetAudience,
    description,
    classDuration,
    packageType,
    totalAmount
  }

  const isChecked = (value) => targetAudience.find(item => item === value);
  
  const handleTargetAudience = (value) => {
      let aud = [ ...targetAudience ]
      const index = aud.findIndex((item) => item === value);
      if(index > -1){
        const newArr = aud.filter((item) => item !== value);
        setTargetAudience(newArr);
        return;
      }
      aud.push(value);
      setTargetAudience(aud)

  }

    const submit = e => {
      e.preventDefault()
      axios.post(url,{
        ...premiumValues
      })
      .then(res => {
         console.log(res.data)
      })
  }

  // function handle(e) {

  //   const newData = { ...data }
  //    newData[e.target.name] = e.target.value
  //    //setData({...newData})
  //    console.log(newData)
  // }

  return (
    <>
      <a type="primary" onClick={showModal}>
        Start Free Trial
      </a>
      <Modal
        title="Register To Get Service"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="container-fluid">
          <GetEbook>
            <form onSubmit={(e) =>submit(e)}>
              <h2>Total Price: ${props.totalPrice}</h2>
              <div className="form-group">
                <label for="exampleInputFullName1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputFullName1"
                  aria-describedby="fullnameHelp"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label>Number of Module</label>
                <select
                  className="form-control"
                  value={`${props.module}`}
                  onChange={(e) => setModule(parseInt(e.target.value))}
                  disabled
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="form-group">
                <label class="form-check-label" for="defaultCheck1">
                  Target Audience
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="Adult"
                    id="defaultCheck1"
                    checked = {Boolean(isChecked("Adult"))}
                    onChange={(e) => handleTargetAudience(e.target.value)}
                    
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Adult
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="Youth"
                    id="defaultCheck1"
                    checked = {Boolean(isChecked("Youth"))}
                    onChange={(e) => handleTargetAudience(e.target.value)}
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Youth
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="Children"
                    id="defaultCheck1"
                    checked = {Boolean(isChecked("Children"))}
                    onChange={(e) => handleTargetAudience(e.target.value)}
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Children
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label class="form-check-label" for="exampleCheck1">
                  A Brief Description Of Your Course
                </label>
                <textarea
                  className="form-control"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label for="exampleInputClassDuration1">Class Duration</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputClassDuration1"
                  aria-describedby="classdurationHelp"
                  placeholder="How long will be course take?"
                  onChange={(e) => setDuration(e.target.value)}
                  value={classDuration}
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleInputClassDuration1">Package Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPackageType1"
                  aria-describedby="packagetypeHelp"
                  onChange={(e) => setPackageType(e.target.value)}
                  value={`${props.packageType}`}
                  required
                  disabled
                />
              </div>
            </form>
            <UsingHooks
              details={{
                ...premiumValues,
                totalAmount: props.totalPrice,
              }}
            />
          </GetEbook>
        </div>
        <ToastContainer />
      </Modal>
    </>
  );
};
