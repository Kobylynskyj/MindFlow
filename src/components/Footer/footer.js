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
    return /*HTML*/ `
    <div class="Footer">
     <nav class="Footer_nav">${createLinks()}</nav>
    </div>
    `

}
