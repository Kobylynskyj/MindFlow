import { Header } from './components/Header'
import { Main } from './components/Main'

import './style.css'



document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main()}
`


