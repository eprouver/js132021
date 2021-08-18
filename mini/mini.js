const showChoose=()=>{clear(),timeouts.forEach(e=>clearTimeout(e)),cont.classList.remove("end"),root.style.display="flex",say(options[options.lang].ff),fi("nc",options[options.lang].newCase),fi("cf",options[options.lang].ff),fi("ch",options[options.lang].ch),fi("peplabel",options[options.lang].p),fi("catlabel",options[options.lang].c),fi("create",options[options.lang].cr),fi("com",options[options.lang].com),fi("com2",options[options.lang].com)},chooseGame=()=>{clear(),root.style.display="none",addGame(gi("people"),gi("cats")).then(e=>startNewGame(e))},menu=document.getElementById("menu"),pauseGame=()=>{say(""),pause=!0,games=[],clear(),menu.style.display="flex",cont.classList.remove("end"),timeouts.forEach(e=>clearTimeout(e))};let tutorial=!1;const clear=()=>{workbook.innerHTML="",matrix.innerHTML="",menu.style.display="none"},makeGames=()=>{clear(),pause=!1,games=[],tutorial||addGame(1,2).then(e=>games.push(e)),timeout(()=>{for(let e=2;e<5;e++)for(let t=2;t<5;t++)addGame(~~e,~~t).then(e=>games.push(e))},tutorial?0:1e3),tutorial=!0,files=0,startNewGame()};let files=0;const startNewGame=e=>{if(!e&&(files+=1)%options.files==0)return clear(),timeouts.forEach(e=>clearTimeout(e)),cont.classList.remove("end"),root.style.display="flex",say(options[options.lang].ff),fi("nc",options[options.lang].newCase),fi("cf",options[options.lang].ff),fi("ch",options[options.lang].ch),fi("peplabel",options[options.lang].p),fi("catlabel",options[options.lang].c),fi("create",options[options.lang].cr),fi("com",options[options.lang].com),fi("com2",options[options.lang].com),void(files=1);if(workbook.setAttribute("data-msg",`${options[options.lang].wellDone}`),clear(),currentGame&&games.length<4){let e=9;const t=~~(4*Math.random()+3);addGame(t,e-t).then(e=>games.push(e))}0!==games.length?(selectNewVoice(),currentGame=e||games.shift(),sfx([,,-62,.02,.03,.23,,10.8,5.8,,200,-.07,,.3,2,,,1.3,.13,.3]),currentGame.setupGame(),cont.classList.remove("end"),timeout(()=>{setupWorkbook(currentGame)},500)):timeout(startNewGame,500)};function scroller(e){switch(e.deltaMode){case 0:wb.scrollTop+=e.deltaY,wb.scrollLeft+=e.deltaX;break;case 1:wb.scrollTop+=15*e.deltaY,wb.scrollLeft+=15*e.deltaX;break;case 2:wb.scrollTop+=.03*e.deltaY,wb.scrollLeft+=.03*e.deltaX}e.stopPropagation()}document.onwheel=scroller;const addGame=(e=2,t=2)=>new Promise(function(a,n){let s,o,i,r,l,c,p,d,u,m,f,h;const g=()=>{s=[...Array(e)].map(e=>({})),o=[],i=0,r=[],l=[],c=!1,p=!1,d=[],u=0,m=!1,f=[],h=[]};g();let $=options.cats,y=options.cNms,k=options.slotNames;k=sampleSize(e,k).map(e=>randSkinTone(e)).map(e=>randGender(e));const b=sampleSize(t,[...Array(y.length).keys()]);y=y.filter((e,t)=>-1!==b.indexOf(t)),$=$.filter((e,t)=>-1!==b.indexOf(t)).map(t=>sampleSize(e+2,t));const w=t*e,x=(e,t)=>{for(const a of Object.keys(t))if(e[a]&&e[a]!==t[a])return!1;return!0},C={*ti(e,t,a){for(const t of[...Array(a.length).keys()])yield*this.tiai(e,{index:t},a)},*tiai(e,t,a){if(x(a[t.index],e)){const n=JSON.parse(JSON.stringify(a));n[t.index]=Object.assign({},a[t.index],e),yield n}},*b(e,t,a){for(const n of[...Array(a.length-1).keys()])if(x(a[n],e)&&x(a[n+1],t)){const s=JSON.parse(JSON.stringify(a));s[n]=Object.assign({},a[n],e),s[n+1]=Object.assign({},a[n+1],t),yield s}},*a(e,t,a){for(const n of[...Array(a.length-1).keys()].map(e=>e+1))if(x(a[n],e)&&x(a[n-1],t)){const s=JSON.parse(JSON.stringify(a));s[n]=Object.assign({},a[n],e),s[n-1]=Object.assign({},a[n-1],t),yield s}},*nt(e,t,a){for(const n of[...Array(a.length-1).keys()])if(x(a[n],e)&&x(a[n+1],t)&&x(a[n+1],e)&&x(a[n],t)){const s=JSON.parse(JSON.stringify(a));s[n]=Object.assign({},a[n],e),s[n+1]=Object.assign({},a[n+1],t),yield s}t=[e,e=t][0];for(const n of[...Array(a.length-1).keys()])if(x(a[n],e)&&x(a[n+1],t)&&x(a[n+1],e)&&x(a[n],t)){const s=JSON.parse(JSON.stringify(a));s[n]=Object.assign({},a[n],e),s[n+1]=Object.assign({},a[n+1],t),yield s}}},N=e=>{let t=!1;const a={};return e.reduce(function(e,n){for(var s in n)a[s]||(a[s]=[]),a[s].indexOf(n[s])>-1&&(t=!0),a[s].push(n[s]),e[s]=n[s];return e},{}),t};const v=()=>{const e=[];for(const t of function*e(t,a){if(0===(t=t.map(e=>"function"==typeof e?e:t=>C[e.type](e.d[0],e.d[1],t))).length){if(N(a))return void(yield!1);yield a}else{const[n,...s]=t;for(const t of n(a))yield*e(s,t)}}(o,s))e.push(t);return e.filter(e=>e)},G=(e=null,t,a)=>{if(t>100){const e=ce("div");return e.classList.add("clue"),e.innerHTML=`<h3>${options[options.lang].noMore}</h3>`,void workbook.appendChild(e)}let n,o,i={},r={};const l=(e="",t=1)=>{const a=sample(y.filter(t=>t!==e)),n=$[y.indexOf(a)];return{key:a,.d1===t?sample(n):sampleSize(t,n)}};switch(e||sample([...Array(options.clueTypes.length)].map((e,t)=>t))){case 0:i[(n=l()).key]=n.d,i[(n=l(n.key)).key]=n.d,o={type:options.clueTypes[0],.d[i,{.d[]}]};break;case 1:i[(n=l()).key]=n.d,r={index:~~(Math.random()*s.length)},o={type:options.clueTypes[1],.d[i,r]};break;case 2:i[(n=l("",2)).key]=n.d[0],r[n.key]=n.d[1],o={type:options.clueTypes[2],.d[i,r]};break;case 3:i[(n=l("",2)).key]=n.d[0],r[n.key]=n.d[1],o={type:options.clueTypes[3],.d[r,i]};break;case 4:i[(n=l()).key]=n.d,r[(n=l(n.key)).key]=n.d,o={type:options.clueTypes[4],.d[i,r]}}d.some(e=>checkToString(e)===checkToString(o.d))?requestAnimationFrame(()=>{G(e,++t,a)}):(d.push(o.d),a(o))},T=(n=null,d=0)=>{G(n,d,n=>{o.push(n);let b=v();if(0==b||!b[0])return o.pop(),void T(null,++d);const x=b[0].reduce((e,t)=>e+Object.keys(t).length,0);if((b.reduce((e,t)=>e.concat(t),[]).some(e=>[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length)||x===i)&&i<w)return o.length>8*s.length?(g(),void T()):(l.push(n),void requestAnimationFrame(()=>{T()}));if(i=x,!c)return l.push(n),(e=>{c||(c=!0,u=i,h.push({solution:e,selections:i}),r.push(l.slice(0)),l=[])})(b),void requestAnimationFrame(()=>{T()});if(c&&i<w)return l.push(n),i>Math.min(u+e,u+t)&&(e=>{p||(p=!0,h.push({solution:e,selections:i}),r.push(l.slice(0)),l=[])})(b),void requestAnimationFrame(()=>{T()});if(h.push({solution:b,selections:i}),m)return showClueArr([n]),void extraClueButton();l.push(n),r.push(l.slice(0)),m=!0,r.map(a=>(a=>{var n=[];let s;for(var o=0,i=a.length;o<i;o+=s)s=Math.max(1,~~(Math.random()*e+1),~~(Math.random()*t+1)),n.push(a.slice(o,o+s));return n})(a)).forEach((e,t)=>{e.forEach((a,n)=>{f.push({chore:"add chore",reward:n===e.length-1,.cb:h[t].solution,rewardClues:a})})}),o.length<=3&&(f[f.length-1].rewardClues=f.map(e=>e.rewardClues).reduce((e,t)=>e.concat(t)),f=f.slice(f.length-1)),a({slotNum:e,catNum:t,levels:f,extraClue:T,clues:o,setupGame:()=>{createMatrix()},cats:$,cNms:y,slotNames:k,attempts:0}),games=games.sort((e,t)=>e.clues.length-t.clues.length)})};T(1)});let userBoard=[];const createMatrix=()=>{userBoard=[];for(let e=0;e<currentGame.slotNum;e++)userBoard.push({});const e=ce("table"),t=ce("col");t.setAttribute("span",1),e.appendChild(t);let a=ce("tr"),n=ce("td");a.appendChild(n),currentGame.slotNames.forEach(e=>{const t=ce("th");t.classList.add("person"),t.innerHTML=`<span>${e}</span>`,a.appendChild(t)}),e.appendChild(a);currentGame.cats.forEach((t,s)=>{(a=ce("tr")).classList.add("mrow"),(n=ce("th")).innerHTML=currentGame.cNms[s],a.appendChild(n);const o=[options[options.lang].empty,...t];currentGame.slotNames.forEach((e,t)=>{const n=ce("td");n.classList.add("draggable");const i=ce("span");i.setAttribute("data-option",0),i.innerText=o[0],userBoard[t][currentGame.cNms[s]]={.doptions[options.lang].empty,span:i},n.onclick=(e=>{((e,t,a,n)=>{let s=e.innerText;(s=t[t.indexOf(s)+1])||(s=t[0]),sfx([.7,.45,82.40689,,,.02,,3,35,,100*(t.indexOf(s)+1)-150,-.06,,,,,,.5,.03,.21]),userBoard[a][n]={.ds,span:e},e.innerText=s,e.classList.remove("correct","incorrect"),e.setAttribute("data-option",t.indexOf(s))})(i,o,t,currentGame.cNms[s])}),n.appendChild(i),a.appendChild(n)}),e.appendChild(a),(a=ce("tr")).classList.add("mrow")}),(a=ce("tr")).classList.add("mrow"),a.appendChild(ce("td"));const s=ce("button");s.classList.add("clue"),s.onclick=(()=>{scoreMatrix()&&(s.parentNode.parentNode.parentNode.removeChild(s.parentNode.parentNode),workbook.innerHTML="",workbook.scroll(0,0),cont.classList.add("end"),say(options[options.lang].wellDone),sfx([1.4,,474,,.25,.63,1,1.145,-.3,,100,.09,.09,,,,.09,.4,.65]),pause=!0,timeout(()=>{pause=!1,workbook.innerHTML="",selectNewVoice(),startNewGame()},3e3))}),s.innerText="👍",(n=ce("td")).setAttribute("colspan",currentGame.slotNum),n.appendChild(s),a.appendChild(n),e.appendChild(a),matrix.appendChild(e)};let currentGame,sound=!0,pause=!1,games=[];const shuffle=e=>e.sort(()=>.5-Math.random()),timeouts=[],cont=document.getElementById("cont"),workbook=document.getElementById("wb"),matrix=document.getElementById("matrix"),root=document.getElementById("root"),gi=(e,t=3)=>parseInt(document.getElementById(e).value)||t,fi=(e,t)=>document.getElementById(e).innerText=t,ce=e=>document.createElement(e),timeout=(e,t)=>{timeouts.push(setTimeout(e,t))},options={lang:"en",files:5,clueTypes:["ti","tiai","a","b","nt"],cats:[["👓","👕","👘","🎩","👠","🧤","🧣","👒","🧢","👟","🩳"],["🎷","🎸","🎺","🎻","🪕","🥁","🎹"],["⚽","🏀","🏈","🎾","🥏","🏓","🥊","🎳","🏐"],["❤️","🧡","💛","💚","💙","💜","🖤","🤎","💔"],["🍇","🍉","🍊","🍎","🥝","🥥","🍐","🍑","🍒","🍋"],["🐒","🐕","🦝","🐈","🦓","🐄","🐖","🐪","🦒","🐘","🐁","🐇","🐿️","🦨","🦘"],["🥯","🍟","🍔","🍕","🧀","🍜","🍦","🍩","🍿"],["😍","😎","👿","🤔","😓","😷","🥺","😡","🤪","😀"]],slotNames:["🧟‍♂️","🦹🏽‍♂️","🦸🏽‍♂️","🧛🏽‍♂️","👷🏻‍♂️","👨🏽‍🎨","👨🏿‍💼","👨🏻‍🔧","👨🏾‍⚕️","👨🏼‍🌾","🧑🏻‍⚖️","👨🏾‍🔬","👨🏼‍🎤","👨🏽‍🚀","👮🏽‍♂️","👩🏽‍🍳","🧕🏼","💂🏽‍♂️","🧙🏼‍♂️","👰🏻","👩🏼‍✈️","🧝🏽‍♂️","👨🏾‍🚒","👩🏽‍🎓","👩🏼‍🏭"],en:{attempts:"Attempts",wellDone:"Well Done!",solvable:"Possible Solution.",empty:"space",noMore:"No more clues.",tutorial:"Tutorial: Use the prompts. Fill in the spaces.  Then 👍",newCase:"New Case!",p:"People",c:"cats",ch:"Choose",cr:"Create",com:"Community",ff:"Case Files"},tp:{attempts:"nanpa alasa",wellDone:"pona!",solvable:"ken li pini",empty:"ala",noMore:"pona ala",tutorial:"kama sona: sina kute e toki pi wile sona. tempo pini la sina luka e 👍",newCase:"utala sin",p:"jan",c:"ilo",ch:"pana",cr:"sin",com:"kulupu",ff:"utala mani"},fr:{attempts:"Essai #",wellDone:"Bien Joué!",solvable:"Résolution Possible.",empty:"espace",noMore:"Indices terminés.",tutorial:"Tutoriel: Utilisez les indices. Remplissez les espaces. Enfin appuyez sur 👍",newCase:"Nouveau Mystère!",p:"nombre de personnes",c:"Catégories",ch:"Choisir",cr:"Créer",com:"Communauté",ff:"Fichiers"},es:{attempts:"Prueba #",wellDone:"¡Bien Hecho!",solvable:"Resolución Posible.",empty:"espacio",noMore:"No más pistas.",tutorial:"Tutorial: Usa las pistas. Completa la información. Finalmente toca 👍",newCase:"Nuevo Misterio!",p:"Gente",c:"Categorías",ch:"Elegir",cr:"Crear",com:"Comunidad",ff:"Archivos"},"zh-CN":{attempts:"猜测 ＃",wellDone:"做得好!",solvable:"可以完成",empty:"空白",noMore:"没有了",tutorial:"教程：使用线索并完成信息。 终于摸了👍",newCase:"新谜底!",p:"人数",c:"类别数",ch:"选择",cr:"创建",com:"社区",ff:"文件"}},lang=(e,t=!0)=>{switch(pause=!1,t&&(sfx([.7,.45,82.40689,,,.02,,3,35,,-150,-.06,,,,,,.5,.03,.21]),e.target&&(e.target.classList.add("selected"),e=e?e.target.getAttribute("id"):"en")),options.lang=e,options.lang){case"tp":options.cNms=["len","kalama musi","musi utala","olin","kili","soweli","moku","pilin"];break;case"fr":options.cNms=["le vêtement","l'instrument","le sport","le cœur","le fruit","l'animal","la bouffe","le sentiment"];break;case"es":options.cNms=["la ropa","el instrumento","el deporte","el corazón","la fruta","el animal","la comida","el sentimiento"];break;case"zh-CN":options.cNms=["衣服","仪器","运动","心脏","水果","动物","食物","心情"];break;default:options.cNms=["clothes","instrument","sport","heart","fruit","animal","food","mood"]}};lang("en",!1),[...document.getElementsByClassName("lang")].forEach((e,t,a)=>{e.addEventListener("click",e=>{a.forEach(e=>e.classList.remove("selected")),lang(e)})});const checkToString=e=>e.map(e=>Object.keys(e).concat(Object.values(e))).flat().sort().join(),randBetween=(e,t)=>~~(Math.random()*(t-e+1)+e),sample=e=>{const t=null==e?0:e.length;return t?e[Math.floor(Math.random()*t)]:void 0},sampleSize=(e,t,a=[])=>e<1||t.length<1?a:shuffle(e>=t.length?[...a,...t]:Math.random()<e/t.length?sampleSize(e-1,t.slice(1),[...a,t[0]]):sampleSize(e,t.slice(1),a)),stMod=["🏻","🏼","🏽","🏾","🏿"],gMod=["👩","👨"],gMod2=["♂️","♀️"],findSkin=new RegExp("\ud83c[\udffb-\udfff]","g"),findGender=new RegExp(gMod.join("|"),"g"),findGender2=new RegExp(gMod2.join("|"),"g"),randSkinTone=e=>e.replace(findSkin,sample(stMod)),randGender=e=>e.replace(findGender,sample(gMod)).replace(findGender2,sample(gMod2));let det;const newDet=()=>{det=randSkinTone(randGender("🕵🏼‍♂️")),document.getElementById("det").innerText=det,document.title=`${det} Blanks - Reduce the space`,workbook.setAttribute("data-flair",`${det}`)};let voice;newDet();const selectNewVoice=()=>{(voice=(voice=window.speechSynthesis.getVoices().filter(e=>e.lang.indexOf(options.lang)>-1))[randBetween(0,voice.length)])||timeout(selectNewVoice,1e3)};selectNewVoice();const sfx=e=>{pause||sound&&zzfx(...e)};let say=e=>{if("tp"===options.lang)return;if(!sound)return;if(pause)return;selectNewVoice(),speechSynthesis.cancel();const t=new SpeechSynthesisUtterance;t.voice=voice,t.volume=3,t.rate=1,t.text=e.replace(new RegExp("cœur|corazón|heart","g"),""),t.lang=options.lang,speechSynthesis.speak(t)};zzfxV=.3,zzfx=((e=1,t=.05,a=220,n=0,s=0,o=.1,i=0,r=1,l=0,c=0,p=0,d=0,u=0,m=0,f=0,h=0,g=0,$=1,y=0,k=0)=>{let b,w,x=Math,C=44100,N=2*x.PI,v=l*=500*N/C/C,G=a*=(1-t+2*t*x.random(t=[]))*N/C,T=0,M=0,L=0,O=1,S=0,E=0,z=0;for(c*=500*N/C**3,f*=N/C,p*=N/C,d*=C,u=C*u|0,w=(n=C*n+9)+(y*=C)+(s*=C)+(o*=C)+(g*=C)|0;L<w;t[L++]=z)++E%(100*h|0)||(z=i?1<i?2<i?3<i?x.sin((T%N)**3):x.max(x.min(x.tan(T),1),-1):1-(2*T/N%2+2)%2:1-4*x.abs(x.round(T/N)-T/N):x.sin(T),z=(u?1-k+k*x.sin(N*L/u):1)*(0<z?1:-1)*x.abs(z)**r*e*zzfxV*(L<n?L/n:L<n+y?1-(L-n)/y*(1-$):L<n+y+s?$:L<w-g?(w-L-g)/o*$:0),z=g?z/2+(g>L?0:(L<w-g?1:(w-L)/g)*t[L-g|0]/2):z),T+=(b=(a+=l+=c)*x.cos(f*M++))-b*m*(1-1e9*(x.sin(L)+1)%2),O&&++O>d&&(a+=p,G+=p,O=0),!u||++S%u||(a=G,l=v,O=O||1);return(e=zzfxX.createBuffer(1,w,C)).getChannelData(0).set(t),(a=zzfxX.createBufferSource()).buffer=e,a.connect(zzfxX.destination),a.start(),a}),zzfxX=new(window.AudioContext||webkitAudioContext);const wordClues=e=>{const t=Object.keys(e.d[0]),a=Object.keys(e.d[1]||{});let n,s,o;switch(n=(currentGame.cats[currentGame.cNms.indexOf(t[0])]||[]).indexOf(e.d[0][t[0]])+1,s=(currentGame.cats[currentGame.cNms.indexOf(t[1])]||[]).indexOf(e.d[0][t[1]])+1,a.length&&(o=(currentGame.cats[currentGame.cNms.indexOf(a[0])]||[]).indexOf(e.d[1][a[0]])+1),options.lang){case"es":switch(e.type){case"ti":return`la persona con ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>, también tiene ${t[1]}  <span data-option="${s}">${e.d[0][t[1]]}</span>`;case"tiai":return`<span class="person">${currentGame.slotNames[e.d[1].index]}</span>tiene ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"b":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> está a la derecha de ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"a":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> está a la izquierda de ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"nt":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> está cerca de ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`}break;case"fr":switch(e.type){case"ti":return`la personne avec ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>, aussi tiens ${t[1]}  <span data-option="${s}">${e.d[0][t[1]]}</span>`;case"tiai":return`<span class="person">${currentGame.slotNames[e.d[1].index]}</span>tiens ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"b":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> est à droite de ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"a":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> est à gauche de ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"nt":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> est a coté de ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`}break;case"zh-CN":switch(e.type){case"ti":return`有 <span data-option="${n}">${e.d[0][t[0]]}</span> ${t[0]} 的人, 也有 <span data-option="${s}">${e.d[0][t[1]]}</span> 的${t[1]}  `;case"tiai":return`<span class="person">${currentGame.slotNames[e.d[1].index]}</span> 有 <span data-option="${n}">${e.d[0][t[0]]}</span> 的${t[0]}`;case"b":return`${a[0]} <span data-option="${o}">${e.d[1][a[0]]}</span> 在 ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span> 的右边`;case"a":return`${a[0]} <span data-option="${o}">${e.d[1][a[0]]}</span> 在 ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span> 的左边`;case"nt":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> 就在 ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span> 的旁边`}case"tp":switch(e.type){case"ti":return`jan li jo e ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>, kin jo e ${t[1]}  <span data-option="${s}">${e.d[0][t[1]]}</span>`;case"tiai":return`jan <span class="person">${currentGame.slotNames[e.d[1].index]}</span>li jo e ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"b":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> li lon poka pini e ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"a":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> li lon poka open e ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"nt":return`${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span> li lon poka e ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`}break;default:switch(e.type){case"ti":return`The one with ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>, also has ${t[1]}  <span data-option="${s}">${e.d[0][t[1]]}</span>`;case"tiai":return`<span class="person">${currentGame.slotNames[e.d[1].index]}</span>has ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>`;case"a":return`One left of ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>,\n        is ${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}`;case"b":return`One right of ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>, is ${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span>`;case"nt":return`Next to ${t[0]}  <span data-option="${n}">${e.d[0][t[0]]}</span>, is ${a[0]}  <span data-option="${o}">${e.d[1][a[0]]}</span>`}}},showClueArr=(e,t)=>{[...document.getElementsByClassName("loading")].forEach(e=>e.classList.remove("loading")),e.map(wordClues).forEach((e,t)=>{const a=ce("div");a.classList.add("waiting"),a.innerHTML="<div>🔍</div>",workbook.appendChild(a),timeout(()=>{a.classList.remove("waiting"),a.innerHTML="",timeout(()=>{a.onclick=(e=>{say(e.target.innerText.replace(findSkin,""))}),a.innerHTML=e,a.classList.add("clue"),sfx([2,0,60,.01,,.26,1,2.5,.2,,,,1,,,,,.3,.05]),say(a.innerText.replace(findSkin,""))},100)},clueTime*(t+(sound?0:1)))}),t&&timeout(()=>{const e=nnote();workbook.appendChild(e)},1e3*(e.length+1))},scoreMatrix=()=>{currentGame.attempts+=1;const e=currentGame.levels[currentGame.levels.length-1].cb[0];let t=!0;for(let a=0;a<currentGame.slotNum;a++)for(let n=0;n<currentGame.cats.length;n++){const s=userBoard[a][currentGame.cNms[n]];s.span.classList.remove("correct,incorrect"),s.d!==options[options.lang].empty?e[a][currentGame.cNms[n]]===s.d?timeout(()=>{s.span.classList.add("correct"),s.span.classList.remove("incorrect")},100*(n+a)):(timeout(()=>{s.span.classList.remove("correct"),s.span.classList.add("incorrect"),sfx([1.82,,1554,,.03,.23,,1.67,,,,,,,34,,.06,.62,.06])},100*(n+a)),t=!1):t=!1}return t},extraClueButton=()=>{const e=ce("button");e.classList.add("clue"),e.onclick=(()=>{sfx([3,,22,,.14,.08,1,2.8,4,-.7,-300,,,1.9,,.5,.01,.75,.01]),e.parentNode.removeChild(e),currentGame.extraClue()}),e.innerText="+ 🔍";for(let e=0;e<3;e++){const e=ce("br");workbook.appendChild(e)}workbook.appendChild(e)},nnote=()=>{const e=ce("div");return e.classList.add("clue"),e.innerHTML='<h3 class="loading">&nbsp;</h3>',e};let clueTime,levelTime;const setupWorkbook=()=>{timeouts.forEach(e=>clearTimeout(e)),clueTime=sound?6e3:800,levelTime=sound?2e3:7e3;const e=1===currentGame.slotNum?sound?7e3:4e3:sound?2500:1e3;let t=0;currentGame.levels.forEach((a,n,s)=>{timeout(()=>{if(currentGame.level=n,showClueArr(a.rewardClues,n<s.length-1),currentGame.level===s.length-1){const e=nnote();workbook.appendChild(e),timeout(()=>{e.classList.add("clue"),e.classList.remove("loading"),e.innerHTML=`<br/><h3>${options[options.lang].solvable}</h3>`,say(options[options.lang].solvable),workbook.appendChild(e),extraClueButton()},clueTime*a.rewardClues.length-1+2e3)}},t*clueTime+e+n*levelTime),t+=a.rewardClues.length});const a=ce("div");1===currentGame.slotNum?(a.innerHTML=`<div class="tutorial">${options[options.lang].tutorial}</div>`,say(options[options.lang].tutorial)):(newDet(),a.innerHTML=`<h1><span>${det}</span> ${options[options.lang].newCase}</h1>`,say(options[options.lang].newCase)),workbook.appendChild(a),workbook.appendChild(nnote())};
