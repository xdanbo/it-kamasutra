import React, { lazy, Suspense } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login.jsx";
import { Route } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { Redirect, Switch, withRouter } from "react-router";
import { compose } from "redux";
import Loader from "./components/Loader/Loader.jsx";

import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { withSuspense } from "./hoc/withSuspense";

//import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {};

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }

    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="*" render={() => <div>404 not found</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
