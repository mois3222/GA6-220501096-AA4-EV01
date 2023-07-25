const onShowSwitch = (element: HTMLDivElement) => {
  let toggle = true;
  element.style.transform = `translateX(26%)`;
  document.addEventListener("click", (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement && targetElement.classList.contains("home__button")) {
      let newToggle = (toggle = !toggle);
      if (!element.style) return;
      element.style.transform = `translateX(${newToggle ? 26 : -26}%)`;
      targetElement.textContent = `Show ${newToggle ? "More.." : "Less.."}`;
    }
  });
};

export default onShowSwitch;
