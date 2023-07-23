class Home {
  private HTMLHomeElement: HTMLElement;

  constructor() {
    this.HTMLHomeElement = document.createElement("section");
    this.HTMLHomeElement.className = `main__section--home`;
  }

  returnHTMLHomeElement() {
    this.HTMLHomeElement.innerHTML = `
        <div>
            <h3>Home!</h3>
        </div>
    `;

    return this.HTMLHomeElement;
  }
}

export default Home;
