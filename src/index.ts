import "./styles/index.scss";
import "./styles/normalize.css";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import onSliderClick from "./utils/onSliderClick";
import onShowSwitch from "./utils/onShowSwitch";
import Router from "./routes/Routes";

const website = (e: Event) => {
  e.preventDefault();
  let router = new Router();
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <header class="header">
      ${Header.returnHTMLElement()}
    </header>
    <main class="main"></main>
    <footer class="footer">
      ${Footer.returnHTMLFooterElement()}
    </footer>
    
    `;

  router.returnHTMLRoutes(document.querySelector<HTMLElement>(".main")!);

  onSliderClick(
    document.querySelector<HTMLElement>("#nav")!,
    document.querySelector<HTMLButtonElement>(".header__button")!
  );
  onShowSwitch(document.querySelector<HTMLDivElement>(".home__div--desc")!);
};

window.addEventListener("load", website);
window.addEventListener("hashchange", website);
