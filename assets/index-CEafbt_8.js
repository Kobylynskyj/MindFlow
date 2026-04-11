var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=()=>{let e=document.querySelector(`.burger`),t=document.querySelector(`.nav-list`);e.addEventListener(`click`,()=>{t.addEventListener(`active`),e.classList.toggle(`toggle`)})},u=()=>`
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
    `,d=()=>{let e=document.querySelector(`#auth-modal`),t=document.querySelector(`#open-modal`),n=document.querySelector(`#close-modal`),r=document.body,i=localStorage.getItem(`userEmail`);if(i&&t&&(t.textContent=i),t&&e&&n){t.onclick=()=>{e.style.display=`flex`,r.style.overflow=`hidden`};let i=document.querySelector(`form`),a=document.querySelector(`input[type="email"]`),o=document.querySelector(`input[type="password"]`);i&&(i.onsubmit=e=>{e.preventDefault();let n=a.value,r=o.value;if(!n.includes(`@`)){alert(`Please enter valid email.`);return}if(r.length<6){alert(`The password must be longer that 6`);return}localStorage.setItem(`userEmail`,n),t.textContent=n,alert(`Email saved`)}),n.onclick=()=>{e.style.display=`none`,r.style.overflow=`auto`},window.onclick=t=>{t.target===e&&(e.style.display=`none`,r.style.overflow=`auto`)}}},f=[{name:`Home`,link:`/`},{name:`About Us`,link:`/about`},{name:`Community`,link:`/community`},{name:`Pricing`,link:`#`}],p=()=>f.map(e=>`<a href="${e.link}">${e.name}<a>`).join(``),m=()=>`
    <div class="Footer">
    <div class="Footer_content">
    
    <h1 class="Alivio_footer">Alivio</h1>
    <nav class="Footer_nav">${p()}</nav>
    </div>
    <div class="map-wrapper">
    <iframe  id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4257.785813070811!2d14.433426616500196!3d50.11168026489778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470beb349d47320d%3A0x441ea30ea78d5326!2sTrojsk%C3%BD%20most!5e0!3m2!1sru!2scz!4v1775382472693!5m2!1sru!2scz" width="400" height="225" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div
    
    </div>
    `,h={text:`How it works`,title:`Understand & Release the stress in 3 steps`,subTitle:`Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.`,titleNavigition:`Personalize`,subtitleNevigation:`Answer a quick survey about how you express yourself, what causes you stress, and what area  would you like to work on. This way, we can fully personalize your journal!`,welcomeTextNavigation:`Write & Understand`,secondSubTitleNavigation:`Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!`,thirdSubTitleNavigation:`Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!`},g=()=>`
    <section class="wellcome_section">

    <div class="wellcome_section_title">

    <div class="wellcome_section_heroTitle"> 
    <p class="text_section">${h.text}</p>
    <h1 class="title_section">${h.title}</h1>
    </div>

    <div class="wellcome_section_subtitle">
    <p class="text_subtitle">${h.subTitle}</p>
    </div>
    </div>
    
    <div class="welcome_navigation">
    <div class="wellcome_first_navigation">

    <div class="wellcome_first_title">
    <div class="img_bg"></div>
    <p class="welcome_text">${h.titleNavigition}</p>
    </div>
    <div class="wellcome_first_text">
    <p class="wellcome_first_subtitle">${h.subtitleNevigation}</p>
    </div>
    <div class="wellcome_first_img">
    
    </div>
    </div>

    <div class="wellcome_second_navigation">

    <div class="wellcome_second_title">
    <div class="img_bg_second"></div>
    <p class="welcome_text">${h.welcomeTextNavigation}</p>
    </div>
    <div class="wellcome_first_text">
    <p class="wellcome_second_subtitle">${h.secondSubTitleNavigation}</p>
    </div>
    <div class="wellcome_second_img">
    
    </div>
    </div>

    <div class="wellcome_third_navigation">

    <div class="wellcome_third_title">
    <div class="img_bg_third"></div>
    <p class="welcome_text">${h.titleNavigition}</p>
    </div>
    <div class="wellcome_first_text">
    <p class="wellcome_third_subtitle">${h.thirdSubTitleNavigation}</p>
    </div>
    <div class="wellcome_third_img">
    
    </div>
    </div>
    </div>
    </div>
    </section>
    `,_={text:`Our product`,title:`You tell us your stress,We make your diary`,subtitle:`Everyone experiences it, and in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.`,textButton:`Find Your Way`},v=()=>`
         <section class="section_product_intro">
        <div class="section_our_product">
        
        <div class="avtar_img"></div>
        
        <div class="section_product_title">
        <p class="small_title"> ${_.text}</p>
        <h1 class="product_title">${_.title}</h1>
        <p class="product_subtitle">${_.subtitle}</p>

        <button class="btn_product">${_.textButton}</button>
        </div>
        
        </section>
    `,y=`/MindFlow/assets/video-HSCa-Ejc.png`,b=()=>`
        <section class="section_stories">
        
        <div class="stories_title">
    
            <div class="stories_text">
            <h1 class="stories_h1">Let's hear about Kayla's success story</h1>
            <p class="stories_text_p">See how well Alivio works in a real customer’s life. </p>
            <button class="stories_btn">Let’s get started</button>
            </div>
    
            <div class="stories_video">
            <img src="${y}" alt="video">
            </div>
        </div>
        </section>

    `,x=e=>`
        <main>
        ${e()}
        </main>
        `,S=`data:image/svg+xml,%3csvg%20width='80'%20height='24'%20viewBox='0%200%2080%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.18%201.44H13.05L22.29%2022.68H17.01L15.18%2018.18H6.93L5.16%2022.68H0L9.18%201.44ZM10.98%207.62L8.4%2014.22H13.59L10.98%207.62Z'%20fill='%2301996D'/%3e%3cpath%20d='M23.9163%200H28.4163V22.68H23.9163V0Z'%20fill='%2301996D'/%3e%3cpath%20d='M31.7093%208.1H36.2093V22.68H31.7093V8.1ZM31.3493%203.51C31.3493%202.79%2031.5993%202.18%2032.0993%201.68C32.6193%201.16%2033.2393%200.900001%2033.9593%200.900001C34.6793%200.900001%2035.2893%201.16%2035.7893%201.68C36.3093%202.18%2036.5693%202.79%2036.5693%203.51C36.5693%204.23%2036.3093%204.85%2035.7893%205.37C35.2893%205.87%2034.6793%206.12%2033.9593%206.12C33.2393%206.12%2032.6193%205.87%2032.0993%205.37C31.5993%204.85%2031.3493%204.23%2031.3493%203.51Z'%20fill='%2301996D'/%3e%3cpath%20d='M37.9123%208.1H42.7723L46.4623%2018H46.5223L49.9423%208.1H54.4723L48.7123%2022.68H43.9423L37.9123%208.1Z'%20fill='%2301996D'/%3e%3cpath%20d='M56.1722%208.1H60.6722V22.68H56.1722V8.1ZM55.8122%203.51C55.8122%202.79%2056.0622%202.18%2056.5622%201.68C57.0822%201.16%2057.7022%200.900001%2058.4222%200.900001C59.1422%200.900001%2059.7522%201.16%2060.2522%201.68C60.7722%202.18%2061.0322%202.79%2061.0322%203.51C61.0322%204.23%2060.7722%204.85%2060.2522%205.37C59.7522%205.87%2059.1422%206.12%2058.4222%206.12C57.7022%206.12%2057.0822%205.87%2056.5622%205.37C56.0622%204.85%2055.8122%204.23%2055.8122%203.51Z'%20fill='%2301996D'/%3e%3cpath%20d='M63.3652%2015.39C63.3652%2014.23%2063.5752%2013.18%2063.9952%2012.24C64.4152%2011.3%2064.9852%2010.5%2065.7052%209.84C66.4452%209.16%2067.3052%208.64%2068.2852%208.28C69.2852%207.92%2070.3452%207.74%2071.4652%207.74C72.5852%207.74%2073.6352%207.92%2074.6152%208.28C75.6152%208.64%2076.4752%209.16%2077.1952%209.84C77.9352%2010.5%2078.5152%2011.3%2078.9352%2012.24C79.3552%2013.18%2079.5652%2014.23%2079.5652%2015.39C79.5652%2016.55%2079.3552%2017.6%2078.9352%2018.54C78.5152%2019.48%2077.9352%2020.29%2077.1952%2020.97C76.4752%2021.63%2075.6152%2022.14%2074.6152%2022.5C73.6352%2022.86%2072.5852%2023.04%2071.4652%2023.04C70.3452%2023.04%2069.2852%2022.86%2068.2852%2022.5C67.3052%2022.14%2066.4452%2021.63%2065.7052%2020.97C64.9852%2020.29%2064.4152%2019.48%2063.9952%2018.54C63.5752%2017.6%2063.3652%2016.55%2063.3652%2015.39ZM67.8652%2015.39C67.8652%2016.49%2068.1752%2017.38%2068.7952%2018.06C69.4352%2018.74%2070.3252%2019.08%2071.4652%2019.08C72.6052%2019.08%2073.4852%2018.74%2074.1052%2018.06C74.7452%2017.38%2075.0652%2016.49%2075.0652%2015.39C75.0652%2014.29%2074.7452%2013.4%2074.1052%2012.72C73.4852%2012.04%2072.6052%2011.7%2071.4652%2011.7C70.3252%2011.7%2069.4352%2012.04%2068.7952%2012.72C68.1752%2013.4%2067.8652%2014.29%2067.8652%2015.39Z'%20fill='%2301996D'/%3e%3c/svg%3e`,C=[{path:`/`,name:`Home`},{path:`/about`,name:`About Us`},{path:`/community`,name:`Community`},{path:`/pricing`,name:`Pricing`}],w=e=>C.map(t=>`
    <a class="nav_links ${e===t.path?`active`:``}" href="${t.path}">${t.name}</a>
    `).join(``),T=e=>`
    <nav class=" Header_nav">
    ${w(e)}
    </nav>
    `,E=`Sing in`,D=`Start Trial`,O=e=>`
    <header class="Header">
    
    <img src="${S}" alt="">
    ${T(e)}

    <div class="header_block_btn">
    <button id="open-modal" class="button_sing_in">${E}</button>
    <button class="Start_Trial">${D}</button>
    </div>
    
    </header>
    
    
    
    `,k=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.page=r()})(e,(function(){var e=Array.isArray||function(e){return Object.prototype.toString.call(e)==`[object Array]`},t=v,n=s,r=c,i=l,a=_,o=new RegExp([`(\\\\.)`,`([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))`].join(`|`),`g`);function s(e){for(var t=[],n=0,r=0,i=``,a;(a=o.exec(e))!=null;){var s=a[0],c=a[1],l=a.index;if(i+=e.slice(r,l),r=l+s.length,c){i+=c[1];continue}i&&=(t.push(i),``);var u=a[2],f=a[3],p=a[4],m=a[5],h=a[6],g=a[7],_=h===`+`||h===`*`,v=h===`?`||h===`*`,y=u||`/`,b=p||m||(g?`.*`:`[^`+y+`]+?`);t.push({name:f||n++,prefix:u||``,delimiter:y,optional:v,repeat:_,pattern:d(b)})}return r<e.length&&(i+=e.substr(r)),i&&t.push(i),t}function c(e){return l(s(e))}function l(t){for(var n=Array(t.length),r=0;r<t.length;r++)typeof t[r]==`object`&&(n[r]=RegExp(`^`+t[r].pattern+`$`));return function(r){for(var i=``,a=r||{},o=0;o<t.length;o++){var s=t[o];if(typeof s==`string`){i+=s;continue}var c=a[s.name],l;if(c==null){if(s.optional)continue;throw TypeError(`Expected "`+s.name+`" to be defined`)}if(e(c)){if(!s.repeat)throw TypeError(`Expected "`+s.name+`" to not repeat, but received "`+c+`"`);if(c.length===0){if(s.optional)continue;throw TypeError(`Expected "`+s.name+`" to not be empty`)}for(var u=0;u<c.length;u++){if(l=encodeURIComponent(c[u]),!n[o].test(l))throw TypeError(`Expected all "`+s.name+`" to match "`+s.pattern+`", but received "`+l+`"`);i+=(u===0?s.prefix:s.delimiter)+l}continue}if(l=encodeURIComponent(c),!n[o].test(l))throw TypeError(`Expected "`+s.name+`" to match "`+s.pattern+`", but received "`+l+`"`);i+=s.prefix+l}return i}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,`\\$1`)}function d(e){return e.replace(/([=!:$\/()])/g,`\\$1`)}function f(e,t){return e.keys=t,e}function p(e){return e.sensitive?``:`i`}function m(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return f(e,t)}function h(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(v(e[i],t,n).source);return f(RegExp(`(?:`+r.join(`|`)+`)`,p(n)),t)}function g(e,t,n){for(var r=s(e),i=_(r,n),a=0;a<r.length;a++)typeof r[a]!=`string`&&t.push(r[a]);return f(i,t)}function _(e,t){t||={};for(var n=t.strict,r=t.end!==!1,i=``,a=e[e.length-1],o=typeof a==`string`&&/\/$/.test(a),s=0;s<e.length;s++){var c=e[s];if(typeof c==`string`)i+=u(c);else{var l=u(c.prefix),d=c.pattern;c.repeat&&(d+=`(?:`+l+d+`)*`),d=c.optional?l?`(?:`+l+`(`+d+`))?`:`(`+d+`)?`:l+`(`+d+`)`,i+=d}}return n||(i=(o?i.slice(0,-2):i)+`(?:\\/(?=$))?`),r?i+=`$`:i+=n&&o?``:`(?=\\/|$)`,RegExp(`^`+i,p(t))}function v(t,n,r){return n||=[],e(n)?r||={}:(r=n,n=[]),t instanceof RegExp?m(t,n,r):e(t)?h(t,n,r):g(t,n,r)}t.parse=n,t.compile=r,t.tokensToFunction=i,t.tokensToRegExp=a;var y=typeof document<`u`,b=typeof window<`u`,x=typeof history<`u`,S=typeof process<`u`,C=y&&document.ontouchstart?`touchstart`:`click`,w=b&&!!(window.history.location||window.location);function T(){this.callbacks=[],this.exits=[],this.current=``,this.len=0,this._decodeURLComponents=!0,this._base=``,this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}T.prototype.configure=function(e){var t=e||{};this._window=t.window||b&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&b,this._click=t.click!==!1&&y,this._hashbang=!!t.hashbang;var n=this._window;this._popstate?n.addEventListener(`popstate`,this._onpopstate,!1):b&&n.removeEventListener(`popstate`,this._onpopstate,!1),this._click?n.document.addEventListener(C,this.clickHandler,!1):y&&n.document.removeEventListener(C,this.clickHandler,!1),this._hashbang&&b&&!x?n.addEventListener(`hashchange`,this._onpopstate,!1):b&&n.removeEventListener(`hashchange`,this._onpopstate,!1)},T.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e},T.prototype._getBase=function(){var e=this._base;if(e)return e;var t=b&&this._window&&this._window.location;return b&&this._hashbang&&t&&t.protocol===`file:`&&(e=t.pathname),e},T.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e},T.prototype.start=function(e){var t=e||{};if(this.configure(t),!1!==t.dispatch){this._running=!0;var n;if(w){var r=this._window.location;n=this._hashbang&&~r.hash.indexOf(`#!`)?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(n,null,!0,t.dispatch)}},T.prototype.stop=function(){if(this._running){this.current=``,this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(C,this.clickHandler,!1),b&&e.removeEventListener(`popstate`,this._onpopstate,!1),b&&e.removeEventListener(`hashchange`,this._onpopstate,!1)}},T.prototype.show=function(e,t,n,r){var i=new A(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,!1!==n&&this.dispatch(i,a),!1!==i.handled&&!1!==r&&i.pushState(),i},T.prototype.back=function(e,t){var n=this;if(this.len>0){var r=this._window;x&&r.history.back(),this.len--}else setTimeout(e?function(){n.show(e,t)}:function(){n.show(n._getBase(),t)})},T.prototype.redirect=function(e,t){var n=this;typeof e==`string`&&typeof t==`string`&&D.call(this,e,function(e){setTimeout(function(){n.replace(t)},0)}),typeof e==`string`&&t===void 0&&setTimeout(function(){n.replace(e)},0)},T.prototype.replace=function(e,t,n,r){var i=new A(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),!1!==r&&this.dispatch(i,a),i},T.prototype.dispatch=function(e,t){var n=0,r=0,i=this;function a(){var e=i.exits[r++];if(!e)return o();e(t,a)}function o(){var t=i.callbacks[n++];if(e.path!==i.current){e.handled=!1;return}if(!t)return O.call(i,e);t(e,o)}t?a():o()},T.prototype.exit=function(e,t){if(typeof e==`function`)return this.exit(`*`,e);for(var n=new j(e,null,this),r=1;r<arguments.length;++r)this.exits.push(n.middleware(arguments[r]))},T.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n){for(var r=0;r<n.length;r++)if(n[r].nodeName&&n[r].nodeName.toUpperCase()===`A`&&n[r].href){t=n[r];break}}for(;t&&t.nodeName.toUpperCase()!==`A`;)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!==`A`)){var i=typeof t.href==`object`&&t.href.constructor.name===`SVGAnimatedString`;if(!(t.hasAttribute(`download`)||t.getAttribute(`rel`)===`external`)){var a=t.getAttribute(`href`);if(!(!this._hashbang&&this._samePath(t)&&(t.hash||a===`#`))&&!(a&&a.indexOf(`mailto:`)>-1)&&!(i?t.target.baseVal:t.target)&&!(!i&&!this.sameOrigin(t.href))){var o=i?t.href.baseVal:t.pathname+t.search+(t.hash||``);o=o[0]===`/`?o:`/`+o,S&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,`/`));var s=o,c=this._getBase();o.indexOf(c)===0&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace(`#!`,``)),!(c&&s===o&&(!w||this._window.location.protocol!==`file:`))&&(e.preventDefault(),this.show(s))}}}}},T.prototype._onpopstate=(function(){var e=!1;return b?(y&&document.readyState===`complete`?e=!0:window.addEventListener(`load`,function(){setTimeout(function(){e=!0},0)}),function(t){if(e){var n=this;if(t.state){var r=t.state.path;n.replace(r,t.state)}else if(w){var i=n._window.location;n.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}})(),T.prototype._which=function(e){return e||=b&&this._window.event,e.which==null?e.button:e.which},T.prototype._toURL=function(e){var t=this._window;if(typeof URL==`function`&&w)return new URL(e,t.location.toString());if(y){var n=t.document.createElement(`a`);return n.href=e,n}},T.prototype.sameOrigin=function(e){if(!e||!w)return!1;var t=this._toURL(e),n=this._window.location;return n.protocol===t.protocol&&n.hostname===t.hostname&&(n.port===t.port||n.port===``&&(t.port==80||t.port==443))},T.prototype._samePath=function(e){if(!w)return!1;var t=this._window.location;return e.pathname===t.pathname&&e.search===t.search},T.prototype._decodeURLEncodedURIComponent=function(e){return typeof e==`string`&&this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g,` `)):e};function E(){var e=new T;function t(){return D.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=E,Object.defineProperty(t,`len`,{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(t,`current`,{get:function(){return e.current},set:function(t){e.current=t}}),t.Context=A,t.Route=j,t}function D(e,t){if(typeof e==`function`)return D.call(this,`*`,e);if(typeof t==`function`)for(var n=new j(e,null,this),r=1;r<arguments.length;++r)this.callbacks.push(n.middleware(arguments[r]));else typeof e==`string`?this[typeof t==`string`?`redirect`:`show`](e,t):this.start(e)}function O(e){if(!e.handled){var t,n=this,r=n._window;t=n._hashbang?w&&this._getBase()+r.location.hash.replace(`#!`,``):w&&r.location.pathname+r.location.search,t!==e.canonicalPath&&(n.stop(),e.handled=!1,w&&(r.location.href=e.canonicalPath))}}function k(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,`\\$1`)}function A(e,t,n){var r=this.page=n||D,i=r._window,a=r._hashbang,o=r._getBase();e[0]===`/`&&e.indexOf(o)!==0&&(e=o+(a?`#!`:``)+e);var s=e.indexOf(`?`);this.canonicalPath=e;var c=RegExp(`^`+k(o));if(this.path=e.replace(c,``)||`/`,a&&(this.path=this.path.replace(`#!`,``)||`/`),this.title=y&&i.document.title,this.state=t||{},this.state.path=e,this.querystring=~s?r._decodeURLEncodedURIComponent(e.slice(s+1)):``,this.pathname=r._decodeURLEncodedURIComponent(~s?e.slice(0,s):e),this.params={},this.hash=``,!a){if(!~this.path.indexOf(`#`))return;var l=this.path.split(`#`);this.path=this.pathname=l[0],this.hash=r._decodeURLEncodedURIComponent(l[1])||``,this.querystring=this.querystring.split(`#`)[0]}}A.prototype.pushState=function(){var e=this.page,t=e._window,n=e._hashbang;e.len++,x&&t.history.pushState(this.state,this.title,n&&this.path!==`/`?`#!`+this.path:this.canonicalPath)},A.prototype.save=function(){var e=this.page;x&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!==`/`?`#!`+this.path:this.canonicalPath)};function j(e,n,r){var i=this.page=r||M,a=n||{};a.strict=a.strict||i._strict,this.path=e===`*`?`(.*)`:e,this.method=`GET`,this.regexp=t(this.path,this.keys=[],a)}j.prototype.middleware=function(e){var t=this;return function(n,r){if(t.match(n.path,n.params))return n.routePath=t.path,e(n,r);r()}},j.prototype.match=function(e,t){var n=this.keys,r=e.indexOf(`?`),i=~r?e.slice(0,r):e,a=this.regexp.exec(decodeURIComponent(i));if(!a)return!1;delete t[0];for(var o=1,s=a.length;o<s;++o){var c=n[o-1],l=this.page._decodeURLEncodedURIComponent(a[o]);(l!==void 0||!hasOwnProperty.call(t,c.name))&&(t[c.name]=l)}return!0};var M=E(),N=M;return N.default=M,N}))})),A=()=>`
    Pricing
    `,j=c(k(),1),M=async()=>{try{return await(await fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`)).json()}catch(e){return alert(`Something goes wrong, erroer`,e),[]}},N=()=>(setTimeout(async()=>{let e=await M(),t=document.querySelector(`.users-list`);t&&(t.innerHTML=e.map(e=>`
                <div class="user-card"  style=" max-width:700px; heigth:200px;
                    border: 1px solid #ccc; 
                    padding:10px;   gap:15px; border-radius:8px;
                    margin:10px;">
                <h2>${e.name}:<h2>
                <p> Email: ${e.email}</p>
                <p> City: ${e.address.city}</p>
                </div>
                `).join(``))},0),`
    <div class="community-container" style=" margin:25px; width:65%;background-color:#01996ecb;  padding:10px; border-radius:15px;">
    <h3 class="title_community" style="color:#fff;">Our community</h3>
    <div class="users-list" style="margin-left:30px;"></div>
    </div>
    `),P=`/MindFlow/assets/BG-Bf8M26XK.png`,F={title:`Be aware, Manage well.`,subtitle:`Everyone experiences stress in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.`,btnPrimary:`Find Your Way`},I=()=>`
        <div class="header_img_bg">
        <img src="${P}" alt="bg">
        <div class="header_title_block">

    <p class="header_title">${F.title}</p>
    <p class="header_subtitle">${F.subtitle}</p>
    <button class="header_btn_Primary">${F.btnPrimary}</button>
    </div>
    
    </div>
    `,L=()=>`
    ${I()}
    ${g()}
    ${b()}
    ${v()}
    `,R={title:`Our Founding Story`,subtitle:`Our Journey to Serenity`,titlefirst:`Concept Born`,subtitleFirst:`Coocept bem ane le do tos te tect foundece tsabe et tiecesoster of ede foundert'k founders.`,titleSecond:`Platform Launch`,subtitleSecond:`Let Pattonn Leunch and opsoning and community conund rew kneess.`,titleThird:`Community 100k`},z=()=>`
    <section class="Hero_About">
    <div class="Map">

    <div class="text">
    <p class="text_p">${R.title}</p>
    <h1 class="title_h1">${R.subtitle}</h1>
    </div>
    
    </div>
    
    <div class="content_Hero">

    
    
    
    <div class="second_content_Hero">
    
    <div class="first_content_Hero">
    <div class="first_block">
    <h2 class="title_first_block">${R.titlefirst}</h2>
    <p class="subtitle_first_block">${R.subtitleFirst}</p>
    </div>
    <div class="second_block">
    <h2 class="title_second_block">${R.titleSecond}</h2>
    <p class="subtitle_second_block">${R.subtitleSecond}</p>

    </div>

    <div class="third_content_Hero"
        
    <div class="third_block">
    <h1 class="title_third_block">2025</h1>
    <p class="subtitle_third_block">${R.titleThird}</p>
    </div>
    </div>

    </section>
`,B={subtitle:`Values & Philosophy`,title:`The  'Why' `,cards:[{title:`Empathy First Design`,text:`We prioritize the human experience in every pixel. Our design process starts with understanding user needs to create intuitive and meaningful digital interactions.`},{title:`Holistic Approach`,text:`Harmonizing mind, body, and technology. Our approach ensures that every element works in balance to provide a calm and focused user experience`},{title:`Mindful Innovation`,text:`Growing naturally and consciously. We evolve our platform by staying true to our core values while exploring new ways to enhance your daily journey.`}]},V=()=>B.cards.map(e=>`
    <div class="FutureCards">

    <h1 class="title_cards">${e.title}</h1>
    <p class="text_cards">${e.text}</p>
    </div>
    `).join(``),H=()=>`
    <section class="Section">
    <div class="FutureCards">
    <p class="Future_text">${B.subtitle}</p>
    <h1 class="Future_title">${B.title}<h1>
    </div>

    <div class="Section_cards">
    
    ${V()}
    </div>
    </section>
`,U=`/MindFlow/assets/family-9pqwD514.png`,W=[{title:`Looking Ahaed`,subtitle:`Building Alivo, together with you.`}],G=()=>W.map(e=>`
    
    <p class="title">${e.title}</p>
    <h3 class="subtitle">${e.subtitle}</h3>
    
        `).join(``),K=()=>`
    <section class="section_3">
    <div class="container_text">
    ${G()}
    </div>
    <div class="image_container"> 
    <img  src="${U}" alt="family" >
    </div>
    </section>
    `,q=()=>`
${z()}
${H()}
${K()}
`,J=()=>`
    Page404
    `;(e=>{(0,j.default)(`/`,t=>e(L,t.pathname)),(0,j.default)(`/about`,t=>e(q,t.pathname)),(0,j.default)(`/community`,t=>e(N,t.pathname)),(0,j.default)(`/pricing`,t=>e(A,t.pathname)),(0,j.default)(`*`,t=>e(J,t.pathname)),(0,j.default)()})((e,t)=>{document.querySelector(`#app`).innerHTML=`
    ${O(t)}
    ${x(e)}
    ${m()}
    ${u()}
    `,d(),l()});