import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import { createReseller } from "../actions";
// import './ResellerForm.css';

// const CATEGORIES = [
//   'Action',
//   'Biography',
//   'History',
//   'Horror',
//   'Kids',
//   'Learning',
//   'Sci-Fi',
// ];

class ResellerForm extends React.Component {
  constructor() {
    super();
    this.state = { name: "", hdNumber: "", hdEmail: "" };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, hdNumber, hdEmail } = this.state;
    const { createReseller } = this.props;

    if (name && hdNumber && hdEmail) {
      createReseller(name, hdNumber, hdEmail);
      this.setState({
        name: "",
        hdNumber: "",
        hdEmail: ""
      });
    }
  };

  render() {
    const { name, hdNumber, hdEmail } = this.state;

    return (
      <div className="books-form">
        <div className="ab-title"> ADD RESELLER </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="hdNumber"
            value={hdNumber}
            onChange={this.handleChange}
            placeholder="HelpDeskNumber"
          />
          <input
            type="text"
            name="hdEmail"
            value={hdEmail}
            onChange={this.handleChange}
            placeholder="HelpDeskEmail"
          />

          <button type="submit" value="ADD RESELLER" className="add-reseller">
            Add Reseller{" "}
          </button>
        </form>
      </div>
    );
  }
}

// BooksForm.propTypes = {
//   createBook: PropTypes.func.isRequired,
// };

export default connect(null, { createReseller })(ResellerForm);
