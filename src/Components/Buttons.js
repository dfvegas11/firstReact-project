import React from "react";

const Buttons = (props) => {
  return (
    <div>
      <button className="btn btn-danger mb-3">{props.datos}</button>
    </div>
  );
};

export default Buttons;
