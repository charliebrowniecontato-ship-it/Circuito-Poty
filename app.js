let q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];let io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}}),{threshold:.15});qa('.fade').forEach(x=>io.observe(x));qa('.hero h1,.ttl').forEach(el=>{let t=el.textContent.trim();el.textContent='';let w=document.createElement('span');w.className='liq';w.innerHTML='<b>'+t+'</b><i aria-hidden="true">'+t+'</i>';el.appendChild(w)});let li=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('fill');li.unobserve(e.target)}}),{threshold:.35});qa('.liq').forEach(x=>li.observe(x));let wn=q('.waternum');if(wn){let wi=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('go');wi.unobserve(e.target)}}),{threshold:.45});wi.observe(wn)};let S=[['Março de 2026','150+','Jovens alcançados na primeira edição.','Educação ambiental, mobilização, oficinas, formações e ação territorial em Natal/RN.','/assets/images/lancamento-circuito-poty.png'],['Impacto real','1ª edição','Educação ambiental que se transforma em ação.','Oficinas, formações e ações coletivas aproximaram juventudes dos territórios.','/assets/images/impacto-real.jpg'],['Formação','Oficinas','Conhecimento compartilhado no território.','Educação popular, participação e formação de agentes multiplicadores.','/assets/images/formacao.jpg']];let impactCache=new Map(),impactRequest=0;function warmImpact(){S.forEach(s=>{let im=new Image();im.decoding='async';im.src=s[4];impactCache.set(s[4],im)})}(window.requestIdleCallback||function(fn){setTimeout(fn,300)})(warmImpact);qa('.tab').forEach((b,i)=>{b.addEventListener('mouseenter',()=>{let s=S[i],im=impactCache.get(s[4]);if(!im){im=new Image();im.src=s[4];impactCache.set(s[4],im)}});b.onclick=()=>{let request=++impactRequest;qa('.tab').forEach(x=>{x.classList.remove('on');x.setAttribute('aria-selected','false');x.tabIndex=-1});b.classList.add('on');b.setAttribute('aria-selected','true');b.tabIndex=0;q('#impact-panel').setAttribute('aria-labelledby',b.id);let s=S[i],target=q('#si'),pre=impactCache.get(s[4])||new Image();if(!pre.src)pre.src=s[4];let apply=()=>{if(request!==impactRequest)return;target.src=s[4];target.alt=s[2];q('#sk').textContent=s[0];q('#sm').textContent=s[1];q('#st').textContent=s[2];q('#sx').textContent=s[3]};if(pre.complete)apply();else{pre.onload=apply;pre.onerror=apply}}});let g=q('#gal'),slides=qa('#gal .slide'),auto=null,paused=false,galleryHovered=false,galleryFocused=false;const motion=window.matchMedia('(prefers-reduced-motion: reduce)');function nextGal(dir=1){if(!g)return;let nearEnd=g.scrollLeft+g.clientWidth>=g.scrollWidth-24;if(dir>0&&nearEnd){g.scrollTo({left:0,behavior:motion.matches?'auto':'smooth'})}else if(dir<0&&g.scrollLeft<=24){g.scrollTo({left:g.scrollWidth,behavior:motion.matches?'auto':'smooth'})}else{g.scrollBy({left:g.clientWidth*.72*dir,behavior:motion.matches?'auto':'smooth'})}}q('#n').onclick=()=>{nextGal(1);startAuto()};q('#p').onclick=()=>{nextGal(-1);startAuto()};function startAuto(){clearInterval(auto);auto=null;if(motion.matches||document.hidden)return;auto=setInterval(()=>{if(!paused&&!galleryHovered&&!galleryFocused&&!am.classList.contains('open')&&!document.hidden)nextGal(1)},3200)}if(g){g.addEventListener('mouseenter',()=>{galleryHovered=true;paused=true});g.addEventListener('mouseleave',()=>{galleryHovered=false;paused=false});g.addEventListener('focusin',()=>{galleryFocused=true;paused=true});g.addEventListener('focusout',e=>{galleryFocused=g.contains(e.relatedTarget);paused=galleryFocused});g.addEventListener('pointerdown',()=>{paused=true;setTimeout(()=>paused=false,3000)});startAuto()}let am=q('#assetModal'),ai=q('#assetImg'),at=q('#assetTitle'),ax=q('#assetText'),ac=q('#assetClose');function openAsset(sl){let im=sl.querySelector('img');ai.src=im.src;ai.alt=im.alt||sl.dataset.title;at.textContent=sl.dataset.title||'';ax.textContent=sl.dataset.text||'';am.classList.add('open');am.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';paused=true;ac.focus({preventScroll:true})}function closeAsset(){am.classList.remove('open');am.setAttribute('aria-hidden','true');document.body.style.overflow='';paused=false}slides.forEach(sl=>{sl.addEventListener('click',()=>openAsset(sl));sl.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openAsset(sl)}})});ac.onclick=closeAsset;am.addEventListener('click',e=>{if(e.target===am)closeAsset()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&am.classList.contains('open'))closeAsset()});
// Preserve the approved visual effects while making keyboard and motion behavior reliable.
motion.addEventListener('change',startAuto);
document.addEventListener('visibilitychange',startAuto);
qa('.tab').forEach((tab,index,all)=>tab.addEventListener('keydown',event=>{
  let next;
  if(event.key==='ArrowRight')next=(index+1)%all.length;
  else if(event.key==='ArrowLeft')next=(index+all.length-1)%all.length;
  else if(event.key==='Home')next=0;
  else if(event.key==='End')next=all.length-1;
  else return;
  event.preventDefault();all[next].focus();all[next].click();
}));
slides.forEach(slide=>slide.setAttribute('aria-label',slide.dataset.title));
let assetReturnFocus=null,assetPreviousOverflow='';
const originalOpenAsset=openAsset,originalCloseAsset=closeAsset;
openAsset=slide=>{
  assetReturnFocus=slide;assetPreviousOverflow=document.body.style.overflow;
  originalOpenAsset(slide);
  qa('header,main,footer').forEach(element=>element.inert=true);
  ac.focus({preventScroll:true});
};
closeAsset=()=>{
  if(!am.classList.contains('open'))return;
  originalCloseAsset();document.body.style.overflow=assetPreviousOverflow;
  qa('header,main,footer').forEach(element=>element.inert=false);
  if(assetReturnFocus?.isConnected)assetReturnFocus.focus({preventScroll:true});
  startAuto();
};
ac.onclick=()=>closeAsset();
document.addEventListener('keydown',event=>{
  if(event.key!=='Tab'||!am.classList.contains('open'))return;
  const focusable=[...am.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),[tabindex="0"]')];
  const first=focusable[0],last=focusable[focusable.length-1];
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
});
