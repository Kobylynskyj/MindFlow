const HeaderHero = {
    title: "Be aware, Manage well.",
    subtitle:"Everyone experiences stress in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.",
    btnPrimary: "Find Your Way",
}



export const Hero = () => {
    return`
        <div class="header_img_bg">

    <div class="header_title_block">

    <p class="header_title">${HeaderHero.title}</p>
    <p class="header_subtitle">${HeaderHero.subtitle}</p>
    <button class="header_btn_Primary">${HeaderHero.btnPrimary}</button>
    </div>
    
    </div>
    `


}

