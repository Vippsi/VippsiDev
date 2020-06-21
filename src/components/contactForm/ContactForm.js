import React, { useState } from "react";
import {
  TextField,
  FormGroup,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import emailjs from "emailjs-com";

const useStyles = makeStyles({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#F0C808 !important",
  },
  notchedOutline2: {
    borderWidth: "1px",
    borderColor: "#0892A5 !important ",
  },
  input: {
    color: "white",
  },
});

export const ContactForm = (props) => {
  const initialValues = {
    message_html: "",
    name: "",
    email: "",
  };

  const [form, setForm] = useState(initialValues);

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = "template_aFNUvY3s";

    const variables = {
      message_html: form.message_html,
      name: form.name,
      email: form.email,
    };

    emailjs
      .sendForm(
        "gmail",
        templateId,
        e.target,
        "user_M3JoI2zjgrWxrLIIHN191",
        variables
      )
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  const sendForm = (templateId, variables) => {};
  const classes = useStyles();

  return (
    <div className="contactForm-container">
      <h3>Contact Me</h3>
      <div className="dash">&mdash;</div>
      <div className="form-container-div">
        <form onSubmit={handleSubmit}>
          <div className="textField-div">
            <TextField
              label="Name"
              InputLabelProps={{
                style: { color: "white", fontSize: "1.4rem" },
              }}
              placeholder="Please enter your name"
              className="textInputBox"
              InputProps={{
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline2,
                },
              }}
              variant="outlined"
              onChange={handleChanges}
              value={form.name}
              name="name"
            />

            <TextField
              label="Email"
              InputLabelProps={{
                style: { color: "white", fontSize: "1.4rem" },
              }}
              placeholder="Please enter your email"
              className="textInputBox"
              InputProps={{
                classes: {
                  input: classes.input,
                  notchedOutline: classes.notchedOutline2,
                },
              }}
              variant="outlined"
              onChange={handleChanges}
              value={form.email}
              name="email"
            />
          </div>

          {/* <InputLabel children='Message' ></InputLabel> */}
          <TextField
            label="Message"
            InputLabelProps={{ style: { color: "white", fontSize: "1.2rem" } }}
            InputProps={{
              classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline,
              },
            }}
            className="textInputBox messageInputBox"
            variant="outlined"
            multiline
            rows={8}
            placeholder="Please enter your message"
            onChange={handleChanges}
            value={form.feedback}
            name="message_html"
          />
          <button>Click me</button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
