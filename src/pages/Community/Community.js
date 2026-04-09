import { fetchPost } from "./Api"




export const Community = () => {
    const renderCommunity = async () => {
        const users = await fetchPost()
        const list = document.querySelector(".users-list")
        

        if(list) {
            list.innerHTML = users.map(user => `
                <div class="user-card"  style=" max-width:700px; heigth:200px;
                    border: 1px solid #ccc; 
                    padding:10px;   gap:15px; border-radius:8px;
                    margin:10px;">
                <h2>${user.name}:<h2>
                <p> Email: ${user.email}</p>
                <p> City: ${user.address.city}</p>
                </div>
                `).join('')
        }
    }

    setTimeout(renderCommunity, 0)

    return`
    <div class="community-container" style=" margin:25px; width:65%;background-color:#01996ecb;  padding:10px; border-radius:15px;">
    <h3 class="title_community" style="color:#fff;">Our community</h3>
    <div class="users-list" style="margin-left:30px;"></div>
    </div>
    `
};