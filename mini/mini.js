const menu=document.getElementById("menu"),pauseGame=()=>{say(""),pause=!0,games=[],clear(),menu.style.display="flex",cont.classList.remove("end"),timeouts.forEach(e=>clearTimeout(e))};let tutorial=!1;const clear=()=>{workbook.innerHTML="",matrix.innerHTML="",menu.style.display="none"},makeGames=()=>{clear(),pause=!1,games=[],tutorial||addGame(1,2).then(e=>games.push(e)),timeout(()=>{for(let e=2;e<5;e++)for(let t=2;t<5;t++)addGame(~~e,~~t).then(e=>games.push(e))},tutorial?0:1e3),tutorial=!0,files=0,startNewGame()};let files=0;const startNewGame=e=>{if(!e&&(files+=1)>options.files)return showChoose(),void(files=0);if(workbook.setAttribute("data-msg",`${options[options.lang].wellDone}`),clear(),currentGame&&games.length<4){let e=9;const t=~~(4*Math.random()+3);addGame(t,e-t).then(e=>games.push(e))}0!==games.length?(options.t=!0,selectNewVoice(),currentGame=e||games.shift(),sfx([,,-62,.02,.03,.23,,10.8,5.8,,200,-.07,,.3,2,,,1.3,.13,.3]),createMatrix(),cont.classList.remove("end"),timeout(()=>{setupWorkbook(currentGame)},500)):timeout(startNewGame,500)};function scroller(e){switch(e.deltaMode){case 0:wb.scrollTop+=e.deltaY,wb.scrollLeft+=e.deltaX;break;case 1:wb.scrollTop+=15*e.deltaY,wb.scrollLeft+=15*e.deltaX;break;case 2:wb.scrollTop+=.03*e.deltaY,wb.scrollLeft+=.03*e.deltaX}e.stopPropagation()}document.onwheel=scroller,document.monetization&&document.monetization.state&&(document.getElementById("mon-files").style.display="inline-block",document.getElementById("coil").innerHTML="You're signed into COIL.");const showChoose=()=>{clear(),timeouts.forEach(e=>clearTimeout(e)),cont.classList.remove("end"),root.style.display="flex",say(options[options.lang].ff),fi("nc",options[options.lang].newCase),fi("cf",options[options.lang].ff),fi("ch",`${options[options.lang].ch} ${options[options.lang].newCase}`),fi("peplabel",options[options.lang].p),fi("catlabel",options[options.lang].c),fi("create",`${options[options.lang].cr} ${options[options.lang].newCase}`),fi("com",options[options.lang].com),fi("com2",options[options.lang].com)},ser=e=>{delete e.slotNum,delete e.catNum,delete e.attempts;let t=JSON.stringify(e);return e.cNms.forEach((e,n)=>t=t.replace(new RegExp(e,"g"),`b${n}b`)),(t=JSON.parse(t)).cNms=e.cNms,JSON.stringify(t)},deser=e=>{return JSON.parse(e).cNms.forEach((t,n)=>e=e.replace(new RegExp(`b${n}b`,"g"),t)),(e=JSON.parse(e)).slotNum=e.slotNames.length,e.catNum=e.cNms.length,e.attempts=0,e},config={nodeUrl:"https://rpc.testnet.near.org",deps:{keyStore:new nearApi.keyStores.BrowserLocalStorageKeyStore},networkId:"testnet"};let subGame;!async function(){const{connect:e,keyStores:t,WalletConnection:n}=nearApi,s={networkId:"testnet",keyStore:new t.BrowserLocalStorageKeyStore,nodeUrl:"https://rpc.testnet.near.org",walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};window.near=await e(s);const a=new n(near),o=await a.account(),i=document.getElementById("near");a.isSignedIn()&&(i.innerHTML="You're signed into NEAR."),i.onclick=(()=>{1==confirm("Going to NEAR to log in.")&&a.requestSignIn("dev-1629217600951-74234604044359")});const r=new nearApi.Contract(o,"dev-1629217600951-74234604044359",{viewMethods:["getMessages"],changeMethods:["addMessage"],sender:o});messages=await r.getMessages(),subGame=(()=>{a.isSignedIn()?(clear(),workbook.appendChild(nnote()),root.style.display="none",addGame(5,5).then(e=>{r.addMessage({text:JSON.stringify(e),gas:1e14}),startNewGame(e)})):1==confirm("Going to NEAR to log in.")&&a.requestSignIn("dev-1629217600951-74234604044359")});const l=document.getElementById("com-list");sampleSize(20,messages.filter(e=>"{"===e.text[0])).forEach(e=>{const t=ce("div");t.innerHTML=`<div class="sub-game"><span>5x5</span> - ${e.sender}: <span>👍</span></div>`,t.onclick=(()=>{clear(),root.style.display="none",startNewGame(deser(e.text))}),l.appendChild(t)})}(window);const addGame=(e=2,t=2)=>new Promise(function(n,s){let a,o,i,r,l,c,p,d,u,m,h,f;const g=()=>{a=[...Array(e)].map(e=>({})),o=[],i=0,r=[],l=[],c=!1,p=!1,d=[],u=0,m=!1,h=[],f=[]};g();let $=options.cats,y=options.cNms,w=options.slotNames;w=sampleSize(e,w).map(e=>randSkinTone(e)).map(e=>randGender(e));const k=sampleSize(t,[...Array(y.length).keys()]);y=y.filter((e,t)=>-1!==k.indexOf(t)),$=$.filter((e,t)=>-1!==k.indexOf(t)).map(t=>sampleSize(e+2,t));const b=t*e,N=(e,t)=>{for(const n of Object.keys(t))if(e[n]&&e[n]!==t[n])return!1;return!0},C={*ti(e,t,n){for(const t of[...Array(n.length).keys()])yield*this.tiai(e,{i:t},n)},*tiai(e,t,n){if(N(n[t.i],e)){const s=JSON.parse(JSON.stringify(n));s[t.i]=Object.assign({},n[t.i],e),yield s}},*b(e,t,n){for(const s of[...Array(n.length-1).keys()])if(N(n[s],e)&&N(n[s+1],t)){const a=JSON.parse(JSON.stringify(n));a[s]=Object.assign({},n[s],e),a[s+1]=Object.assign({},n[s+1],t),yield a}},*a(e,t,n){for(const s of[...Array(n.length-1).keys()].map(e=>e+1))if(N(n[s],e)&&N(n[s-1],t)){const a=JSON.parse(JSON.stringify(n));a[s]=Object.assign({},n[s],e),a[s-1]=Object.assign({},n[s-1],t),yield a}},*nt(e,t,n){for(const s of[...Array(n.length-1).keys()])if(N(n[s],e)&&N(n[s+1],t)&&N(n[s+1],e)&&N(n[s],t)){const a=JSON.parse(JSON.stringify(n));a[s]=Object.assign({},n[s],e),a[s+1]=Object.assign({},n[s+1],t),yield a}t=[e,e=t][0];for(const s of[...Array(n.length-1).keys()])if(N(n[s],e)&&N(n[s+1],t)&&N(n[s+1],e)&&N(n[s],t)){const a=JSON.parse(JSON.stringify(n));a[s]=Object.assign({},n[s],e),a[s+1]=Object.assign({},n[s+1],t),yield a}}},x=e=>{let t=!1;const n={};return e.reduce(function(e,s){for(var a in s)n[a]||(n[a]=[]),n[a].indexOf(s[a])>-1&&(t=!0),n[a].push(s[a]),e[a]=s[a];return e},{}),t};const v=()=>{const e=[];for(const t of function*e(t,n){if(0===(t=t.map(e=>"function"==typeof e?e:t=>C[e.type](e.d[0],e.d[1],t))).length){if(x(n))return void(yield!1);yield n}else{const[s,...a]=t;for(const t of s(n))yield*e(a,t)}}(o,a))e.push(t);return e.filter(e=>e)},G=(e=null,t,n)=>{if(t>100){const e=ce("div");return e.classList.add("clue"),e.innerHTML=`<h3>${options[options.lang].noMore}</h3>`,void workbook.appendChild(e)}let s,o,i={},r={};const l=(e="",t=1)=>{const n=sample(y.filter(t=>t!==e)),s=$[y.indexOf(n)];return{key:n,d:1===t?sample(s):sampleSize(t,s)}};switch(e||sample([0,0,0,1,2,2,3,3,4])){case 0:i[(s=l()).key]=s.d,i[(s=l(s.key)).key]=s.d,o={type:options.clueTypes[0],d:[i,{d:[]}]};break;case 1:i[(s=l()).key]=s.d,r={i:~~(Math.random()*a.length)},o={type:options.clueTypes[1],d:[i,r]};break;case 2:i[(s=l("",2)).key]=s.d[0],r[s.key]=s.d[1],o={type:options.clueTypes[2],d:[i,r]};break;case 3:i[(s=l("",2)).key]=s.d[0],r[s.key]=s.d[1],o={type:options.clueTypes[3],d:[r,i]};break;case 4:i[(s=l()).key]=s.d,r[(s=l(s.key)).key]=s.d,o={type:options.clueTypes[4],d:[i,r]}}d.some(e=>checkToString(e)===checkToString(o.d))?requestAnimationFrame(()=>{G(e,++t,n)}):(d.push(o.d),n(o))},T=(s=null,d=0)=>{G(s,d,s=>{o.push(s);let k=v();if(0==k||!k[0])return o.pop(),void T(null,++d);const N=k[0].reduce((e,t)=>e+Object.keys(t).length,0);if((k.reduce((e,t)=>e.concat(t),[]).some(e=>[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length)||N===i)&&i<b)return o.length>8*a.length?(g(),void T()):(l.push(s),void requestAnimationFrame(()=>{T()}));if(i=N,!c)return l.push(s),(e=>{c||(c=!0,u=i,f.push({solution:e,selections:i}),r.push(l.slice(0)),l=[])})(k),void requestAnimationFrame(()=>{T()});if(c&&i<b)return l.push(s),i>Math.min(u+e,u+t)&&(e=>{p||(p=!0,f.push({solution:e,selections:i}),r.push(l.slice(0)),l=[])})(k),void requestAnimationFrame(()=>{T()});if(f.push({solution:k,selections:i}),m)return showClueArr([s]),void extraClueButton();l.push(s),r.push(l.slice(0)),m=!0,r.map(n=>(n=>{var s=[];let a;for(var o=0,i=n.length;o<i;o+=a)a=Math.max(1,~~(Math.random()*e+1),~~(Math.random()*t+1)),s.push(n.slice(o,o+a));return s})(n)).forEach((e,t)=>{e.forEach((e,n)=>{h.push({cb:f[t].solution,rwc:e})})}),o.length<=3&&(h[h.length-1].rwc=h.map(e=>e.rwc).reduce((e,t)=>e.concat(t)),h=h.slice(h.length-1)),n({slotNum:e,catNum:t,levels:h,extraClue:T,clues:o,cats:$,cNms:y,slotNames:w,attempts:0}),games=games.sort((e,t)=>e.clues.length-t.clues.length)})};T(1)});let userBoard=[];const createMatrix=()=>{userBoard=[];for(let e=0;e<currentGame.slotNum;e++)userBoard.push({});const e=ce("table"),t=ce("col");t.setAttribute("span",1),e.appendChild(t);let n=ce("tr"),s=ce("td");n.appendChild(s),currentGame.slotNames.forEach(e=>{const t=ce("th");t.classList.add("person"),t.innerHTML=`<span>${e}</span>`,n.appendChild(t)}),e.appendChild(n);currentGame.cats.forEach((t,a)=>{(n=ce("tr")).classList.add("mrow"),(s=ce("th")).innerHTML=currentGame.cNms[a],n.appendChild(s);const o=[options[options.lang].empty,...t];currentGame.slotNames.forEach((e,t)=>{const s=ce("td");s.classList.add("draggable");const i=ce("span");i.setAttribute("data-option",0),i.innerText=o[0],userBoard[t][currentGame.cNms[a]]={d:options[options.lang].empty,span:i},s.onclick=(e=>{((e,t,n,s)=>{let a=e.innerText;(a=t[t.indexOf(a)+1])||(a=t[0]),sfx([.7,.45,82.40689,,,.02,,3,35,,100*(t.indexOf(a)+1)-150,-.06,,,,,,.5,.03,.21]),userBoard[n][s]={d:a,span:e},e.innerText=a,e.classList.remove("correct","incorrect"),e.setAttribute("data-option",t.indexOf(a))})(i,o,t,currentGame.cNms[a])}),s.appendChild(i),n.appendChild(s)}),e.appendChild(n),(n=ce("tr")).classList.add("mrow")}),(n=ce("tr")).classList.add("mrow"),n.appendChild(ce("td"));const a=ce("button");a.classList.add("clue"),a.onclick=(()=>{scoreMatrix()&&(a.parentNode.parentNode.parentNode.removeChild(a.parentNode.parentNode),workbook.innerHTML="",workbook.scroll(0,0),cont.classList.add("end"),say(options[options.lang].wellDone),sfx([1.4,,474,,.25,.63,1,1.145,-.3,,100,.09,.09,,,,.09,.4,.65]),pause=!0,timeout(()=>{pause=!1,workbook.innerHTML="",timeouts.forEach(e=>clearTimeout(e)),selectNewVoice(),startNewGame()},3e3))}),a.innerText="👍",(s=ce("td")).setAttribute("colspan",currentGame.slotNum),s.appendChild(a),n.appendChild(s),e.appendChild(n),matrix.appendChild(e)};let currentGame,sound=!0,pause=!1,games=[];const shuffle=e=>e.sort(()=>.5-Math.random()),timeouts=[],cont=document.getElementById("cont"),workbook=document.getElementById("wb"),matrix=document.getElementById("matrix"),root=document.getElementById("root"),gi=(e,t=3)=>parseInt(document.getElementById(e).value)||t,fi=(e,t)=>document.getElementById(e).innerText=t,ce=e=>document.createElement(e),timeout=(e,t)=>{timeouts.push(setTimeout(e,t))},options={lang:"en",files:6,clueTypes:["ti","tiai","a","b","nt"],cats:[["👓","👕","👘","🎩","👠","🧤","🧣","👒","🧢","👟","🩳"],["🎷","🎸","🎺","🎻","🪕","🥁","🎹"],["⚽","🏀","🏈","🎾","🥏","🏓","🥊","🎳","🏐","⚾","🏸"],["❤️","🧡","💛","💚","💙","💜","🖤","🤎","💔"],["🍇","🍉","🍊","🍎","🥝","🥥","🍐","🍑","🍒","🍋"],["🐒","🐕","🦝","🐈","🦓","🐄","🐖","🐪","🦒","🐘","🐁","🐇","🐿️","🦨","🦘"],["🥯","🍟","🍔","🍕","🧀","🍜","🍦","🍩","🍿","🥐","🌮","🍣","🍚"],["😍","😎","👿","🤔","😓","😷","🥺","😡","🤪","😀","🥶","🥱"]],slotNames:["🧟‍♂️","🦹🏽‍♂️","🦸🏽‍♂️","🧛🏽‍♂️","👷🏻‍♂️","👨🏽‍🎨","👨🏿‍💼","👨🏻‍🔧","👨🏾‍⚕️","👨🏼‍🌾","🧑🏻‍⚖️","👨🏾‍🔬","👨🏼‍🎤","👨🏽‍🚀","👮🏽‍♂️","👩🏽‍🍳","🧕🏼","💂🏽‍♂️","🧙🏼‍♂️","👰🏻","👩🏼‍✈️","🧝🏽‍♂️","👨🏾‍🚒","👩🏽‍🎓","👩🏼‍🏭"],en:{wellDone:"Well Done!",solvable:"Possible Solution.",empty:"space",noMore:"No more clues.",tutorial:"Tutorial: Use the prompts. Fill in the spaces.  Then 👍",newCase:"New Case!",p:"# of People",c:"# of Categories",ch:"Choose",cr:"Create",com:"Community",ff:"Case Files"},tp:{wellDone:"pona!",solvable:"ken pali",empty:"ala",noMore:"pini",tutorial:"kama sona: o kute e toki pi wile sona. tenpo pini la o luka e 👍",newCase:"utala sin",p:"jan",c:"kulupu ilo",ch:"o pana",cr:"o sin",com:"kulupu",ff:"utala mute"},fr:{wellDone:"Bien Joué!",solvable:"Résolution Possible.",empty:"espace",noMore:"Indices terminés.",tutorial:"Tutoriel: Utilisez les indices. Remplissez les espaces. Enfin appuyez sur 👍",newCase:"Nouveau Mystère!",p:"Nombre de Personnes",c:"Nombre de Catégories",ch:"Choisir",cr:"Créer",com:"Communauté",ff:"Fichiers de Mystères"},es:{wellDone:"¡Bien Hecho!",solvable:"Resolución Posible.",empty:"espacio",noMore:"No más pistas.",tutorial:"Tutorial: Usa las pistas. Completa la información. Finalmente toca 👍",newCase:"Nuevo Misterio!",p:"Gente",c:"Categorías",ch:"Elegir",cr:"Crear",com:"Comunidad",ff:"Archivos de Misterios"},"zh-CN":{wellDone:"做得好!",solvable:"可以完成",empty:"空白",noMore:"没有了",tutorial:"教程：使用线索并完成信息。 然后单击 👍。",newCase:"新谜底!",p:"人数",c:"类别数",ch:"选择",cr:"创建",com:"社区",ff:"神秘档案"}},lang=(e,t=!0)=>{switch(pause=!1,t&&(sfx([.7,.45,82.40689,,,.02,,3,35,,-150,-.06,,,,,,.5,.03,.21]),e.target&&(e.target.classList.add("selected"),e=e?e.target.getAttribute("id"):"en")),options.lang=e,options.lang){case"tp":options.cNms=["len","kalama musi","musi utala","olin","kili","soweli","moku","pilin"];break;case"fr":options.cNms=["le vêtement","l'instrument","le sport","le cœur","le fruit","l'animal","la bouffe","le sentiment"];break;case"es":options.cNms=["la ropa","el instrumento","el deporte","el corazón","la fruta","el animal","la comida","el sentimiento"];break;case"zh-CN":options.cNms=["衣服","乐器","运动","心脏","水果","动物","食物","心情"];break;default:options.cNms=["clothes","instrument","sport","heart","fruit","animal","food","mood"]}};lang("en",!1),[...document.getElementsByClassName("lang")].forEach((e,t,n)=>{e.addEventListener("click",e=>{n.forEach(e=>e.classList.remove("selected")),lang(e)})});const checkToString=e=>e.map(e=>Object.keys(e).concat(Object.values(e))).flat().sort().join(),randBetween=(e,t)=>~~(Math.random()*(t-e+1)+e),sample=e=>{const t=null==e?0:e.length;return t?e[Math.floor(Math.random()*t)]:void 0},sampleSize=(e,t,n=[])=>e<1||t.length<1?n:shuffle(e>=t.length?[...n,...t]:Math.random()<e/t.length?sampleSize(e-1,t.slice(1),[...n,t[0]]):sampleSize(e,t.slice(1),n)),stMod=["🏻","🏼","🏽","🏾","🏿"],gMod=["👩","👨"],gMod2=["♂️","♀️"],findSkin=new RegExp("\ud83c[\udffb-\udfff]","g"),findGender=new RegExp(gMod.join("|"),"g"),findGender2=new RegExp(gMod2.join("|"),"g"),randSkinTone=e=>e.replace(findSkin,sample(stMod)),randGender=e=>e.replace(findGender,sample(gMod)).replace(findGender2,sample(gMod2));let det;const newDet=()=>{det=randSkinTone(randGender("🕵🏼‍♂️")),document.getElementById("det").innerText=det,document.title=`Blank ${det} - Reduce the space`,workbook.setAttribute("data-flair",`${det}`)};let voice;newDet();const selectNewVoice=()=>{(voice=(voice=window.speechSynthesis.getVoices().filter(e=>e.lang.indexOf(options.lang)>-1))[randBetween(0,voice.length)])||timeout(selectNewVoice,1e3)};selectNewVoice();const sfx=e=>{pause||sound&&zzfx(...e)};let say=e=>{if("tp"===options.lang)return;if(!sound)return;if(pause)return;selectNewVoice(),speechSynthesis.cancel();const t=new SpeechSynthesisUtterance;t.voice=voice,t.text=e.replace(new RegExp("cœur|corazón|heart","g"),""),t.lang=options.lang,speechSynthesis.speak(t)};const chooseGame=()=>{clear(),workbook.appendChild(nnote()),root.style.display="none",addGame(gi("people"),gi("cats")).then(e=>startNewGame(e))};zzfxV=.3,zzfx=((e=1,t=.05,n=220,s=0,a=0,o=.1,i=0,r=1,l=0,c=0,p=0,d=0,u=0,m=0,h=0,f=0,g=0,$=1,y=0,w=0)=>{let k,b,N=Math,C=44100,x=2*N.PI,v=l*=500*x/C/C,G=n*=(1-t+2*t*N.random(t=[]))*x/C,T=0,M=0,S=0,L=1,O=0,E=0,z=0;for(c*=500*x/C**3,h*=x/C,p*=x/C,d*=C,u=C*u|0,b=(s=C*s+9)+(y*=C)+(a*=C)+(o*=C)+(g*=C)|0;S<b;t[S++]=z)++E%(100*f|0)||(z=i?1<i?2<i?3<i?N.sin((T%x)**3):N.max(N.min(N.tan(T),1),-1):1-(2*T/x%2+2)%2:1-4*N.abs(N.round(T/x)-T/x):N.sin(T),z=(u?1-w+w*N.sin(x*S/u):1)*(0<z?1:-1)*N.abs(z)**r*e*zzfxV*(S<s?S/s:S<s+y?1-(S-s)/y*(1-$):S<s+y+a?$:S<b-g?(b-S-g)/o*$:0),z=g?z/2+(g>S?0:(S<b-g?1:(b-S)/g)*t[S-g|0]/2):z),T+=(k=(n+=l+=c)*N.cos(h*M++))-k*m*(1-1e9*(N.sin(S)+1)%2),L&&++L>d&&(n+=p,G+=p,L=0),!u||++O%u||(n=G,l=v,L=L||1);return(e=zzfxX.createBuffer(1,b,C)).getChannelData(0).set(t),(n=zzfxX.createBufferSource()).buffer=e,n.connect(zzfxX.destination),n.start(),n}),zzfxX=new(window.AudioContext||webkitAudioContext);const wordClues=e=>{const t=Object.keys(e.d[0]),n=Object.keys(e.d[1]||{});let s,a,o;switch(s=(currentGame.cats[currentGame.cNms.indexOf(t[0])]||[]).indexOf(e.d[0][t[0]])+1,a=(currentGame.cats[currentGame.cNms.indexOf(t[1])]||[]).indexOf(e.d[0][t[1]])+1,n.length&&(o=(currentGame.cats[currentGame.cNms.indexOf(n[0])]||[]).indexOf(e.d[1][n[0]])+1),options.lang){case"es":switch(e.type){case"ti":return`la persona con ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>, también tiene ${t[1]}  <span data-option="${a}">${e.d[0][t[1]]}</span>`;case"tiai":return`<span class="person">${currentGame.slotNames[e.d[1].i]}</span>tiene ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"b":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> está a la derecha de ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"a":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> está a la izquierda de ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"nt":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> está cerca de ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`}break;case"fr":switch(e.type){case"ti":return`la personne avec ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>, aussi tiens ${t[1]}  <span data-option="${a}">${e.d[0][t[1]]}</span>`;case"tiai":return`<span class="person">${currentGame.slotNames[e.d[1].i]}</span>tiens ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"b":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> est à droite de ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"a":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> est à gauche de ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"nt":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> est a coté de ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`}break;case"zh-CN":switch(e.type){case"ti":return`有 <span data-option="${s}">${e.d[0][t[0]]}</span> ${t[0]} 的人, 也有 <span data-option="${a}">${e.d[0][t[1]]}</span> 的${t[1]}`;case"tiai":return`<span class="person">${currentGame.slotNames[e.d[1].i]}</span> 有 <span data-option="${s}">${e.d[0][t[0]]}</span> 的${t[0]}`;case"b":return`${n[0]} <span data-option="${o}">${e.d[1][n[0]]}</span> 在 ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span> 的右边`;case"a":return`${n[0]} <span data-option="${o}">${e.d[1][n[0]]}</span> 在 ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span> 的左边`;case"nt":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> 就在 ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span> 的旁边`}case"tp":switch(e.type){case"ti":return`jan li jo e ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span> li jo e ${t[1]}  <span data-option="${a}">${e.d[0][t[1]]}</span> kin`;case"tiai":return`jan <span class="person">${currentGame.slotNames[e.d[1].i]}</span>li jo e ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"b":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> li lon poka pini pi ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"a":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> li lon poka open pi ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"nt":return`${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span> li lon poka pi ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`}break;default:switch(e.type){case"ti":return`The one with ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>, also has ${t[1]}  <span data-option="${a}">${e.d[0][t[1]]}</span>`;case"tiai":return`<span class="person">${currentGame.slotNames[e.d[1].i]}</span>has ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>`;case"a":return`One left of ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>, is ${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}`;case"b":return`One right of ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>, is ${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span>`;case"nt":return`Next to ${t[0]}  <span data-option="${s}">${e.d[0][t[0]]}</span>, is ${n[0]}  <span data-option="${o}">${e.d[1][n[0]]}</span>`}}},showClueArr=(e,t)=>{[...document.getElementsByClassName("loading")].forEach(e=>e.classList.remove("loading")),e.map(wordClues).forEach((e,t)=>{const n=ce("div");n.classList.add("waiting"),n.innerHTML="<div>🔍</div>",workbook.appendChild(n),timeout(()=>{n.classList.remove("waiting"),n.innerHTML="",timeout(()=>{n.onclick=(e=>{say(e.target.innerText.replace(findSkin,""))}),n.innerHTML=e,n.classList.add("clue"),sfx([2,0,60,.01,,.26,1,2.5,.2,,,,1,,,,,.3,.05]),say(n.innerText.replace(findSkin,""))},100)},clueTime*(t+(sound?0:1)))}),t&&timeout(()=>{const e=nnote();workbook.appendChild(e)},1e3*(e.length+1))},scoreMatrix=()=>{currentGame.attempts+=1;const e=currentGame.levels[currentGame.levels.length-1].cb[0];let t=!0;for(let n=0;n<currentGame.slotNum;n++)for(let s=0;s<currentGame.cats.length;s++){const a=userBoard[n][currentGame.cNms[s]];a.span.classList.remove("correct,incorrect"),a.d!==options[options.lang].empty?e[n][currentGame.cNms[s]]===a.d?timeout(()=>{a.span.classList.add("correct"),a.span.classList.remove("incorrect")},100*(s+n)):(timeout(()=>{a.span.classList.remove("correct"),a.span.classList.add("incorrect"),sfx([1.82,,1554,,.03,.23,,1.67,,,,,,,34,,.06,.62,.06])},100*(s+n)),t=!1):t=!1}return t},extraClueButton=()=>{if(!currentGame.extraClue)return;const e=ce("button");e.classList.add("clue"),e.onclick=(()=>{sfx([3,,22,,.14,.08,1,2.8,4,-.7,-300,,,1.9,,.5,.01,.75,.01]),e.parentNode.removeChild(e),currentGame.extraClue()}),e.innerText="+ 🔍";for(let e=0;e<3;e++){const e=ce("br");workbook.appendChild(e)}workbook.appendChild(e)},nnote=()=>{const e=ce("div");return e.classList.add("clue"),e.innerHTML='<h3 class="loading">&nbsp;</h3>',e};let clueTime,levelTime;const setupWorkbook=()=>{timeouts.forEach(e=>clearTimeout(e)),clueTime=sound?6e3:800,levelTime=sound?2e3:7e3;const e=1===currentGame.slotNum?sound?7e3:4e3:sound?2500:1e3;let t=0;currentGame.levels.forEach((n,s,a)=>{timeout(()=>{if(currentGame.level=s,showClueArr(n.rwc,s<a.length-1),currentGame.level===a.length-1){const e=nnote();workbook.appendChild(e),timeout(()=>{e.classList.add("clue"),e.classList.remove("loading"),e.innerHTML=`<br/><h3>${options[options.lang].solvable}</h3>`,say(options[options.lang].solvable),workbook.appendChild(e),extraClueButton()},clueTime*n.rwc.length-1+3e3)}},t*clueTime+e+s*levelTime),t+=n.rwc.length});const n=ce("div");1===currentGame.slotNum?(n.innerHTML=`<div class="tutorial">${options[options.lang].tutorial}</div>`,say(options[options.lang].tutorial)):(newDet(),n.innerHTML=`<h1><span>${det}</span> ${options[options.lang].newCase}</h1>`,say(options[options.lang].newCase)),workbook.appendChild(n),workbook.appendChild(nnote())};
