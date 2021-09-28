/* 
    Make a module that displays all the
  content for the home page.
*/
function makeHomePage () {
    const newDiv = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "This is the Home Page";
    newDiv.appendChild(heading);
    return newDiv;
}

export default makeHomePage();