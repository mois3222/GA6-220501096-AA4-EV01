const onSliderClick = (element: HTMLElement) => {
  let toggle = false;
  document.addEventListener("click", (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement && targetElement.classList.contains("menu")) {
      let newToggle = (toggle = !toggle);

      console.log(newToggle);

      element.style.transform = `translateX(${newToggle ? 25 : 50}%)`;
    }
  });
};

export default onSliderClick;
