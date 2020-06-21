import React from "react";
import { TextField, FormGroup, InputLabel,withStyles } from "@material-ui/core";




export const ContactForm = (props) => {
    // const { classes } = props
  return (
    <div className="contactForm-container">
        
      <div className="form-container-div">
      <h3>Contact Me</h3>
        <form>
          <div className='textField-div'>
            <TextField
            label='Name'
            InputLabelProps={{ style: {color: 'white', fontSize:'1.4rem'}}} 
            placeholder="Please enter your name"
            className="textInputBox" 
            variant="outlined" />


            <TextField 
            label='Email'
            InputLabelProps={{ style: {color: 'white', fontSize:'1.4rem'}}} 
            placeholder="Please enter your email"
            className="textInputBox" 
            variant="outlined"
             />
          </div>

          {/* <InputLabel children='Message' ></InputLabel> */}
          <TextField
            label='Message'
            InputLabelProps={{ style: {color: 'white', fontSize:'1.4rem'}}}
            className="textInputBox messageInputBox"
            variant="outlined"
            multiline
            rows={8}
            placeholder="Please enter your message"
          />
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
