import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Reseller from "../components/Reseller";
import "./ResellersList.css";

// import { removeBook, changeFilter } from "../actions";
// import CategoryFilter from "../components/CategoryFilter";

function mapStateToProps(state) {
  const { resellers } = state;
  return { resellers };
}

// const mapDispatchToProps = dispatch => ({
//   removeBook: id => dispatch(removeBook(id)),
//   changeFilter: value => dispatch(changeFilter(value)),
// });

const ResellersList = ({ resellers }) => {
  // const handleFilterChange = e => {
  //   const { value } = e.target;
  //   changeFilter(value);
  // };

  // const filteredBooks = () =>
  //   filter === "All" ? books : books.filter(book => book.category === filter);

  return (
    <div className="container supplier-list">
      <h1>Resellers</h1>
      <div className="btn-add-reseller p-3 mb-2 mb-3 ">
        <Link to="/ResellerForm" style={{ color: "white" }}>
          Add Reseller
        </Link>
      </div>
      <button type="submit" value="ADD RESELLER" className="btn-add-reseller">
        Add Reseller{" "}
      </button>
      <h3>Reseller Name Help Desk No Help Desk Email</h3>
      {/* <CategoryFilter handleChange={handleFilterChange} /> */}
      <div>
        {resellers.map(reseller => (
          <Reseller key={reseller.id} reseller={reseller} />
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
