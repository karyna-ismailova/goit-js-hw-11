import{a as c,S as u,i as f}from"./assets/vendor-D_Kruy52.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="49130705-dcf2ba3ffc1780735e7549732",m="https://pixabay.com/api/";async function y(s){try{return(await c.get(m,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error fetching images:",t),[]}}const p=new u(".gallery a"),i=document.querySelector(".loader");function h(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(r=>`
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
    `).join(""),p.refresh()}function l(){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function g(){i&&(i.style.display="block")}function b(){i&&(i.style.display="none")}document.querySelector(".search-form").addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();g();const r=await y(t);if(b(),r.length>0?h(r):l(),!t){l();return}});
//# sourceMappingURL=index.js.map
