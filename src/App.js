import React from "react";
import { useEffect, useState } from "react";
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Project from './components/projects/Project'
import CardGroup from './components/carousel/CardGroup'
import ContactForm from './components/contactForm/ContactForm'

function App() {
  return (
    <div>
      <div>
      <Header />
      </div>
      <div>
      <Body />
      </div>
      <div>
        <CardGroup/>
      </div>
      <div>
        <ContactForm/>
      </div>
      
    </div>
  );
}

export default App;
