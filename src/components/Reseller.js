import React from "react";
import PropTypes from "prop-types";
import "./Reseller.css";

const Reseller = props => {
  const { reseller } = props;
  // const handleRemoveBook = () => removeBook(book.id);

  return (
    <div className="supplier-panel">
      <div className="category"> {reseller.name}</div>
      <div className="title"> {reseller.hdNumber}</div>
      <div className="title"> {reseller.hdMail}</div>

      <div>
        {/* <button type="button" onClick={handleRemoveBook} className="remove">
          Remove
        </button> */}
        {/* <button type="button" className="comments">
          Comment
        </button> */}
        <button type="button" className="edit">
          Edit
        </button>
      </div>
    </div>
  );
};

// Book.propTypes = {
//   book: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired
//   }).isRequired,
//   removeBook: PropTypes.func.isRequired
// };

export default Reseller;
