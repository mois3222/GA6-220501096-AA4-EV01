let toggle = false;
const toggleClick = () => {
  document.addEventListener("click", (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement && targetElement.classList.contains("menu")) {
      let newToggle = (toggle = !toggle);
      console.log(newToggle);
    }
  });
};

export default toggleClick;
