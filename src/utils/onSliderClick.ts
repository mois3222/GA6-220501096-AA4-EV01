const onSliderClick = (element: HTMLElement, button: HTMLButtonElement) => {
  let toggle = false;
  document.addEventListener("click", (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement && targetElement.classList.contains("header__button")) {
      let newToggle = (toggle = !toggle);

      console.log(newToggle);

      element.style.transform = `translateX(${newToggle ? 25 : 50}%)`;
      button.className = `header__button ${
        newToggle ? "header__active" : "header__desactive"
      }`;
    }
  });
};

export default onSliderClick;
