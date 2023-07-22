import "./styles/index.scss";
import "./styles/normalize.css";
import Header from "./templates/Header";
import toggleClick from "./utils/toggle";

window.addEventListener("load", () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <header class="header">
        ${Header.returnHTMLElement()}
    </header>
    <main class="main">
    
    </main>
    <footer class="footer"></footer>

    `;

  toggleClick(document.querySelector<HTMLElement>("#nav")!);
});
