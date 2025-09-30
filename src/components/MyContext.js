import React, { createContext, useState } from "react";
import App from "./App";
// Create the context
const MyContext = createContext();
function App() {
  // Your global state goes here
  const [sharedData, setSharedData] = useState("Hello, I am shared data!");
  return (
    // Pass the state and the setter function to the context
    <MyContext.Provider value={[sharedData, setSharedData]}>
      <App />
    </MyContext.Provider>
  );
}
export default App;
