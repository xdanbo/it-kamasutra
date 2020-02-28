import React from "react";
import {
  createField,
  Input,
  Textarea
} from "../../common/formControls/formControls";
import { reduxForm } from "redux-form";
//import classes from "./ProfileInfo.module.scss";
import classes from "../../common/formControls/FormControls.module.scss";

const ProfileDataForm = ({ handleSubmit, userProfile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && <div className={classes["form-summary-error"]}>{error}</div>}
      <div>
        <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job:</b>{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills:</b>
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me:</b>
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(userProfile.contacts).map(key => {
          return (
            <div key={key} className={classes.contact}>
              <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
