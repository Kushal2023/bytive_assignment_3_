import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import { DeleteUsers, UpdateUsers } from "../redux/apiCalls";
import "./usercard.css";

const Usercard = ({ user }) => {
  const [openModal, setopenModal] = useState(false);
  const [favourite, setFavourite] = useState(user.isFavourite);
  const dispatch = useDispatch();

  const changeIsFavouriteStatus = () => {
    setFavourite((favourite) => !favourite);
    UpdateUsers(dispatch, user._id, {
      ...user,
      isFavourite: !user.isFavourite,
    });
  };

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
          alt="avatar"
        />
      </div>
      <div className="card-info">
        <h3>{user.name}</h3>
        <div className="email">
          <i className="fa-solid fa-envelope"></i>
          <p>{user.email}</p>
        </div>
        <div className="phone">
          <i className="fa-solid fa-phone-flip"></i>
          <p>{user.phone}</p>
        </div>
        <div className="website">
          <i className="fa-solid fa-globe"></i>
          <p>{user.website}</p>
        </div>
      </div>
      <ul className="card-options">
        <li>
          <button onClick={changeIsFavouriteStatus}>
            {!favourite ? (
              <i className="fa-regular fa-heart" style={{ color: "red" }}></i>
            ) : (
              <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
            )}
          </button>
        </li>
        <li>
          <button onClick={() => setopenModal(true)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </li>
        <li>
          <button onClick={() => DeleteUsers(dispatch, user._id)}>
            <i className="fa-sharp fa-solid fa-trash"></i>
          </button>
        </li>
      </ul>
      {openModal && <Modal closeModal={setopenModal} user={user} />}
    </div>
  );
};

export default Usercard;
