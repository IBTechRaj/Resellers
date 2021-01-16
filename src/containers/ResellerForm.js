import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import { createReseller } from "../actions";
import "./ResellerForm.css";
import LogoUpload from "./LogoUpload";

// import history from "../history";

const ResellerForm = props => {
  // constructor() {
  // super();
  // this.state = { name: "", hdNumber: "", hdEmail: "", logo: "" };
  // }
  let history = useHistory();
  const getImage = logoImg => {
    console.log("loog", logoImg);
    setValues({ ...values, logo: logoImg });
    // this.setState(() => ({
    //   ...this.state,
    //   logo: logoImg
    // }));
    // console.log(logo);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, hdNumber, hdEmail, logo } = values;
    const { createReseller } = props;

    if (name && hdNumber && hdEmail && logo) {
      createReseller(name, hdNumber, hdEmail, logo);
      redirect();
    }
  };
  const redirect = () => {
    history.push("/ResellersList");
  };

  const [values, setValues] = useState({
    name: "",
    hdNumber: "",
    hdEmail: "",
    logo: ""
  });
  // render() {
  return (
    <div className="container-fluid row bg-white W-100 reseller-form justify-content-center my-0">
      <div className=" col-md-6 bg-white my-0 justify-content-center">
        <form onSubmit={handleSubmit}>
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
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <label className="justify-left w-100 px-3">
            {" "}
            TELEPHONE *
            <input
              type="text"
              name="hdNumber"
              value={values.hdNumber}
              onChange={handleChange}
            />
          </label>
          <label className="justify-left w-100 px-3">
            {" "}
            EMAIL
            <input
              type="text"
              name="hdEmail"
              value={values.hdEmail}
              onChange={handleChange}
            />
          </label>
          <label className="justify-left w-100 px-5">LOGO</label>
          <LogoUpload uploadImage={getImage} />
          <button type="submit" value="ADD RESELLER" className="add-reseller">
            Add Reseller{" "}
          </button>
        </form>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
  // }
};

export default connect(null, { createReseller })(ResellerForm);
