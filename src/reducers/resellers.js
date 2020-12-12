const resellers = (state = [], action) => {
  switch (action.type) {
    case "CREATE_RESELLER":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          number: action.hdNumber,
          email: action.hdMail
        }
      ];
    //   case 'REMOVE_BOOK':
    //     return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default resellers;
