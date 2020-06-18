import React from "react";
import { useEffect, useState } from "react";
import "./css/index.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  return (
    <div>
      <div>
      <Header />
      </div>
      <div>
      <Body />
      </div>
      
    </div>
  );
}

export default App;
