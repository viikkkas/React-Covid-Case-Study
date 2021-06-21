import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errmsg: "",
      name: "",
      phone: "",
      vaccine: "",
      rating: "",
      feedback: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleValidate = () => {
    let msg = "";
    if (
      this.state.name === "" ||
      this.state.phone === "" ||
      this.state.vaccine === "" ||
      this.state.rating === "" ||
      this.state.feedback === ""
    )
      msg = (
        <p style={{ color: "red", fontStyle: "italic" }}>
          The above fields are mandatory.
        </p>
      );
    this.setState({ errmsg: msg });
    console.log(this.state);
  };

  handleSubmit = async (e) => {
    await axios
      .post("https://localhost:44390/api/VaccinationFeedbacks/", {
        fullname: this.state.name,
        phone: this.state.phone,
        vaccine: this.state.vaccine,
        rating: this.state.rating,
        feedback: this.state.feedback,
      })
      .then((response) => console.log(response));
  };

  render() {
    return (
      <>
        <div>
          <div>
            <NavLink to="/AllFeedbackRecords">
              <button className="btn btn-success">List all Feedbacks</button>
            </NavLink>{" "}
            <NavLink to="/DeleteFeedbackRecord">
              <button className="btn btn-success">Delete Feedback</button>
            </NavLink>
            <NavLink to="/UpdateFeedbackRecord">
              {" "}
              <button className="btn btn-success">Update Feedback</button>
            </NavLink>
          </div>
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              style={{ width: 400 }}
              onChange={this.handleChange}
              required
            />
            <br />
            <input
              type="number"
              name="phone"
              className="form-control"
              onChange={this.handleChange}
              placeholder="Phone number"
              style={{ width: 400 }}
              required
            />
            <br />
            <p>Select type of vaccine:</p>
            <label>
              {" "}
              <input
                type="radio"
                value="Covaxin"
                name="vaccine"
                checked={this.state.vaccine === "Covaxin"}
                onChange={this.handleChange}
                required
              />{" "}
              Covaxin{" "}
            </label>
            <label>
              {" "}
              <input
                type="radio"
                value="Covishield"
                name="vaccine"
                checked={this.state.vaccine === "Covishield"}
                onChange={this.handleChange}
                required
              />
              {"  "}
              Covishield
            </label>
            <br />
            <p>Ratings (1-Very Poor, 2-Poor, 3-Average, 4-Good, 5-Very Good)</p>
            <label>
              {" "}
              <input
                type="radio"
                value="Very Poor"
                name="rating"
                checked={this.state.rating === "Very Poor"}
                onChange={this.handleChange}
                required
              />
              {"  "}1
            </label>
            <label>
              {" "}
              <input
                type="radio"
                value="Poor"
                name="rating"
                checked={this.state.rating === "Poor"}
                onChange={this.handleChange}
                required
              />
              {"  "}2
            </label>
            <label>
              {" "}
              <input
                type="radio"
                value="Average"
                name="rating"
                checked={this.state.rating === "Average"}
                onChange={this.handleChange}
                required
              />
              {"  "}3
            </label>
            <label>
              {" "}
              <input
                type="radio"
                value="Good"
                name="rating"
                checked={this.state.rating === "Good"}
                onChange={this.handleChange}
                required
              />
              {"  "}4
            </label>
            <label>
              {" "}
              <input
                type="radio"
                value="Very Good"
                name="rating"
                checked={this.state.rating === "Very Good"}
                onChange={this.handleChange}
                required
              />
              {"  "}5
            </label>
            <input
              type="text"
              name="feedback"
              className="form-control"
              onChange={this.handleChange}
              placeholder="Feedback"
              style={{ width: 400 }}
              required
            />
            <br />

            <div>{this.state.errmsg}</div>
            <br />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default FeedbackForm;
