import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [fullName, setFullNme] = useState();
  const [lastName, setLastName] = useState("");
  const [lastnameNew, setlastNamenew] = useState();

  const input = (event) => {
    setName(event.target.value);
  };

  const inputTwo = (event) => {
    setLastName(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //it will not refresh
    setFullNme(name);
    setlastNamenew(lastName);
  };

  return (
    <>
      <h1>
        Hello {fullName} {lastnameNew}
      </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={input}
          value={name}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter your last Name"
          onChange={inputTwo}
          value={lastName}
        />
        <br />
        <br />
        <button>Click Me</button>
      </form>
    </>
  );
};
export default Form;
