/**
 * @class
 * @classdesc This's implementation of Header however it is a template specifically will always be in the website.
 */
class Header {
  protected navbar: HTMLElement;
  constructor() {
    this.navbar = document.createElement("header");
    this.navbar.className = "header";
  }

  rendered() {
    this.navbar.innerHTML = `
    <nav class="header__nav">
        <ul class="header__ul ul">
          
        </ul>    
    </nav>
    `;

    return this.navbar;
  }
}

export default Header;
