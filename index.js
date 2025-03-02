import{a as u,S as f,i as d}from"./assets/vendor-D_Kruy52.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="49130705-dcf2ba3ffc1780735e7549732",y="https://pixabay.com/api/";async function h(n){return u.get(y,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(t){return t.data.hits}).catch(function(t){return console.error("Error fetching images:",t),[]})}const p=new f(".gallery a"),s=document.querySelector(".loader");function g(n){const t=document.querySelector(".gallery");t.innerHTML=n.map(r=>`
        <li class = "list">
        <a href="${r.largeImageURL}" class="gallery-item">
            <img src="${r.webformatURL}" alt="${r.tags}">
            <ul class="info">
                <li>Likes<br>${r.likes}</li>
                <li>Views<br>${r.views}</li>
                <li>Comments<br>${r.comments}</li>
                <li>Downloads<br>${r.downloads}</li>
            </ul>
        </a></li>
    `).join(""),p.refresh()}function l(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function b(){s&&(s.style.display="block")}function a(){s&&(s.style.display="none")}document.querySelector(".search-form").addEventListener("submit",function(n){n.preventDefault();const t=n.target.elements.searchQuery.value.trim();if(!t){l();return}b(),h(t).then(function(r){a(),r.length>0?g(r):l()}).catch(function(r){a(),l()})});
//# sourceMappingURL=index.js.map
