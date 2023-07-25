const onStepsClick = (HTMLDivElement: HTMLDivElement) => {
  const chilNodes = Object.entries(HTMLDivElement.childNodes);

  let counter = 0;
  document.addEventListener("click", (e: MouseEvent) => {
    const numHTML: ChildNode[] = chilNodes.flatMap((e) =>
      e[1].nodeValue === null ? e[1] : []
    );

    let targetElement = e.target as HTMLButtonElement;

    try {
      if (!HTMLDivElement.style) return;
      HTMLDivElement.style.width = `${numHTML.length * 100}%`;

      if (
        targetElement &&
        targetElement.classList.contains("walkthrough__button--toggle")
      ) {
        let counted = numHTML.length > counter ? counter++ : (counter = 0);
        console.log(counted);

        HTMLDivElement.style.transform = `translateX(${
          counted < numHTML.length ? counted * -(100 / numHTML.length) : 0
        }%)`;

        console.log(numHTML.length);
      }
    } catch (error) {
      console.log(error);
    }
  });
};

export default onStepsClick;
