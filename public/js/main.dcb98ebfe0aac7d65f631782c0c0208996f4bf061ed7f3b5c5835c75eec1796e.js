"use strict";(()=>{var v=function(n,a,u){for(let l=0,m=n.length;l<m;l++)n[l].addEventListener(a,u)},g=document.querySelector("[data-navbar]"),y=document.querySelectorAll("[data-nav-toggler]"),S=()=>{g.classList.toggle("active"),document.body.classList.toggle("nav-active")};v(y,"click",S);var d=document.querySelector("[data-header]"),r=document.querySelector("[data-back-top-btn]");window.addEventListener("scroll",()=>{window.scrollY>100?(d.classList.add("active"),r.classList.add("active")):(d.classList.remove("active"),r.classList.remove("active"))});var i=document.querySelector("[data-slider]"),t=document.querySelector("[data-slider-container]"),f=document.querySelector("[data-slider-prev]"),L=document.querySelector("[data-slider-next]"),s=Number(getComputedStyle(i).getPropertyValue("--slider-items")),o=t.childElementCount-s,e=0,c=function(){t.style.transform=`translateX(-${t.children[e].offsetLeft}px)`},E=function(){e>=o?e=0:e++,c()};L.addEventListener("click",E);var b=function(){e<=0?e=o:e--,c()};f.addEventListener("click",b);window.addEventListener("resize",function(){s=Number(getComputedStyle(i).getPropertyValue("--slider-items")),o=t.childElementCount-s,c()});})();
