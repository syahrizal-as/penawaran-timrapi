'use strict';
const format = new Intl.NumberFormat('id-ID');
const userCount = document.getElementById('user-count');
const userRange = document.getElementById('user-range');
const presets = [...document.querySelectorAll('[data-users]')];
function calculate(value) {
 const count = Math.min(100000, Math.max(1, Math.trunc(Number(value) || 1)));
 userCount.value = count;
 userRange.value = Math.min(500,count);
 document.getElementById('total-price').textContent = `Rp${format.format(count * 10000)}`;
 document.getElementById('calc-formula').textContent = `${format.format(count)} pengguna × Rp10.000`;
 presets.forEach(button => {const selected=Number(button.dataset.users)===count; button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));});
}
userCount.addEventListener('input',()=>{if(userCount.value !== '')calculate(userCount.value);});
userCount.addEventListener('blur',()=>calculate(userCount.value));
userRange.addEventListener('input',()=>calculate(userRange.value));
presets.forEach(button=>button.addEventListener('click',()=>calculate(button.dataset.users)));
calculate(135);
const expandButton=document.getElementById('expand-features');
const features=[...document.querySelectorAll('.feature')];
function updateExpand(){const allOpen=features.every(detail=>detail.open);expandButton.textContent=allOpen?'Tutup semua fitur':'Buka semua fitur';expandButton.setAttribute('aria-expanded',String(allOpen));}
expandButton.addEventListener('click',()=>{const open=!features.every(detail=>detail.open);features.forEach(detail=>detail.open=open);updateExpand();});
features.forEach(detail=>detail.addEventListener('toggle',updateExpand));
const links=[...document.querySelectorAll('.nav-link')];
const targets=links.map(link=>document.querySelector(link.getAttribute('href')));
function updateReading(){const available=document.documentElement.scrollHeight-innerHeight;document.getElementById('reading-progress').style.width=(available>0?scrollY/available*100:0)+'%';let current=targets[0];targets.forEach(section=>{if(section.getBoundingClientRect().top<=innerHeight*.4)current=section;});links.forEach(link=>{const active=link.hash==='#'+current.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
window.addEventListener('scroll',updateReading,{passive:true});window.addEventListener('resize',updateReading);updateReading();
let printState=null;
function preparePrint(){if(printState)return;printState=[...document.querySelectorAll('details')].map(detail=>({detail,open:detail.open}));printState.forEach(({detail})=>detail.open=true);}
function restorePrint(){if(!printState)return;printState.forEach(({detail,open})=>detail.open=open);printState=null;updateExpand();}
window.addEventListener('beforeprint',preparePrint);window.addEventListener('afterprint',restorePrint);
document.getElementById('print-button').addEventListener('click',()=>{preparePrint();window.print();});
