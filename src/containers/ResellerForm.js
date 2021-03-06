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
    // this.state = {
    //   resellerInfo: { name: "", hdNumber: "", hdEmail: "", logo: "" }
    // this.getImage = this.getImage.bind(this);
  }

  // const[logo, setLogo] = useState ("" );

  // const getImage = logoImg => setLogo( logoImg );

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
    // this.setState({
    //   logo: this.logoImg
    // });
    const { name, hdNumber, hdEmail, logo } = this.state;
    const { createReseller } = this.props;

    if (name && hdNumber && hdEmail && logo) {
      createReseller(name, hdNumber, hdEmail, logo);
      this.setState({
        name: "",
        hdNumber: "",
        hdEmail: "",
        logo: ""
      });
      // this.redirect();
    }
  };
  redirect = () => {
    history.push("/ResellersList");
  };

  render() {
    return (
      <div className="container-fluid row bg-color W-100 reseller-form">
        <div>
          <h2> Add Reseller </h2>

          <h3> Detailse</h3>
        </div>
        <div className="reseller-form col-md-6 bg-white">
          <form onSubmit={this.handleSubmit}>
            <label className="justify-left w-100 px-5">
              {" "}
              RESELLER NAME *
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label className="justify-left w-100 px-5">
              {" "}
              TELEPHONE *
              <input
                type="text"
                name="hdNumber"
                value={this.state.hdNumber}
                onChange={this.handleChange}
              />
            </label>
            <label className="justify-left w-100 px-5">
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
      </div>
    );
  }
}

export default connect(null, { createReseller })(ResellerForm);
