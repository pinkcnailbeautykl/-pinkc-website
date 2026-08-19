
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
}

document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    const panel=document.getElementById(btn.dataset.tab);
    if(panel) panel.classList.add('active');
  });
});

const filterBtns=document.querySelectorAll('.filter-btn');
const workCards=document.querySelectorAll('.work-card');
filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    workCards.forEach(c=>c.classList.toggle('hidden',f!=='all' && c.dataset.category!==f));
  });
});

const lightbox=document.querySelector('.lightbox');
if(lightbox){
  const lightboxImg=lightbox.querySelector('img');
  const close=()=>{lightbox.classList.remove('open');lightboxImg.src='';};
  workCards.forEach(c=>c.addEventListener('click',()=>{
    const img=c.querySelector('img');
    lightboxImg.src=img.src;
    lightboxImg.alt=img.alt;
    lightbox.classList.add('open');
  }));
  lightbox.addEventListener('click',e=>{if(e.target===lightbox || e.target.tagName==='BUTTON') close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape') close();});
}
