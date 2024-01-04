import React, { useState } from "react";

const Test = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("name is:", name);
  console.log("email is:", email);
  console.log("password is:", password);

  //   const handleTextChange = (event) => {
  //     setValue(event.target.value);
  //   };
  //   const handleEmailChange = (event) => {
  //     setEmailValue(event.target.value);
  //   };
  //   const handlePassChange = (event) => {
  //     setPassValue(event.target.value);
  //   };

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default Test;
