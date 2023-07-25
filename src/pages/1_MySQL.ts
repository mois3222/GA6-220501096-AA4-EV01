import Template from "../Template";
import MySQLImage from "./../../public/mysql.png";
class MySQL extends Template {
  returnSections(): HTMLDivElement {
    this.pushSetps({
      subTitle: "mysql",
      src: "https://icloudseven.com/wp-content/uploads/2020/12/desarrollo-software-i-cloud-seven-3.png",
      alt: "imgsql",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis a architecto, eaque nobis quidem.",
      bibliographicCitation: "this's a desc",
      hrfe: 2,
    });
    this.pushSetps({
      subTitle: "mysqlone",
      src: "https://icloudseven.com/wp-content/uploads/2020/12/desarrollo-software-i-cloud-seven-3.png",
      alt: "imgsql",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis a architecto, eaque nobis quidem.",
      bibliographicCitation: "this's a desc",
      hrfe: 2,
    });
    this.pushSetps({
      subTitle: "mysqlonethree",
      src: "https://icloudseven.com/wp-content/uploads/2020/12/desarrollo-software-i-cloud-seven-3.png",
      alt: "imgsql",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis a architecto, eaque nobis quidem.",
      bibliographicCitation: "this's a desc",
      hrfe: 2,
    });
    this.pushSetps({
      subTitle: "mysqlonethree",
      src: "https://icloudseven.com/wp-content/uploads/2020/12/desarrollo-software-i-cloud-seven-3.png",
      alt: "imgsql",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis a architecto, eaque nobis quidem.",
      bibliographicCitation: "this's a desc",
      hrfe: 2,
    });
    this.pushSetps({
      subTitle: "mysqlonethree",
      src: "https://icloudseven.com/wp-content/uploads/2020/12/desarrollo-software-i-cloud-seven-3.png",
      alt: "imgsql",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis a architecto, eaque nobis quidem.",
      bibliographicCitation: "this's a desc",
      hrfe: 2,
    });

    this.createdArticle();
    this.createFace(
      `MySQL, What is it?`,
      MySQLImage,
      "msqlImage",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis a architecto, eaque nobis quidem.",
      ""
    );
    this.createdArticle();
    this.addArticles();
    this.HTMLCreateCarrouselElement.appendChild(this.HTMLCreateSectionElement);
    this.HTMLCreateCarrouselElement.appendChild(
      this.HTMLCreateSectionTwoElement
    );
    this.HTMLCreateDivElement.appendChild(this.HTMLCreateCarrouselElement);

    return this.HTMLCreateDivElement;
  }
}

export default MySQL;
