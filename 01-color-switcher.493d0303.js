const t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");let o=null;function r(){t.style.background=c()}e.addEventListener("click",(function(t){o=setInterval(r,700),e.disabled="true"})),n.addEventListener("click",(function(n){e.removeAttribute("disabled"),clearInterval(o);const r=t.getAttribute("style"),c=document.createElement("p");c.textContent=`You caught the color > ${r}`,console.log(c),e.before(c)}));const c=function(){return`#${Math.floor(16777215*Math.random()).toString(16)}`};
//# sourceMappingURL=01-color-switcher.493d0303.js.map