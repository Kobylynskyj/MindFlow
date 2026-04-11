import logo from "../../../public/logo.svg"
import { Nav } from "./Nav/Nav"



const btnSingIn = "Sing in"
const btnStartTrial = "Start Trial"



export const Header = (currentPath) => {
    return `
    <header class="Header">
    
    <img src="${logo}" alt="">
    ${Nav(currentPath)}

    <div class="header_block_btn">
    <button id="open-modal" class="button_sing_in">${btnSingIn}</button>
    <button class="Start_Trial">${btnStartTrial}</button>
    </div>
    
    </header>
    
    
    
    `
}
