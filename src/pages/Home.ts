import homeImage from "./../../public/Paralax_investigacion_&_desarrollo_3.png";
class Home {
  private HTMLHomeElement: HTMLElement;

  constructor() {
    this.HTMLHomeElement = document.createElement("section");
    this.HTMLHomeElement.className = `main__section--home home`;
  }

  returnHTMLHomeElement() {
    this.HTMLHomeElement.innerHTML = `
        <div class="home__div">
          <h2 class="home__h2">Tutorial de instalación de MySQL-Server & MySQL- Workbench Community</h2>
          <img class="home__img" src="${homeImage}" alt="homeImage" height="300" width="300"/>
          <div class="home__div--desc desc">
            <div class="desc__div">
              <p class="desc__p">
                Para Ubuntu, en este medio recorreremos todos los pasos a seguir para instalar MySQL y todo su entorno de trabajo para ello, el contenido de este sitio se enfocará en la instalación en Ubuntu <br/> (distribución de Linux)
              </p>
            </div>
            <div class="desc__div">
              <p class="desc__p">
                pero únicamente desde la terminal esto quiere decir que en ningún momento se hará uso de la interface de usuario, esperamos que disfruten el tutorial y que sigan con los siguientes pasos.
              </p>
            </div>
          </div>
            <div class="home__div--button">
              <button class="home__button">Show More..</button>
            </div>
        </div>
    `;

    return this.HTMLHomeElement;
  }
}

export default Home;
