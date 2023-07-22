import getHash from "../utils/getHash";
import resolveHash from "../utils/resolveHash";
import Header from "../templates/Header";
import toggleClick from "../utils/toggle";

//root of website
const $root: HTMLElement | null = document.querySelector<"header">("header");

class Router {
  private static instance: Router | null = null;
  root: HTMLElement | null;

  private constructor() {
    this.root = $root;
  }
  render() {
    toggleClick();
    let hash = getHash(),
      route = resolveHash(hash);

    const header = new Header();

    this.root?.appendChild(header.rendered());
  }

  static createInstace() {
    if (!Router.instance) {
      Router.instance = new Router();
    }

    return Router.instance;
  }
}

export default Router;
