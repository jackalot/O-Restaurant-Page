import makeHomePage from "./homeContent";
import makeContactPage from "./contactContent";
function component () {
    const header = document.createElement("header");
        const homeBtn = document.createElement("button");
            homeBtn.textContent = "Home";
            homeBtn.classList.add("Home");
            header.append(homeBtn);
            homeBtn.addEventListener('click', () =>{ 
                doPage(makeHomePage);
            })
        const contactBtn = document.createElement("button");
            contactBtn.textContent = "Contact Us";
            contactBtn.classList.add("Contact-Us");
            header.append(contactBtn);
            contactBtn.addEventListener('click', () =>{ 
                doPage(makeContactPage);
            })
        const menuBtn = document.createElement("button");
            menuBtn.textContent = "Menu";
            menuBtn.classList.add("Menu");
            header.append(menuBtn);
    return header;
}
function doPage(func) {
    console.log("hi");
    const oldContent = document.querySelector("#content");
    while(oldContent.firstChild)
    {
        oldContent.removeChild(oldContent.firstChild);
    }
    if(!oldContent.firstChild)
    {
        let newContent = func;
        oldContent.appendChild(newContent);
    }
}
window.onload = () => {
document.body.appendChild(component());
}