import getHash from "../utils/getHash";
import resolveHash from "../utils/resolveHash";
import Navbar from "../templates/Header";

//root of website
export const $root: HTMLElement | null =
  document.querySelector<"header">("header");

class Router {
  private static instance: Router | null = null;
  root: HTMLElement | null;

  private constructor() {
    this.root = $root;
  }
  render() {
    let hash = getHash(),
      route = resolveHash(hash);

    const navbar = new Navbar();

    this.root?.appendChild(navbar.rendered());
  }

  static createInstace() {
    if (!Router.instance) {
      Router.instance = new Router();
    }

    return Router.instance;
  }
}

export default Router;
