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
    <div class="map-wrapper">
    <iframe  id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4257.785813070811!2d14.433426616500196!3d50.11168026489778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470beb349d47320d%3A0x441ea30ea78d5326!2sTrojsk%C3%BD%20most!5e0!3m2!1sru!2scz!4v1775382472693!5m2!1sru!2scz" width="400" height="225" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div
    
    </div>
    `

}
