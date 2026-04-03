const links = [
    {name : "Home", link : "/"},
    {name : "About Us", link : "/about"},
    {name : "Community", link : "/community"},
    {name : "Pricing", link : "#"},
]

const createLinks = () =>{
    return links.map((element) => 
        `<a href="${element.link}">${element.name}<a>`
    ).join("")
} 


export const Footer = () => {
    return  `
    <div class="Footer">
    <div class="Footer_content">
    
    <h1 class="Alivio_footer">Alivio</h1>
    <nav class="Footer_nav">${createLinks()}</nav>
    </div>
    </div>
    `

}
