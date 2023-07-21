import "./styles/index.scss";
import "./styles/normalize.css";
import Router from "./routes/Routes";

const router = new Router();

window.addEventListener("load", router.render);
window.addEventListener("hashchange", router.render);
