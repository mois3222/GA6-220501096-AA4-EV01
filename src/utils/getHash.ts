/**
 * The function return a hash like #/1 but without this elements '#/' return an unique element = 1
 * @returns {string} return a string without pad and slash
 */
const getHash = () =>
  window.location.hash.slice(1).toLowerCase().split("/")[1] || "/";

export default getHash;
