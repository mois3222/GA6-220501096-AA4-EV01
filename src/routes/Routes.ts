import getHash from "../utils/getHash";
import resolveHash from "../utils/resolveHash";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

interface Routes extends Record<string, HTMLElement> {}
class Router {
  home: Home;
  error404: Error404;
  constructor() {
    this.home = new Home();
    this.error404 = new Error404();
  }
  returnHTMLRoutes(HTMLMainElement: HTMLElement) {
    const routes: Routes = {
      "/": this.home.returnHTMLHomeElement(),
    };

    let hash = getHash(),
      route: string = resolveHash(hash);

    let render = routes[route];
    if (!render)
      return HTMLMainElement.appendChild(
        this.error404.returnHTMLError404Element()
      );
    return HTMLMainElement.appendChild(render);
  }
}

export default Router;
