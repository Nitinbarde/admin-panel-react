import React, { useState } from "react";

const Err_Msg = "Age must be greater than 18";
function Error() {
  const [text, setText] = useState();
  const [isError, setError] = useState(false);

  const handleEvent = (e) => {
    setError(false);
    setText(e.target.value);

    if (e.target.value < 18) {
      setError(true);
    }
  };
  return (
    <div>
      Age:
      <input
        type="text"
        value={text}
        placeholder="Enter your age"
        onChange={handleEvent}
      />
      {isError ? Err_Msg : null}
    </div>
  );
}

export default Error;
