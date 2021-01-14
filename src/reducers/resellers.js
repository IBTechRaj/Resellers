const resellers = (state = [], action) => {
  console.log("redu", action);
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
    case "UPDATE_RESELLER":
      const indexU = state.findIndex(t => t.id === action.id);
      console.log("i", indexU);
      const updateBucket = { ...action.reseller }; //, course: state[indexU].course };
      console.log("b", updateBucket);
      return [
        ...state.slice(0, indexU),
        updateBucket,
        ...state.slice(indexU + 1)
      ];

    default:
      return state;
  }
};

export default resellers;
