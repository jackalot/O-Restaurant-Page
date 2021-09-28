import makeHomePage from "./homeContent";
import makeContactPage from "./contactContent";
function component () {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
        content.append(header);
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
    return content;
}
function doPage(func) {
    console.log("hi");
    const oldContent = document.querySelector("#content");
    
    let newContent = func();
    document.body.appendChild(func);
}
window.onload = () => {
document.body.appendChild(component());
}