import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    This is jsx tag
  </h1>
);

const HeadingContainer = () => (
<div id="container">
  <Title/>
  <h1 className="heading">This is functional component</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingContainer/>);
