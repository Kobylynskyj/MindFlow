import {Header,Main,Footer} from './components'
import { InitRouter } from './Router'
import './style.css'


const renderApp = (Page) => {

    document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main(Page)}
    ${Footer()}
    `
    
}  

InitRouter(renderApp)



