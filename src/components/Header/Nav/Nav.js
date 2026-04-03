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
    <a class="nav_links ${currentPath===link.path ? "active" : ""}" href="${link.path}">${link.name}</a>
    `).join("")
}

export const Nav = (currentPath) => {
    return`
    <nav class=" Header_nav">
    ${createLinks(currentPath)}
    </nav>
    `
}