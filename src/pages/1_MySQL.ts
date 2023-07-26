import Template from "../Template";
import MySQLImage from "./../../public/mysql.png";
import MySQLImg from "./../../public/MysqlIma.png";
import ServerImg from "./../../public/server-update.png";
class MySQL extends Template {
  returnSections(): HTMLDivElement {
    this.pushSetps({
      subTitle: "Instrucciones para instalar MySQL Server",
      src: MySQLImg,
      alt: "imgsql",
      description:
        "Abre una terminal y actualiza los paquetes con 'sudo apt update'",
      bibliographicCitation:
        "https://www.adslzone.net/esenciales/windows-10/instalar-mysql/",
      hrfe: "#/workbench",
    });
    this.pushSetps({
      subTitle: `Instala MySQL Server con "sudo apt install mysql-server".`,
      src: ServerImg,
      alt: "imgsql",
      description: `Para verificar que MySQL está funcionando, inicia sesión en la consola de MySQL con "mysql -u root -p" y la contraseña que estableciste.`,
      bibliographicCitation: "",
      hrfe: "#/workbench",
    });

    this.createdArticle();
    this.createFace(
      `MySQL, What is it?`,
      MySQLImage,
      "msqlImage",
      "Permite almacenar, organizar y administrar grandes cantidades de datos de manera eficiente y segura.",
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
