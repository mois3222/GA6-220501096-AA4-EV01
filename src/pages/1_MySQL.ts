import Template from "../Template";

class MySQL extends Template {
  returnSections(): HTMLDivElement {
    this.pushSetps({
      subTitle: "mysql",
      src: "https://icloudseven.com/wp-content/uploads/2020/12/desarrollo-software-i-cloud-seven-3.png",
      alt: "imgsql",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis a architecto, eaque nobis quidem.",
      bibliographicCitation: "1",
    });
    this.createdArticle();
    this.createFace(
      `MySQL, What's`,
      "https://cdn-icons-png.flaticon.com/512/3696/3696975.png",
      "msqlImage",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis a architecto, eaque nobis quidem.",
      "",
      "#/about"
    );
    this.addArticles();
    this.HTMLCreateDivElement.appendChild(this.HTMLCreateSectionElement);
    this.HTMLCreateDivElement.appendChild(this.HTMLCreateSectionTwoElement);

    return this.HTMLCreateDivElement;
  }
}

export default MySQL;
