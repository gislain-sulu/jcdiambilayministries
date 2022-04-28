const formatDescription = (description, max) => {
  return ` ${description.slice(0, max)}...`;
};
export default formatDescription;
