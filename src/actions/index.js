import getId from "../utils/getId";

export const createReseller = (name, hdNumber, hdMail) => ({
  type: "CREATE_RESELLER",
  id: getId(),
  name,
  hdNumber,
  hdMail
});

// export const removeBook = id => ({
//   type: 'REMOVE_BOOK',
//   id,
// });

// export const changeFilter = filter => ({
//   type: 'CHANGE_FILTER',
//   filter,
// });
