import Template from "../Template";
import MySQLImg from "./../../public/MysqlIma.png";
import mysql_workbench_install from "./../../public/Mysql-install-workbench.png";
import mysql_workbench from "./../../public/mysql_workbench_icon_by_dagomx_de5xpw6-fullview.png";
class MySQLWorkbench extends Template {
  returnSections(): HTMLDivElement {
    this.pushSetps({
      subTitle: `MySQL Workbench Community Edition: Actualiza los repositorios con "sudo apt update" y "sudo apt upgrade"`,
      src: MySQLImg,
      alt: "workbench",
      description: `Instala MySQL Workbench con "sudo apt install mysql-workbench"`,
      bibliographicCitation: "",
      hrfe: "#/workbench",
    });
    this.pushSetps({
      subTitle: `Con estos pasos, tendrás MySQL Workbench instalado y listo para administrar tus bases de datos MySQL de forma gráfica en Ubuntu.`,
      src: mysql_workbench_install,
      alt: "workbench",
      description: `Para verificar que MySQL está funcionando inserta en la terminal Ubuntu mysql-workbench.`,
      bibliographicCitation:
        "https://norvicsoftware.com/como-instalar-mysql-workbench-en-windows-10/",
      hrfe: "#/workbench",
    });

    this.createdArticle();
    this.createFace(
      `MySQL-Workbench`,
      mysql_workbench,
      "msqlImage",
      "MySQL Workbench es una herramienta gráfica de administración y diseño de bases de datos que facilita la creación, modelado, gestión y visualización de bases de datos MySQL.",
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

export default MySQLWorkbench;
