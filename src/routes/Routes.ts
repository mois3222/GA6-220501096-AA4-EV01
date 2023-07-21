import getHash from "../utils/getHash";
import resolveHash from "../utils/resolveHash";
class Router {
  render() {
    let hash = getHash(),
      route = resolveHash(hash);

    console.log(route);
  }
}

export default Router;
