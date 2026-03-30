import video from "../../../public/icon/video.png"
const welcomeSection = 
    {
        namber: "1",
        text:"How it works",
        title:"Understand & Reelase stress in 3 steps",
        subTitle:"Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress."
    }



export const Main = () => {
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
    <p class="welcome_text">Personalize</p>
    </div>
    <div class="wellcome_first_text">
    <p class="wellcome_first_subtitle">Answer a quick survey about how you express yourself, what causes you stress, and what area 
    would you like to work on. This way, we can fully personalize your journal!
    </p>
    </div>
    <div class="wellcome_first_img">
    
    </div>
    </div>

    <div class="wellcome_second_navigation">

    <div class="wellcome_second_title">
    <div class="img_bg_second"></div>
    <p class="welcome_text">Write & Understand</p>
    </div>
    <div class="wellcome_first_text">
    <p class="wellcome_second_subtitle">Write, draw, reflect,
     understand. Alivio will guide you through the prompts and will help you manage your stress!
    </p>
    </div>
    <div class="wellcome_second_img">
    
    </div>
    </div>

     <div class="wellcome_third_navigation">

    <div class="wellcome_third_title">
    <div class="img_bg_third"></div>
    <p class="welcome_text">Personalize</p>
    </div>
    <div class="wellcome_first_text">
    <p class="wellcome_third_subtitle">Answer a quick survey about how you express yourself, what causes you stress, and what area 
    would you like to work on. This way, we can fully personalize your journal!
    </p>
    </div>
    <div class="wellcome_third_img">
    
    </div>
    </div>
    </div>
    </div>
    </section>

    
    <section class="section_stories">
    
    <div class="stories_title">

        <div class="stories_text">
        <h1 class="stories_h1">Let's hear about Kayla's success story</h1>
        <p class="stories_text_p">See how well Alivio works in a real customer’s life. </p>
        <button class="stories_btn">Let’s get started</button>
        </div>

        <div class="stories_video">
        <img src="${video}" alt="video">
        </div>
    </div>
    </section>
    

        <section class="section_product_intro">
        <div class="section_our_product">
        
        <div class="avtar_img"></div>
        
        <div class="section_product_title">
        <p class="small_title"> Our product</p>
        <h1 class="product_title">You tell us your stress,We make your diary</h1>
        <p class="product_subtitle">Everyone experiences it, and in different ways.
        Let Alivio guide you, in a personalized journal experience, to overcome your stress.
        </p>

        <button class="btn_product">Find Your Way</button>
        </div>
        
        </section>
    ` 
}