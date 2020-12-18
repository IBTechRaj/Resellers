import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import { createReseller } from "../actions";
import "./ResellerForm.css";
import LogoUpload from "./LogoUpload";
import { useState } from "react";

import history from "../history";

const ResellerForm = () => {
  // constructor() {
  //   super();
  // }
  // this.state = { name: "", hdNumber: "", hdEmail: "", logo: "" };
  // this.state = {
  //   resellerInfo: { name: "", hdNumber: "", hdEmail: "", logo: "" }
  // this.getImage = this.getImage.bind(this);
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [hdNumber, setHdNumber] = useState("");
  const [hdEmail, setHdEmail] = useState("");

  const getImage = logoImg => setLogo(logoImg);

  // getImage = logoImg => {
  //   console.log("loog", logoImg);

  //   this.setState(() => ({
  //     logo: logoImg
  //   }));

  //   console.log(this.state.logo);
  // };
  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // this.setState({
    //   logo: this.logoImg
    // });
    // const { name, hdNumber, hdEmail, logo } = this.state;
    // const { createReseller } = this.props;
    console.log("n", "N", "e", "l", name, hdNumber, hdEmail, logo);
    if (name && hdNumber && hdEmail) {
      createReseller(name, hdNumber, hdEmail, logo);
      // this.setState({
      //   name: "",
      //   hdNumber: "",
      //   hdEmail: "",
      //   logo: ""
      // });
      // this.redirect();
    }
  };
  // const redirect = () => {
  //   history.push("/ResellersList");
  // };

  // render() {
  return (
    <div className="container-fluid row bg-color W-100 reseller-form">
      <div>
        <h2> Add Reseller </h2>

        <h3> Detailse</h3>
      </div>
      <div className="reseller-form col-md-6 bg-white">
        <form onSubmit={handleSubmit}>
          <label className="justify-left w-100 px-5">
            {" "}
            RESELLER NAME *
            <input
              type="text"
              // name="name"
              value={name}
              // onChange={this.handleChange}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label className="justify-left w-100 px-5">
            {" "}
            TELEPHONE *
            <input
              type="text"
              // name="hdNumber"
              value={hdNumber}
              onChange={e => setHdNumber(e.target.value)}
            />
          </label>
          <label className="justify-left w-100 px-5">
            {" "}
            EMAIL
            <input
              type="text"
              // name="hdEmail"
              value={hdEmail}
              onChange={e => setHdEmail(e.target.value)}
            />
          </label>
          <label className="justify-left w-100 px-5">LOGO</label>
          {/* <LogoUpload uploadImage={getImage} /> */}
          <button type="submit" value="ADD RESELLER" className="add-reseller">
            Add Reseller{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
// }

export default connect(null, { createReseller })(ResellerForm);
