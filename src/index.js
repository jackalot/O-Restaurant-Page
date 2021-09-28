function component () {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
        content.append(header);
        const homeBtn = document.createElement("button");
            homeBtn.textContent = "Home";
            homeBtn.classList.add("Home");
            header.append(homeBtn);
        const contactBtn = document.createElement("button");
            contactBtn.textContent = "Contact Us";
            contactBtn.classList.add("Contact-Us");
            header.append(contactBtn);
        const menuBtn = document.createElement("button");
            menuBtn.textContent = "Menu";
            menuBtn.classList.add("Menu");
            header.append(menuBtn);
    return content;
}
window.onload(document.body.appendChild(component()));