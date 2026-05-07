import React from "react";
function Child({ name, age }) {
  return (
    <div>
      <h1>using props</h1>
      <p>child component</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Child;
