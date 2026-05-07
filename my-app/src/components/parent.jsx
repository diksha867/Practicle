import React from "react";
import child from "/.child";

function app() {
  const name = diksha;
  const age = 18;
  return (
    <>
      <div>
        <p>parent component</p>
        <child name={name} age={age} />
      </div>
    </>
  );
}

export default parent;
