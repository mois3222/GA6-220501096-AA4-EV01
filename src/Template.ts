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
        <button class="face__button--next">
          <span class="face__button--span">Next</span>
          <svg class="face__button--svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
        </button>
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
                <h3 class="walkthrough__h3">${subTitle}</h3>
                <p class="walkthrough__p">Step: ${(index += 1)}</p>
            </header>
            <aside class="walkthrough__aside">
              <img class="walkthrough__img" src="${src}" alt="${alt}" />
            </aside>
            <div class="walkthrough__div">
              <button class="walkthrough__button">
                <span class="walkthrough__span" >Previous</span>
                <svg class="walkthrough__svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
              </button>
              <button class="walkthrough__button--toggle">
                <svg class="face__button--svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
              </button>
              <a class="walkthrough__a" href="${hrfe}">Follow page!</a>
            </div>
            <footer class="walkthrough__footer">
                <p class="walkthrough__p--footer">
                  ${description}
                </p>
                <p class="walkthrough__p--footer">
                    <em>${bibliographicCitation}<em/>
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

  getSepts() {
    return this.articles;
  }

  returnSections(): HTMLDivElement {
    return this.HTMLCreateDivElement;
  }
}

export default Template;
