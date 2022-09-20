import React, { useState } from "react";

function Spread() {
  const [information, setInformation] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInformation(prevValue => {
      return{ 
        ...prevValue,
       [name]:value
        
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hi <br/>{information.fName} <br/>{information.lName}
      </h1>
      <p>{information.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={information.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={information.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={information.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Spread;