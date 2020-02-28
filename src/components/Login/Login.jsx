import React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/formControls/formControls.js";
import { required } from "../../utils/validators/validators.js";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../common/formControls/FormControls.module.scss";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password"
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me"
      )}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("Symbols from image", "captcha", [required], Input)}

      {error && <div className={classes["form-summary-error"]}>{error}</div>}
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    login(email, password, rememberMe, captcha);
  };

  if (isAuth) return <Redirect to={"/profile"} />;
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { login })(Login);
