class Error404 {
  private HTMLError404Element: HTMLElement;

  constructor() {
    this.HTMLError404Element = document.createElement("section");
    this.HTMLError404Element.className = `main__section--error404 error404`;
  }

  returnHTMLError404Element() {
    this.HTMLError404Element.innerHTML = `
          <div class="error404__div">
             <a href="#/" class="error404__a">
                <h3>Error404!</h3>
                <p>Return to Home</p>
             </a>
          </div>
      `;

    return this.HTMLError404Element;
  }
}

export default Error404;
