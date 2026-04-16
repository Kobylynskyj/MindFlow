


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
    const modal = document.querySelector('#auth-modal');
    const closeBtn = document.querySelector('#close-modal');
    const body = document.body;
    
    
    const allSignInButtons = document.querySelectorAll('.button_sing_in');
    const savedEmail = localStorage.getItem('userEmail');

    allSignInButtons.forEach(btn => {

        if (savedEmail) {
            btn.textContent = savedEmail;
        }

        btn.onclick = () => {
            if (modal) {
                modal.style.display = 'flex';
                body.style.overflow = 'hidden';
            }
        };
    });

    if (closeBtn && modal) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        };
    }


    const form = document.querySelector('form');
    if (form) {
        form.onsubmit = (event) => {
            event.preventDefault();
            const inputEmail = document.querySelector('input[type="email"]');
            
            if (inputEmail) {
                const emailValue = inputEmail.value;
                
                // Зберігаємо в пам'ять
                localStorage.setItem('userEmail', emailValue);
                
                // ОНОВЛЮЄМО ТЕКСТ НА ВСІХ КНОПКАХ ОДНОЧАСНО
                allSignInButtons.forEach(btn => {
                    btn.textContent = emailValue;
                });

                modal.style.display = 'none';
                body.style.overflow = 'auto';
                alert("Email saved!");
            }
        };
    }
};
