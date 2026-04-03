
import logo from "../../../public/logo.svg"
import { Nav } from "./Nav/Nav"



const btnSingIn = "Sing in"
const btnStartTrial = "Start Trial"

//Header title
const title = "Be aware, Manage well."
const subTitle = "Everyone experiences stress in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress."
const btnPrimary ="Find Your Way" 

export const Header = (currentPath) => {
    return `
    <header class="Header">
    
    <img src="${logo}" alt="">
    ${Nav(currentPath)}

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
