import error404Image from "../../public/banner-diseno-de-software-disersoft.png";
class Error404 {
  private HTMLError404Element: HTMLElement;

  constructor() {
    this.HTMLError404Element = document.createElement("section");
    this.HTMLError404Element.className = `main__section--error404 error404`;
  }

  returnHTMLError404Element() {
    this.HTMLError404Element.innerHTML = `
          <div class="error404__div">
            <img src="${error404Image}" alt="error404Img" height="300" width="300" />
             <a href="#/" class="error404__a">
                <h3 class="error404__h3">Error404!</h3>
                <span class="error404__span">Page <br/> not found</sapn>
                <p class="error404__p">Return to Home!</p>
             </a>
          </div>
      `;

    return this.HTMLError404Element;
  }
}

export default Error404;
