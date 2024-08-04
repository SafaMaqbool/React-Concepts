import React, { useState } from "react";

function GetInputFieldValue() {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);

  function getValue(val) {
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div>
      {print ? <h2>{data}</h2> : null}
      <input type="text" onChange={getValue}></input>
      <button onClick={() => setPrint(true)}>Display</button>
    </div>
  );
}

export default GetInputFieldValue;
