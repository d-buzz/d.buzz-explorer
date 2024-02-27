// /utils/helpers.js

// Example helper function for formatting dates
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

// Other helper functions can be added as needed
