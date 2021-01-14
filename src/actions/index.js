import getId from "../utils/getId";

export const createReseller = (name, hdNumber, hdEmail, logo) => ({
  type: "CREATE_RESELLER",
  id: getId(),
  name,
  hdNumber,
  hdEmail,
  logo
});
export const updateReseller = (id, name, hdNumber, hdEmail, logo) => ({
  type: "UPDATE_RESELLER",
  id,
  name,
  hdNumber,
  hdEmail,
  logo
});
// export const removeBook = id => ({
//   type: 'REMOVE_BOOK',
//   id,
// });

// export const changeFilter = filter => ({
//   type: 'CHANGE_FILTER',
//   filter,
// });
