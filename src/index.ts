import Router from "./routes/Routes";
import "./styles/index.scss";
import "./styles/normalize.css";

/**
 * This const save the instance of class Router, Router is a singleton.
 * @type {Router}
 */
const router = Router.createInstace();

window.addEventListener("load", router.render);

window.addEventListener("hashchange", router.render);
