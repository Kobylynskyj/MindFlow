
import "./Section1.scss"
const AboutHero = {
    title: "Our Founding Story",
    subtitle: "Our Journey to Serenity",
    titlefirst: "Concept Born",
    subtitleFirst: "Coocept bem ane le do tos te tect foundece tsabe et tiecesoster of ede foundert'k founders.",
    titleSecond: "Platform Launch",
    subtitleSecond: "Let Pattonn Leunch and opsoning and community conund rew kneess.",
    titleThird: "Community 100k"
}

export const Section1 = () => {
    return  `
    <section class="Hero_About">
    <div class="Map">

    <div class="text">
    <p class="text_p">${AboutHero.title}</p>
    <h1 class="title_h1">${AboutHero.subtitle}</h1>
    </div>
    
    </div>
    
    <div class="content_Hero">

    <div class="first_content_Hero">
    <div class="first_block">
    <h2 class="title_first_block">${AboutHero.titlefirst}</h2>
    <p class="subtitle_first_block">${AboutHero.subtitleFirst}</p>
    </div>


     
 <div class="second_content_Hero">

    <div class="second_block">
    <h2 class="title_second_block">${AboutHero.titleSecond}</h2>
    <p class="subtitle_second_block">${AboutHero.subtitleSecond}</p>

    </div>

    <div class="third_content_Hero"
        
    <div class="third_block">
    <h1 class="title_third_block">2025</h1>
    <p class="subtitle_third_block">${AboutHero.titleThird}</p>
    </div>
    </div>

    </section>
`

    
}