import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [children, setChildren] = useState([1, 9, 3]);

  const removeChild = (removedId) => {
    setChildren(children.filter((id) => id !== removedId));
  };

  return (
    <>
      <h2> Hi there.... </h2>
      {children.map((id) => (
        <Child key={id} id={id} remove={() => removeChild(id)} />
      ))}
    </>
  );
}

export default Parent;
