import video from "../../../../public/icon/video.png"



export const Section2 = () => {
    return`
        <section class="section_stories">
        
        <div class="stories_title">
    
            <div class="stories_text">
            <h1 class="stories_h1">Let's hear about Kayla's success story</h1>
            <p class="stories_text_p">See how well Alivio works in a real customer’s life. </p>
            <button class="stories_btn">Let’s get started</button>
            </div>
    
            <div class="stories_video">
            <img src="${video}" alt="video">
            </div>
        </div>
        </section>

    `
}
