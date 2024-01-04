import React from "react";

const Child = ({ remove, id }) => {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={remove}>I'm the child {id}. Click to remove me!</button>
    </div>
  );
};

export default Child;
