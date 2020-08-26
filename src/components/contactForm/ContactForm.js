import React, { useState, useEffect, useRef } from "react";
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
  const [nameShrinkState, setNameShrinkState] = useState(false);
  const [messageShrinkState, setMessageShrinkState] = useState(false);
  const [emailShrinkState, setEmailShrinkState] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [nameFocused, setNameFocus] = useState(false);
  const [emailFocused, setEmailFocus] = useState(false);
  const [messageFocused, setMessageFocus] = useState(false);

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (form.name.length > 0) {
      setNameShrinkState(true);
    } else {
      setNameShrinkState(false);
    }

    if (form.message_html.length > 0) {
      setMessageShrinkState(true);
    } else {
      setMessageShrinkState(false);
    }

    if (form.email.length > 0) {
      setEmailShrinkState(true);
    } else {
      setEmailShrinkState(false);
    }
  }, [form]);

  const handleNameBlur = () => {
    setNameFocus(false);
  };
  const handleEmailBlur = () => {
    setEmailFocus(false);
  };
  const handleMessageBlur = () => {
    setMessageFocus(false);
  };

  const checkIfNameFocused = (e) => {
    const name = e.target.name;
    if (name === "name") {
      setNameFocus(true);
    } else setNameFocus(false);
  };
  const checkIfEmailFocused = (e) => {
    const name = e.target.name;
    if (name === "email") {
      setEmailFocus(true);
    } else setEmailFocus(false);
  };
  const checkIfMessageFocused = (e) => {
    const name = e.target.name;
    if (name === "message_html") {
      setMessageFocus(true);
    } else setMessageFocus(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = "vippsi_dev";

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
        console.log(res, "Email successfully sent!");
        setSuccessMessage(true);
        console.log("setting true");
        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);
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
      {successMessage && <div>Your message was sent!</div>}
      <div className="dash">&mdash;</div>
      <div className="form-container-div">
        <form onSubmit={handleSubmit}>
          <div className="textField-div">
            <TextField
              onFocus={checkIfNameFocused}
              onBlur={handleNameBlur}
              label="Name"
              InputLabelProps={
                nameShrinkState || nameFocused
                  ? {
                      shrink: true,
                      style: {
                        color: "white",
                        fontSize: "1.5rem",
                      },
                    }
                  : {
                      shrink: false,
                      style: {
                        color: "white",
                        fontSize: "1.5rem",
                      },
                    }
              }
              // placeholder="Please enter your name"
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
              onFocus={checkIfEmailFocused}
              onBlur={handleEmailBlur}
              InputLabelProps={
                emailShrinkState || emailFocused
                  ? {
                      shrink: true,
                      style: {
                        color: "white",
                        fontSize: "1.5rem",
                      },
                    }
                  : {
                      shrink: false,
                      style: {
                        color: "white",
                        fontSize: "1.5rem",
                      },
                    }
              }
              // placeholder="Please enter your email"
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
            onFocus={checkIfMessageFocused}
            onBlur={handleMessageBlur}
            InputLabelProps={
              messageShrinkState || messageFocused
                ? {
                    shrink: true,
                    style: {
                      color: "white",
                      fontSize: "1.5rem",
                    },
                  }
                : {
                    shrink: false,
                    style: {
                      color: "white",
                      fontSize: "1.5rem",
                    },
                  }
            }
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
            // placeholder="Please enter your message"
            onChange={handleChanges}
            value={form.message_html}
            name="message_html"
          />
          <button className="formButton">Click me</button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
