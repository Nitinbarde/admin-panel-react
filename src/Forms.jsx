import React, { useState } from "react";

const Forms = () => {
  const [fullname, setFullName] = useState({
    fname:'',
    lname:''
  })


  const input = (event) => {
   console.log(event.target.value)

   const value=event.target.value;
  const  name=event.target.name;

  setFullName((preValue)=>{
    console.log(preValue)

    if(name === 'fname'){
        return{
            fname:value,
            lname:preValue.lname,
        }
    }else if(name === "lname"){
        return{
            fname:preValue.fname,
            lname:value,
        }
    }
  })


  };



  const onSubmit = (e) => {
    e.preventDefault(); //it will not refresh
    alert("hello Niittin")
   
  };

  return (
    <>
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          name="fname"
          onChange={input}
          value={fullname.fname}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter your last Name"
          onChange={input}
          name="lname"
          value={fullname.lname}
        />
        <br />
        <br />
        <button>Click Me</button>
      </form>
    </>
  );
};
export default Forms;
