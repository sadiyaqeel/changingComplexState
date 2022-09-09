import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(e) {
    const { name, value } = e.target;

    setContact((prevValue) => {
      if (name === "fName") {
        console.log(prevValue);
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          value={contact.fName}
          onChange={updateContact}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={contact.lName}
          onChange={updateContact}
          placeholder="Last Name"
        />
        <input
          name="email"
          value={contact.email}
          onChange={updateContact}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
