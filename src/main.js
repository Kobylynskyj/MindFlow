import {Header,Main,Footer,Modal,initModalLogic, initBurger,} from './components'
import { InitRouter } from './Router'

import './style.css'


const renderApp = (Page,currentPath) => {

    document.querySelector('#app').innerHTML = `
    ${Header(currentPath)}
    ${Main(Page)}
    ${Footer()}
    ${Modal()}
    `
    initModalLogic()
    initBurger()
}  

InitRouter(renderApp)


