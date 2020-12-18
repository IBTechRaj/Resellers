import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import { createReseller } from "../actions";
import "./ResellerForm.css";
import LogoUpload from "./LogoUpload";

class kuk extends React.Component {
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
      <div className="container-fluid row bg-color W-100 reseller-form">
        <div>
          <h2> Add Reseller </h2>

          <h3> Detailst</h3>
        </div>
        <div className="books-form col-md-6 bg-white">
          {/* <div className="ab-title col-md-9"> ADD RESELLER </div> */}
          {/* <Form onSubmit={this.handleSubmit}> */}
          {/* <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group> */}

          {/*             
            <label className="justify-left w-100 px-5">
              {" "}
              RESELLER NAME *
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                // placeholder="Name"
              />
            </label>
            <label className="justify-left w-100 px-5">
              {" "}
              EMAIL ADDRESS *
              <input
                type="text"
                name="hdNumber"
                value={hdNumber}
                onChange={this.handleChange}
                // placeholder="HelpDeskNumber"
              />
            </label>
            <label className="justify-left w-100 px-5">
              {" "}
              TELEPHONE
              <input
                type="text"
                name="hdEmail"
                value={hdEmail}
                onChange={this.handleChange}
                // placeholder="HelpDeskEmail"
              />
            </label>
            <label className="justify-left w-100 px-5">LOGO</label>
            <LogoUpload /> */}
          <button type="submit" value="ADD RESELLER" className="add-reseller">
            Add Reseller{" "}
          </button>
          {/* </Form> */}
        </div>
        {/* </div> */}
      </div>
    );
  }
}

// BooksForm.propTypes = {
//   createBook: PropTypes.func.isRequired,
// };

export default connect(null, { createReseller })(kuk);
