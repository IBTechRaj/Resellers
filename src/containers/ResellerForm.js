import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import { createReseller } from "../actions";
import "./ResellerForm.css";
import LogoUpload from "./LogoUpload";

import history from "../history";

class ResellerForm extends React.Component {
  constructor() {
    super();
    this.state = { name: "", hdNumber: "", hdEmail: "", logo: "" };
  }

  getImage = logoImg => {
    console.log("loog", logoImg);

    this.setState(() => ({
      ...this.state,
      logo: logoImg
    }));

    console.log(this.state.logo);
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, hdNumber, hdEmail, logo } = this.state;
    const { createReseller } = this.props;

    if (name && hdNumber && hdEmail && logo) {
      createReseller(name, hdNumber, hdEmail, logo);
      // this.redirect();
    }
  };
  redirect = () => {
    history.replace("/ResellersList");
  };

  render() {
    return (
      <div className="container-fluid row bg-white W-100 reseller-form justify-content-center my-0">
        <div className=" col-md-6 bg-white my-0 justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <label className="justify-left w-100 my-1">
              <h2>Add Reseller</h2>
            </label>
            <label className="justify-left w-100 my-1">
              <h3>Details</h3>
            </label>

            <label className="justify-left w-100 px-3">
              {" "}
              RESELLER NAME *
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label className="justify-left w-100 px-3">
              {" "}
              TELEPHONE *
              <input
                type="text"
                name="hdNumber"
                value={this.state.hdNumber}
                onChange={this.handleChange}
              />
            </label>
            <label className="justify-left w-100 px-3">
              {" "}
              EMAIL
              <input
                type="text"
                name="hdEmail"
                value={this.state.hdEmail}
                onChange={this.handleChange}
              />
            </label>
            <label className="justify-left w-100 px-5">LOGO</label>
            <LogoUpload uploadImage={this.getImage} />
            <button type="submit" value="ADD RESELLER" className="add-reseller">
              Add Reseller{" "}
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default connect(null, { createReseller })(ResellerForm);
