import React, { useState, useLocation } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import { updateReseller } from "../actions";
import "./ResellerForm.css";
import LogoUpload from "./LogoUpload";

// import history from "../history";

const EditReseller = props => {
  let history = useHistory();
  // componentDidMount() {
  const [values, setValues] = useState({
    ...props.location.state.reseller
  });
  // }

  // const location = useLocation();
  // constructor(props) {
  //   super();
  //   console.log("propu", props.history.location.state.reseller);
  // const { reseller } = props.history.location.state.reseller;

  // this.state = { id: "", name: "", hdNumber: "", hdEmail: "", logo: "" };
  // const { name, hdNumber, hdEmail, logo } = this.props.location.state;
  // }

  // componentDidMount() {
  //   setState({
  //     id: props.history.location.state.reseller.id,
  //     name: props.history.location.state.reseller.name,
  //     hdNumber: props.history.location.state.reseller.hdNumber,
  //     hdEmail: props.history.location.state.reseller.hdEmail,
  //     logo: props.history.location.state.reseller.logo
  //   });
  // }

  const getImage = logoImg => {
    console.log("loog", logoImg);
    setValues({ ...values, logo: logoImg });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // getImage = logoImg => {
  //   console.log("loog", logoImg);

  //   this.setState(() => ({
  //     ...this.state,
  //     logo: logoImg
  //   }));

  //   console.log(this.state.logo);
  // };
  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const { id, name, hdNumber, hdEmail, logo } = values;
    const { updateReseller } = props;
    console.log("values", values);

    if (id && name && hdNumber && hdEmail && logo) {
      updateReseller(id, name, hdNumber, hdEmail, logo);
      console.log("values2", values);
      redirect();
    }
  };
  const redirect = () => {
    history.push("/ResellersList");
  };

  // console.log("p", props);

  // render() {
  return (
    <div className="container-fluid row bg-white W-100 reseller-form justify-content-center my-0">
      <div className=" col-md-6 bg-white my-0 justify-content-center">
        <form onSubmit={handleSubmit}>
          <label className="justify-left w-100 my-1">
            <h2>Edit Reseller{props.name}</h2>
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
  // }
};

export default connect(null, { updateReseller })(EditReseller);
