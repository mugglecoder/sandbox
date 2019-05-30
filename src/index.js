import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = initialvalue => {
  const [value, setValue] = useState(initialvalue);
  const onChange = e => {
    console.log(e.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  console.log({ ...name });
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
