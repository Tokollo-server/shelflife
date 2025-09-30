import React, { useContext } from "react";
import { MyContext } from "./MyContext";
export default function ChildOne() {
  const value = useContext(MyContext); //Import the context object
  let [sharedData, setSharedData] = value; //Destructure the context objects
  return (
    <div>
      <h1>{sharedData}</h1>
    </div>
  );
}
