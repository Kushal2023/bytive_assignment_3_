import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateUsers } from "../redux/apiCalls";
import "./modal.css";

const Modal = ({ closeModal, user }) => {
  const [userInfo, setUserInfo] = useState(user);
  const [formError, setFormError] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useDispatch();

  const changeUserInfo = async () => {
    if (Object.keys(formError).length === 0) {
      setIsUpdating(true);
      UpdateUsers(dispatch, user._id, userInfo);
      setIsUpdating(false);
      closeModal(false);
    }
  };

  const handleChange = (e) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const errors = {};
    if (!userInfo.name) {
      errors.name = "Name is required";
    }

    if (!userInfo.email) {
      errors.email = "Email is required";
    }

    if (!userInfo.phone) {
      errors.phone = "Phone is required";
    }

    if (!userInfo.website) {
      errors.website = "Website is required";
    }

    setFormError(errors);
  }, [userInfo]);

  return (
    <div className="modal-background">
      <div className="modalContainer">
        <div className="modalHeader">
          <h5>Basic Modal</h5>
          <button onClick={() => closeModal(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modalContent">
          <form className="form">
            <div className="name-input">
              <label>Name:</label>
              <div className="input">
                <input
                  type="text"
                  className="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  style={formError.name && { borderColor: "red" }}
                />
                <p>{formError.name}</p>
              </div>
            </div>

            <div className="email-input">
              <label>Email:</label>
              <div className="input">
                <input
                  type="text"
                  className="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  style={formError.email && { borderColor: "red" }}
                />
                <p>{formError.email}</p>
              </div>
            </div>

            <div className="phone-input">
              <label>Phone:</label>
              <div className="input">
                <input
                  type="text"
                  className="phone"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                  style={formError.phone && { borderColor: "red" }}
                />
                <p>{formError.phone}</p>
              </div>
            </div>

            <div className="website-input">
              <label>Website:</label>
              <div className="input">
                <input
                  type="text"
                  className="website"
                  name="website"
                  value={userInfo.website}
                  onChange={handleChange}
                  style={formError.website && { borderColor: "red" }}
                />
                <p>{formError.website}</p>
              </div>
            </div>
          </form>
        </div>
        <div className="modalFooter">
          <button className="cancelBtn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button className="okBtn" onClick={changeUserInfo}>
            {isUpdating ? "Updating.." : "OK"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
