const onToggleButton = (element: HTMLDivElement) => {
  let toggle = true;

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
  });
};

export default onToggleButton;
