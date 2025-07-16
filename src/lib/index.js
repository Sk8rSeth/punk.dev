// place files you want to import through the `$lib` alias in this folder.
const handleOnMouseMove = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x, `${x}px`");
    target.style.setProperty("--mouse-y, `${y}px`");
}