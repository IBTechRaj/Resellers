import React from "react";
// import PropTypes from "prop-types";
import "./Reseller.css";

const Reseller = props => {
  const { reseller } = props;

  return (
    <div className=" row my-1">
      <div className="reseller-name col-md-3"> {reseller.name}</div>
      <div className="reseller-hdNumber col-md-3"> {reseller.hdNumber}</div>
      <div className="reseller-hdEmail col-md-3"> {reseller.hdEmail}</div>
      <img
        src={reseller.logo || "http://via.placeholder.com/30"}
        width="30"
        height="30"
        alt="firebase-image"
      />

      <div className="col-md-2">
        <button type="button" className="edit">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Reseller;
