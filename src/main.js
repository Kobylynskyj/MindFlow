import {Header,Main,Footer} from './components'
import { InitRouter } from './Router'
import './style.css'


const renderApp = (Page,currentPath) => {

    document.querySelector('#app').innerHTML = `
    ${Header(currentPath)}
    ${Main(Page)}
    ${Footer()}
    `
    
}  

InitRouter(renderApp)



