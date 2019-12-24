import React from "react";
import ReactDOM from "react-dom";
import SamuraiJSApp from "./App.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
