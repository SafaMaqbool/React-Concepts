import React, { useState } from "react";

const HideShowToggle = () => {
  const [result, setResult] = useState(true);

  return (
    <div>
      <h1>Hide Show Toggle in React Js</h1>
      {result ? <h3>Hello</h3> : null}
      <button onClick={() => setResult(!result)}>Toggle</button>
    </div>
  );
};

export default HideShowToggle;
