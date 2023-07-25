import { Setps } from "./types";

class Template {
  protected setpsArticules: Setps[] = [];
  protected articles: string[] = [];
  protected HTMLCreateDivElement: HTMLDivElement;
  protected HTMLCreateCarrouselElement: HTMLDivElement;
  protected HTMLCreateSectionElement: HTMLElement;
  protected HTMLCreateSectionTwoElement: HTMLElement;

  constructor() {
    this.HTMLCreateDivElement = document.createElement("div");
    this.HTMLCreateDivElement.className = "template";

    this.HTMLCreateCarrouselElement = document.createElement("div");
    this.HTMLCreateCarrouselElement.className = "template__carrousel";
    //
    this.HTMLCreateSectionElement = document.createElement("section");
    this.HTMLCreateSectionElement.className = `template__section`;
    this.HTMLCreateSectionTwoElement = document.createElement("section");
    this.HTMLCreateSectionTwoElement.className = `template__section walkthrough`;
    //
  }

  pushSetps(HTML: Setps) {
    return this.setpsArticules.push(HTML);
  }

  createFace(
    title: string,
    src: string,
    alt: string,
    description: string,
    href: string | number
  ): HTMLElement {
    this.HTMLCreateSectionElement.innerHTML = `
    <div class="template__div--face face">
    <h2 class="face__h2">${title}</h2>
    <img class="face__img" src="${src}" alt="${alt}" height="300" width="300"/>
    <div class="face__div--desc desc">
      <div class="desc__div">
        <p class="desc__p">
          ${description}
        </p>
      </div>
    </div>
      <div class="face__div--button">
        <a class="face__button--previous"  href="${href}">Previous</a>
        <button class="face__button--next">Next</button>
      </div>
    </div>
    
    `;

    return this.HTMLCreateSectionElement;
  }

  createdArticle() {
    if (this.setpsArticules.length < 0) return;
    this.articles = this.setpsArticules.map(
      (
        { alt, subTitle, bibliographicCitation, src, description, hrfe },
        index
      ) => {
        return `
        <article class="walkthrough__article">
            <header class="walkthrough__header">
                <h2 class="walkthrough__h2"><small><strong>${(index += 1)}.</strong>Setp</small> ${subTitle}</h2>
                <p class="walkthrough__p">
                  ${description}
                </p>
            </header>
            <aside class="walkthrough__aside">
              <img class="walkthrough__img" src="${src}" alt="${alt}" height="100" width="200" />
            </aside>
            <div class="walkthrough__div">
              <button class="walkthrough__button">Previous</button>
              <button class="walkthrough__button--next">Next</button>
              <a class="walkthrough__a" href="#/${hrfe}">Follow page!</a>
            </div>
            <footer class="walkthrough__footer">
                <p class="walkthrough__p">
                    ${bibliographicCitation}
                </p>
            </footer>
        </article>
        `;
      }
    );
  }

  addArticles() {
    this.HTMLCreateSectionTwoElement.innerHTML += `
        <div class="walkthrough__div--carrousel">
        ${this.articles.map((el) => el).join("")}
        </div>
    `;
    return this.HTMLCreateSectionTwoElement;
  }

  returnSections(): HTMLDivElement {
    return this.HTMLCreateDivElement;
  }
}

export default Template;
