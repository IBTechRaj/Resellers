import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Reseller from "../components/Reseller";
// import RePhoto from "../containers/RePhoto";
import ResellerForm from "./ResellerForm";
import "./ResellersList.css";

function mapStateToProps(state) {
  const { resellers } = state;
  return { resellers };
}

const ResellersList = ({ resellers }) => {
  return (
    <div className="container reseller-list">
      <h1>Resellers</h1>
      <div className="btn-add-reseller p-3 mb-2 mb-3 ">
        <Link to="/ResellerForm" style={{ color: "white" }}>
          Add Reseller
        </Link>
      </div>
      <div className="row my-5">
        <div className="reseller-name col-md-3"> NAME</div>
        <div className="reseller-hdNumber col-md-3"> Help Desk Number</div>
        <div className="reseller-hdEmail col-md-3">Help Desk Email</div>
      </div>
      <div>
        {resellers.map(reseller => (
          <Reseller key={reseller.id} reseller={reseller}>
            <img src={reseller.logo} alt="website logo" />
          </Reseller>
        ))}
      </div>
    </div>
  );
};

// BooksList.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   removeBook: PropTypes.func.isRequired,
//   changeFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired
// };

export default connect(mapStateToProps)(ResellersList);
