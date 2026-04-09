import family from "../../../../public/icon/family.png"
const creativeSection3 = [
    {
        title: "Looking Ahaed",
        subtitle: "Building Alivo, together with you."
    },
           
]



const renderLinks = () => {
    return creativeSection3.map((element) => `
    
    <p class="title">${element.title}</p>
    <h3 class="subtitle">${element.subtitle}</h3>
    
        `).join("")
}


export const Section3 = () => {
    return`
    <section class="section_3">
    <div class="container_text">
    ${renderLinks()}
    </div>
    <div class="image_container"> 
    <img  src="${family}" alt="family" >
    </div>
    </section>
    `
}