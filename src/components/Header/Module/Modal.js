


export const Modal = () => {
    return /*HTML*/`
    <div id="auth-modal" class="modal-overlay">
    <div class="modal-content">
    <button id="close-modal" class="close-btn">X</button>
    <form id="reg-form">
    <h2 class="modal-title">Sign In</h2>
    <input type="email" id="email" placeholder="Email" required>

    
    <div class="input-group">
    <input type="password"  id="password" placeholder="Password" required>
    </div>
    <button type="submit" class="submit-btn">Continue</button>
    </form>
    </div>
    </div
    `
};

export const initModalLogic = () => {
    const modal = document.querySelector('#auth-modal')
    const openBtn = document.querySelector('#open-modal')
    const closeBtn = document.querySelector('#close-modal')
    const body = document.body

    const savedEmail = localStorage.getItem('userEmail')
    if(savedEmail && openBtn){
        openBtn.textContent = savedEmail
    }

    if(openBtn && modal && closeBtn){
        openBtn.onclick = () => {
            modal.style.display = 'flex';
            body.style.overflow = 'hidden';

        };
        
        const form = document.querySelector('form')
        const inputEmeil = document.querySelector('input[type="email"]')
        const inputPasssword = document.querySelector('input[type="password"]')
        if(form){
            form.onsubmit = (event) => {
                event.preventDefault()
                const emailValue = inputEmeil.value
                const passwordValue = inputPasssword.value
                
                if(!emailValue.includes("@")) {
                    alert("Please enter valid email.")
                    return;
                }

                if(passwordValue.length < 6 ) {
                    alert("The password must be longer that 6")
                    return;
                }
                localStorage.setItem('userEmail', emailValue)
                openBtn.textContent = emailValue
                alert("Email saved")

                
                
            }
        }

        closeBtn.onclick = () => {
            modal.style.display = 'none'
            body.style.overflow = 'auto'
        }

        window.onclick = (event) => {
        if(event.target === modal) {
            modal.style.display = 'none'
            body.style.overflow = 'auto'
        }
        }
    }
}