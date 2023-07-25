const onToggleButton = (
  element: HTMLDivElement,
  articleHTML: HTMLDivElement
) => {
  let toggle = true;
  articleHTML.style.transform = `translateX(20%)`;
  document.addEventListener("click", (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;

    if (
      targetElement &&
      targetElement.classList.contains("face__button--next")
    ) {
      let newToggle = (toggle = !toggle);
      if (!element.style) return;
      element.style.transform = `translateX(${newToggle ? 50 : -50}%)`;
    }
    if (
      targetElement &&
      targetElement.classList.contains("walkthrough__button")
    ) {
      let newToggle = (toggle = !toggle);
      if (!element.style) return;
      element.style.transform = `translateX(${!newToggle ? -50 : 0}%)`;
    }
    if (
      targetElement &&
      targetElement.classList.contains("walkthrough__button--next")
    ) {
      let newToggle = (toggle = !toggle);
      if (!articleHTML.style) return;
      articleHTML.style.transform = `translateX(${newToggle ? -20 : 20}%)`;
    }
  });
};

export default onToggleButton;
