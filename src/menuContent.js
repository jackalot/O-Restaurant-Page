function makeMenuPage () {
    const newDiv = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "This is the Menu Page";
    newDiv.appendChild(heading);
    return newDiv;
}

export default makeMenuPage();