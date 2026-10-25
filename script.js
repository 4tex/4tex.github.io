const themeBtn=document.getElementById('theme-btn');
const chart=document.getElementById('githubChart');
const root=document.documentElement;
function applyTheme(t){
  root.setAttribute('data-theme',t);
  themeBtn.textContent=t==='dark'?'light':'dark';
  if(chart){chart.src=t==='dark'?chart.dataset.darkSrc:chart.dataset.lightSrc;}
}
let saved='dark';
try{saved=localStorage.getItem('theme')||'dark';}catch(e){}
applyTheme(saved);
themeBtn.addEventListener('click',()=>{
  const next=root.getAttribute('data-theme')==='dark'?'light':'dark';
  applyTheme(next);
  try{localStorage.setItem('theme',next);}catch(e){}
});