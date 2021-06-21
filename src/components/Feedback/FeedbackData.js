import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class FeedbackData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://localhost:44390/api/VaccinationFeedbacks"
    );
    this.setState({ items: response.data, loading: false });
  }

  handleDelete = async (event) => {
    await axios.delete(
      "https://localhost:44390/api/VaccineFeedbacks" + event.target.value
    );
    window.location.reload();
  };

  render() {
    const list = [];
    this.state.items.forEach((element) => {
      list.push(
        <tr>
          <td>{element.id}</td>
          <td>{element.fullname}</td>
          <td>{element.phone}</td>
          <td>{element.vaccine}</td>
          <td>{element.rating}</td>
          <td>{element.feedback}</td>

          <td>
            <button
              className="btn btn-danger"
              value={element.id}
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
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
          <h3>All Vaccine Feedback Records</h3>
        </div>
        <div>
          <table className="table">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone number</th>
              <th>Vaccine</th>
              <th>Rating</th>
              <th>Feedback</th>
            </tr>
            {this.state.loading ? <h2>Loading</h2> : list}
          </table>
        </div>
        <br />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <NavLink to="/UpdateFeedbackRecord">
            <button className="btn btn-success">Update Feedback</button>
          </NavLink>
        </div>
        <br />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <NavLink to="/FeedbackReg">
            <button className="btn btn-success">Add Another Feedback</button>
          </NavLink>
        </div>
      </>
    );
  }
}

export default FeedbackData;
