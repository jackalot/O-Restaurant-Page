/* 
    Make a module that displays all the
  content for the contact us page.
*/
function makeContactPage () {
    const newDiv = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "This is the Contact Page";
    newDiv.appendChild(heading);
    return newDiv;
}

export default makeContactPage();