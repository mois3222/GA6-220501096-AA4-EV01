import { Setps } from "./types";

class Template {
  protected setpsArticules: Setps[] = [];
  protected articles: string[] = [];
  protected HTMLCreateDivElement: HTMLDivElement;
  protected HTMLCreateSectionElement: HTMLElement;
  protected HTMLCreateSectionTwoElement: HTMLElement;
  constructor() {
    this.HTMLCreateDivElement = document.createElement("div");
    this.HTMLCreateDivElement.className = "template";
    //
    this.HTMLCreateSectionElement = document.createElement("section");
    this.HTMLCreateSectionElement.className = `template__section`;
    this.HTMLCreateSectionTwoElement = document.createElement("section");
    this.HTMLCreateSectionTwoElement.className = `template__section`;
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
    href: string | number,
    next: string | number
  ): HTMLElement {
    this.HTMLCreateSectionElement.innerHTML = `
    <div>
        <h2>${title}</h2>
        <img src="${src}" alt="${alt}" width="300" heigth="100">
        <p>${description}</p>
        <div>
            <a href="#/${href}">Previous</a>
            <a href="#/${next}">Next</a>
        </div>
    </div>
    
    `;

    return this.HTMLCreateSectionElement;
  }

  createdArticle() {
    if (this.setpsArticules.length < 0) return;
    this.articles = this.setpsArticules.map(
      ({ alt, subTitle, bibliographicCitation, src, description }, index) => {
        return `
        <article>
            <header>
                <h2>
                    <small>
                    <strong>${(index += 1)}</strong>
                    Setp. 
                    </small> ${subTitle}
                </h2>
            </header>
            <img src="${src}" alt="${alt}" width="300" heigth="100" />
            <p>
                ${description}
            </p>
            <footer>
                <p>
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
        ${this.articles.map((el) => el).join("")}
    `;
    return this.HTMLCreateSectionTwoElement;
  }

  returnSections(): HTMLDivElement {
    return this.HTMLCreateDivElement;
  }
}

export default Template;
