/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";

import Grid from "@material-ui/core/Grid";
import data from "../assets/data/data.json";
import ContactForm from "../components/ContactLayout/ContactForm.js";

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      id:    -1
    };

  }

    showInfo = (id) => {
      this.props.history.push("project/" + data.cards[id - 1].title.toLowerCase());
    }

    render() {

      return (
        <div style={{
          padding: "10px", margin: "auto"
        }}>

          <Grid container spacing={2}>
            <Grid item xs={6} style={{
              justifyContent: "center", display: "flex"
            }}>
              <ContactForm />
            </Grid>
            <Grid item xs={6} style={{
              justifyContent: "center", display: "flex"
            }}>
              <ContactForm />
            </Grid>
          </Grid>


        </div>
      );

    }
}

export default ContactPage;