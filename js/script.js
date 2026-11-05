document.querySelectorAll('.contact-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();alert('Thank you. Your enquiry form is ready to be connected to the KnowThingAI backend.');}));
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");

    if (mainNav.classList.contains("active")) {
      menuToggle.textContent = "✕";
    } else {
      menuToggle.textContent = "☰";
    }
  });
}

// Floating quick navigation
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.page-menu-toggle');
 const panel=document.querySelector('.page-side-menu');
 const close=document.querySelector('.page-menu-close');
 const backdrop=document.querySelector('.page-menu-backdrop');
 if(!toggle||!panel||!backdrop)return;
 const setOpen=(open)=>{panel.classList.toggle('open',open);backdrop.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));panel.setAttribute('aria-hidden',String(!open));};
 toggle.addEventListener('click',()=>setOpen(!panel.classList.contains('open')));
 close?.addEventListener('click',()=>setOpen(false));
 backdrop.addEventListener('click',()=>setOpen(false));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false);});
 panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
});
