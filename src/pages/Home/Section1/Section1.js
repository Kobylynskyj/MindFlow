const welcomeSection = {
    text:"How it works",
    title:"Understand & Release the stress in 3 steps",
    subTitle:"Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.",
    titleNavigition:"Personalize",
    subtitleNevigation: "Answer a quick survey about how you express yourself, what causes you stress, and what area  would you like to work on. This way, we can fully personalize your journal!",
    welcomeTextNavigation: "Write & Understand",
    secondSubTitleNavigation: "Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!",
    thirdSubTitleNavigation: "Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!"
}


export const Section1 = () => {
    return`
    <section class="wellcome_section">

    <div class="wellcome_section_title">

    <div class="wellcome_section_heroTitle"> 
    <p class="text_section">${welcomeSection.text}</p>
    <h1 class="title_section">${welcomeSection.title}</h1>
    </div>

    <div class="wellcome_section_subtitle">
    <p class="text_subtitle">${welcomeSection.subTitle}</p>
    </div>
    </div>
    
    <div class="welcome_navigation">
    <div class="wellcome_first_navigation">

    <div class="wellcome_first_title">
    <div class="img_bg"></div>
    <p class="welcome_text">${welcomeSection.titleNavigition}</p>
    </div>
    <div class="wellcome_first_text">
    <p class="wellcome_first_subtitle">${welcomeSection.subtitleNevigation}</p>
    </div>
    <div class="wellcome_first_img">
    
    </div>
    </div>

    <div class="wellcome_second_navigation">

    <div class="wellcome_second_title">
    <div class="img_bg_second"></div>
    <p class="welcome_text">${welcomeSection.welcomeTextNavigation}</p>
    </div>
    <div class="wellcome_first_text">
    <p class="wellcome_second_subtitle">${welcomeSection.secondSubTitleNavigation}</p>
    </div>
    <div class="wellcome_second_img">
    
    </div>
    </div>

    <div class="wellcome_third_navigation">

    <div class="wellcome_third_title">
    <div class="img_bg_third"></div>
    <p class="welcome_text">${welcomeSection.titleNavigition}</p>
    </div>
    <div class="wellcome_first_text">
    <p class="wellcome_third_subtitle">${welcomeSection.thirdSubTitleNavigation}</p>
    </div>
    <div class="wellcome_third_img">
    
    </div>
    </div>
    </div>
    </div>
    </section>
    `
}