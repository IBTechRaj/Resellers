const resellers = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "CREATE_RESELLER":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          hdNumber: action.hdNumber,
          hdEmail: action.hdEmail,
          logo: action.logo
        }
      ];
    //   case 'REMOVE_BOOK':
    //     return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default resellers;
