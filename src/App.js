import React, { useState } from "react";

import "./App.css";
import "./Register.js";
import Register from "./Register.js";
import List from "./List";
function App() {
  const [members, setMembers] = useState([]);

  console.log("members", members);
  return (
    <div className="App">
      <Register members={members} setMembers={setMembers} />
      <List members={members} />
    </div>
  );
}

export default App;
