const Section2Text = {
    text:"Our product",
    title:"You tell us your stress,We make your diary",
    subtitle:"Everyone experiences it, and in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.",
    textButton:"Find Your Way"
}



export const Section2 = () => {
    return`
     <section class="section_product_intro">
        <div class="section_our_product">
        
        <div class="avtar_img"></div>
        
        <div class="section_product_title">
        <p class="small_title"> ${Section2Text.text}</p>
        <h1 class="product_title">${Section2Text.title}</h1>
        <p class="product_subtitle">${Section2Text.subtitle}</p>

        <button class="btn_product">${Section2Text.textButton}</button>
        </div>
        
        </section>

    `
}
