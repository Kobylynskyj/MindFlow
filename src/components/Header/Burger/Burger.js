const links = [
    {
        path: "/",
        name: "Home"
    } ,  
    {
        path: "/about",
        name: "About Us"
    } , 
    {
        path: "/community",
        name: "Community"
    }  ,  
    {
        path: "/pricing",
        name: "Pricing"
    },  
]


const createLinks = (currentPath) => {
    return links
    .map((link) => `
    <a class="burger_links ${currentPath===link.path ? "active" : ""}" href="${link.path}">${link.name}</a>
    `).join("")
}

export const burger_nav = (currentPath) => {
    return`
    <nav class="burger_nav">
     <div class="burger_header_btns">
    <button id="open-modal" class="button_sing_in">Sing in</button>
    </div>
    ${createLinks(currentPath)}

    </nav>
    `
}

export const initBurger = () => {
    const burger = document.querySelector(".burger")
    const burgerNav = document.querySelector(".burger_nav")

    burger.addEventListener('click', () => {
        burger.classList.toggle("active")
        burgerNav.classList.toggle("open")
    })
}


