import React from "react";
import Child from "./child"; 

function Parent() {
  const name = "diksha";
  const age = 18;
  return (
    <>
      <div>
        <p>parent component</p>
        <Child name={name} age={age} />
      </div>
    </>
  );
}

export default Parent;
