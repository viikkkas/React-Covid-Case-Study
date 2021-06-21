import React, { Component } from "react";
import axios from "axios";

import HandleSearchF from "./HandleSearchF";

class UpdateSearchFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fullname: "",
      phone: "",
      vaccine: "",
      rating: "",
      feedback: "",
      msg: "",
      obj: {},
      gotdata: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:44390/api/VaccineFeedbacks/" + this.state.id
      );

      console.log(response.data);
      this.setState({ obj: response.data });
      this.setState({ vaccine: response.data.vaccine, gotdata: true });
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async () => {
    await axios.put(
      "https://localhost:44390/api/VaccineFeedbacks/" + this.state.id,
      {
        id: this.state.id,
        fullname: this.state.fullname,
        phone: this.state.phone,
        vaccine: this.state.vaccine,
        rating: this.state.rating,
        feedback: this.state.feedback,
      }
    );
  };

  handleButton = () => {
    this.setState({ gotdata: true });
  };

  render() {
    const renderData = () => {
      if (this.state.gotdata === true)
        return <HandleSearchF id={this.state.id} />;
    };

    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <input
            type="number"
            placeholder="Enter ID of the record"
            name="id"
            className="form-control"
            style={{ width: 250 }}
            onChange={this.handleChange}
            required
          />
          <input
            type="button"
            className="btn btn-secondary"
            value="Search"
            onClick={this.handleButton}
          />
        </div>
        <br />
        {renderData()}
      </>
    );
  }
}

export default UpdateSearchFeedback;
