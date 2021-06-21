import React, { Component } from "react";
import axios from "axios";

class HandleSearchP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fullname: "",
      phone: "",
      email: "",
      rating: "",
      feedback: "",
      msg: "",
      obj: {},
      status: null,
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://localhost:44359/api/PortalEfficiencies/" + this.props.id
    );
    this.setState({ obj: response.data, gender: response.data.gender });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async () => {
    await axios.put(
      "https://localhost:44359/api/PortalEfficiencies/" + this.props.id,
      {
        id: this.props.id,
        fullname: this.state.fullname,
        age: this.state.age,
        gender: this.state.gender,
        phone: this.state.phone,
        address: this.state.address,
        aadhar: this.state.aadhar,
      }
    );
  };

  render() {
    return (
      <>
        <div>{this.state.msg}</div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              name="name"
              className="form-control"
              placeholder={this.state.obj.fullname}
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
              placeholder={this.state.obj.phone}
              style={{ width: 400 }}
              required
            />
            <br />
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={this.handleChange}
              placeholder={this.state.obj.email}
              style={{ width: 400 }}
              required
            />
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
              {"  "}
              1
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
              {"  "}
              2
            </label><label>
              {" "}
              <input
                type="radio"
                value="Average"
                name="rating"
                checked={this.state.rating === "Average"}
                onChange={this.handleChange}
                required
              />
              {"  "}
              3
            </label><label>
              {" "}
              <input
                type="radio"
                value="Good"
                name="rating"
                checked={this.state.rating === "Good"}
                onChange={this.handleChange}
                required
              />
              {"  "}
              4
            </label><label>
              {" "}
              <input
                type="radio"
                value="Very Good"
                name="rating"
                checked={this.state.rating === "Very Good"}
                onChange={this.handleChange}
                required
              />
              {"  "}
              5
            </label>
            <input
              type="text"
              name="feedback"
              className="form-control"
              onChange={this.handleChange}
              placeholder={this.state.obj.feedback}
              style={{ width: 400 }}
              required
            />
            <br />

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

export default HandleSearchP;
