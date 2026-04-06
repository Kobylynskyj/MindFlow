import "./Section2.scss"

const SectionText = {
    subtitle: "Values & Philosophy",
    title: "The  'Why' ",
    
    cards : [
        {
        title: "Empathy First Design",
        text: "We prioritize the human experience in every pixel. Our design process starts with understanding user needs to create intuitive and meaningful digital interactions."
    },  
    {
        title: "Holistic Approach",
        text: "Harmonizing mind, body, and technology. Our approach ensures that every element works in balance to provide a calm and focused user experience"
    },
        
    {
        title: "Mindful Innovation",
        text: "Growing naturally and consciously. We evolve our platform by staying true to our core values while exploring new ways to enhance your daily journey."
    },
        
    ]
}


const renderCard = () => {
   return SectionText.cards.map ((element) =>   `
    <div class="FutureCards">

    <h1 class="title_cards">${element.title}</h1>
    <p class="text_cards">${element.text}</p>
    </div>
    `).join("")
    
}

export const Section2 = () => {
    return  `
    <section class="Section">
    <div class="FutureCards">
    <p class="Future_text">${SectionText.subtitle}</p>
    <h1 class="Future_title">${SectionText.title}<h1>
    </div>

    <div class="Section_cards">
    
    ${renderCard()}
    </div>
    </section>
`

    
}