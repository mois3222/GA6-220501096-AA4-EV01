//define a class for navbar rendering
class Navbar {
  protected navbar: HTMLElement;
  constructor() {
    this.navbar = document.createElement("nav");
    this.navbar.className = "navbar";
  }

  rendered() {
    this.navbar.innerHTML = `
    <ul class="navbar__ul ul">
        <li class="navbar__li--ul"></li>    
        <li class="navbar__li--ul"></li>
        <li class="navbar__li--ul"></li>
    </ul>
    `;

    return this.navbar;
  }
}

export default Navbar;
