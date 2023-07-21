/**
 * This function valid if the hash is a number or other value.
 * @param {string} route is a hash get of getHash.ts
 * @returns {string}
 */

const resolveHash = (route: string): string => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";

    return validRoute;
  }

  return `/${route}`;
};

export default resolveHash;
