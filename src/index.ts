import Router from "./routes/Routes";
import "./styles/index.scss";
import "./styles/normalize.css";

const router = Router.createInstace();
console.log(router);

window.addEventListener("load", router.render);
window.addEventListener("hashchange", router.render);
