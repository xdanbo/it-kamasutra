import React, { useState } from "react";
import classes from "./ProfileInfo.module.scss";
import Loader from "../../Loader/Loader.jsx";
import userPhoto from "../../../assets/images/user.jpeg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  userProfile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!userProfile) {
    return <Loader />;
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    saveProfile(formData).then(() => setEditMode(false));
  };

  return (
    <div className={classes["description-block"]}>
      <div className={classes["photo-w"]}>
        <img
          src={userProfile.photos.large || userPhoto}
          alt=""
          className={classes["photo-i"]}
        />
      </div>
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      {editMode ? (
        <ProfileDataForm
          initialValues={userProfile}
          userProfile={userProfile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          goToEditMode={() => {
            setEditMode(true);
          }}
          userProfile={userProfile}
          isOwner={isOwner}
        />
      )}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

const ProfileData = ({ userProfile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Full name:</b> {userProfile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {userProfile.lookingForAJob ? "yes" : "no"}
      </div>
      {userProfile.lookingForAJob && (
        <div>
          <b>My professional skills:</b>
          {userProfile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b> {userProfile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(userProfile.contacts).map(key => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={userProfile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}:</b> {contactValue}
    </div>
  );
};

export default ProfileInfo;
