
import logo from "../../../public/logo.svg"

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

const btnSingIn = "Sing in"
const btnStartTrial = "Start Trial"

//Header title
const title = "Be aware, Manage well."
const subTitle = "Everyone experiences stress in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress."
const btnPrimary ="Find Your Way" 

export const Header = () => {
    return `
    <header class="Header">
    
    <img src="${logo}" alt="">
    <nav class="Header_nav">${createLinks()}</nav>
    
    <div class="header_block_btn">
    <button class="button_sing_in">${btnSingIn}</button>
    <button class="Start_Trial">${btnStartTrial}</button>
    </div>

    </header>
    <div class="header_img_bg">

    <div class="header_title_block">

    <p class="header_title">${title}</p>
    <p class="header_subtitle">${subTitle}</p>
    <button class="header_btn_Primary">${btnPrimary}</button>
    </div>
    
    </div>
    `
}
