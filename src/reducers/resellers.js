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
      console.log("i", ...state.slice(0, indexU));
      const { updateBucket } = { ...action.reseller };
      console.log("b", { ...action.reseller });
      return [
        ...state.slice(0, indexU),
        {
          id: action.id,
          name: action.name,
          hdNumber: action.hdNumber,
          hdEmail: action.hdEmail,
          logo: action.logo
        },
        // { ...action.reseller },
        ...state.slice(indexU + 1)
      ];

    default:
      return state;
  }
};

export default resellers;
