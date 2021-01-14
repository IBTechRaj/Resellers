import React from "react";
import { connect } from "react-redux";
// import axios from "axios";
// import PropTypes from 'prop-types';
import { updateReseller } from "../actions";
import "./ResellerForm.css";
import LogoUpload from "./LogoUpload";

import history from "../history";

class EditReseller extends React.Component {
  constructor(props) {
    super();
    console.log("propu", props.history.location.state.reseller);
    // const { reseller } = props.history.location.state.reseller;

    // console.log("re", reseller);
    this.state = { id: "", name: "", hdNumber: "", hdEmail: "", logo: "" };
    // const { name, hdNumber, hdEmail, logo } = this.props.location.state;
  }
  // componentDidMount() {
  //   axios
  //     .get(
  //       "http://localhost:3000/get-document-by-id?id=" +
  //         this.props.match.params.id
  //     )
  //     .then(response => {
  //       this.setState({
  //         name: response.data.document_title,
  //         hdNumber: response.data.hdNumber,
  //         hdEmail: response.data.hdEmail,
  //         logo: response.data.logo
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  componentDidMount() {
    this.setState({
      id: this.props.history.location.state.reseller.id,
      name: this.props.history.location.state.reseller.name,
      hdNumber: this.props.history.location.state.reseller.hdNumber,
      hdEmail: this.props.history.location.state.reseller.hdEmail,
      logo: this.props.history.location.state.reseller.logo
    });
  }
  //   console.log("re", reseller);
  // }
  // }

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
    const { id, name, hdNumber, hdEmail, logo } = this.state;
    const { updateReseller } = this.props;

    if (id && name && hdNumber && hdEmail && logo) {
      updateReseller(id, name, hdNumber, hdEmail, logo);
      // this.setState({
      //   name: "",
      //   hdNumber: "",
      //   hdEmail: "",
      //   logo: ""
      // });
      this.redirect();
    }
  };
  redirect = () => {
    history.push("/ResellersList");
  };

  render() {
    return (
      <div className="container-fluid row bg-white W-100 reseller-form justify-content-center my-0">
        <div className=" col-md-6 bg-white my-0 justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <label className="justify-left w-100 my-1">
              <h2>Edit Reseller</h2>
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
            <button
              type="submit"
              value="UPDATE RESELLER"
              className="add-reseller"
            >
              Update Reseller{" "}
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

// export default EditReseller;
export default connect(null, { updateReseller })(EditReseller);
