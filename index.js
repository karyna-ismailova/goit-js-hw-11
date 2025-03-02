import{a as u,S as f,i as d}from"./assets/vendor-D_Kruy52.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const y="49130705-dcf2ba3ffc1780735e7549732",m="https://pixabay.com/api/";async function h(n){return u.get(m,{params:{key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(r){return r.data.hits}).catch(function(r){return console.error("Error fetching images:",r),[]})}const g=new f(".gallery a"),i=document.querySelector(".loader");function p(n){const r=document.querySelector(".gallery");r.innerHTML=n.map(t=>`
        <li class = "list">
        <a href="${t.largeImageURL}" class="gallery-item">
            <img src="${t.webformatURL}" alt="${t.tags}">
            <ul class="info">
                <li>Likes<br>${t.likes}</li>
                <li>Views<br>${t.views}</li>
                <li>Comments<br>${t.comments}</li>
                <li>Downloads<br>${t.downloads}</li>
            </ul>
        </a></li>
    `).join(""),g.refresh()}function c(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function L(){i&&(i.style.display="block")}function a(){i&&(i.style.display="none")}document.querySelector(".search-form").addEventListener("submit",function(n){n.preventDefault();const r=n.target.elements.searchQuery.value.trim(),t=document.querySelector(".gallery");if(t.innerHTML="",!r){c();return}L(),h(r).then(function(s){a(),s.length>0?p(s):c()}).catch(function(s){a(),c()})});
//# sourceMappingURL=index.js.map
