import { Section1 } from './components'
import { Header } from './components/Header'


import './style.css'



document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Section1()}
`


