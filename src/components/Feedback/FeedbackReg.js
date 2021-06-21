import React, { Component } from "react";
import FeedbackForm from "./FeedbackForm";

class FeedbackReg extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div className="d-flex justify-content-center">
          <h3>Vaccine Feedback</h3>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <FeedbackForm />
        </div>
      </>
    );
  }
}

export default FeedbackReg;
