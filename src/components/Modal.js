import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "antd";
import  "../styles/style.css"
import UsingHooks from "../components/PaymentHook"
import useForm from "./useForm"
import validate from "./validationInfo"


const GetEbook = styled.div`
  form{
    h2{
      font-size:16px;
      font-weight:700;
      margin-bottom:15px;
    }
    .form-group{
      margin-bottom:25px;
      label{
        font-size:14px;
        font-weight:500;
      }
      input,textarea{
        font-size:15px;
        ::placeholder{
          font-size:13px;
        }
      }
      
    }
  }
`

export const RegisterModal = ({submitForm}) => {
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

  
const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate)
 
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
            <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="fullname"
              placeholder="Fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p style={{color:"red", fontSize:"11px", fontWeight:500}}>{errors.fullname}</p>}
            <br />
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{color:"red", fontSize:"11px", fontWeight:500}}>{errors.email}</p>}
            <br />
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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [module, setModule] = useState(1)

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
            <form>
            <h2>Total Price: ${props.totalPrice}</h2>
              <div className="form-group">
                <label for="exampleInputFullName1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputFullName1"
                  aria-describedby="fullnameHelp"
                  placeholder="Enter Full Name"
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label>Number of Module</label>
                <select className="form-control" value= {`${module}`} onChange={(e)=> setModule(parseInt(e.target.value))} disabled>
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
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Adult
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Youth
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
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
                  required
                />
              </div>
              
            </form>
            <UsingHooks details={{email,fullName,description,duration,totalAmount:props.totalPrice}} />
          
            </GetEbook>
        </div>
        <ToastContainer />
      </Modal>
    </>
  );
};
