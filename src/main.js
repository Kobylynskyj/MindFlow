
import { Main } from './components/Main'
import { Header } from './components/Header'
import './style.css'
import { Section1 } from './components/Section1'
import { Section2 } from './components'




document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main()}
    ${Section1()}
    ${Section2()}
`


