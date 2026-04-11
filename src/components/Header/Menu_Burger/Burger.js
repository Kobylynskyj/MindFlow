
export const initBurger = () => {

    const burger = document.querySelector(".burger")
    const  navList = document.querySelector(".nav-list")
    
    burger.addEventListener('click', () => {
        navList.addEventListener('active')
        burger.classList.toggle('toggle');
        
    })
}