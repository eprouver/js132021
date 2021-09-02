const ge="getElementById",cl="classList",ac="appendChild",d=document,menu=d[ge]("menu"),M=Math,ra="random",raf=requestAnimationFrame,pauseGame=()=>{say(""),pause=!0,games=[],clear(),menu.style.display="flex",cont[cl].remove("end","bo"),timeouts.forEach(e=>clearTimeout(e))};let tutorial=!1;const clear=()=>{workbook.innerHTML="",matrix.innerHTML="",menu.style.display="none"},makeGames=()=>{clear(),pause=!1,games=[],tutorial?sng():(addGame(1,2).then(e=>sng(e)),tutorial=!0,files=0),timeout(()=>{for(let e=2;e<5;e++)for(let t=2;t<5;t++)addGame(~~e,~~t).then(e=>games.push(e))},tutorial?0:1e3)};let files=0;const sng=e=>{if(pause=!1,games.length<4){let e=3+~~(3*M[ra]()),t=M.max(2,~~(10*M[ra]())-e);M[ra]()>.5&&(t=[e,e=t][0]),addGame(e,t).then(e=>games.push(e))}if(curG=e||games.shift()){if(!e&&(files+=1)>opt.files)return showChoose(),void(files=0);workbook.setAttribute("data-msg",`${opt[opt.lang].wellDone}`),clear(),opt.t=!0,selectNewVoice(),sfx([,,-62,.02,.03,.23,,10.8,5.8,,200,-.07,,.3,2,,,1.3,.13,.3]),createMatrix(),cont[cl].remove("end","bo"),timeout(()=>{setupWorkbook(curG)},500)}else timeout(sng,500)};function scroller(e){switch(e.deltaMode){case 0:wb.scrollTop+=e.deltaY,wb.scrollLeft+=e.deltaX;break;case 1:wb.scrollTop+=15*e.deltaY,wb.scrollLeft+=15*e.deltaX;break;case 2:wb.scrollTop+=.03*e.deltaY,wb.scrollLeft+=.03*e.deltaX}e.stopPropagation()}d.onwheel=scroller,d.monetization&&d.monetization.state&&(d[ge]("mon-files").style.display="inline-block",d[ge]("coil").innerHTML="You're signed into COIL.");const showChoose=()=>{clear(),timeouts.forEach(e=>clearTimeout(e)),cont[cl].remove("end","bo"),root.style.display="flex",say(opt[opt.lang].ff),fi("nc",opt[opt.lang].newCase),fi("cf",opt[opt.lang].ff),fi("ch",`${opt[opt.lang].ch} ${opt[opt.lang].newCase}`),fi("peplabel",opt[opt.lang].p),fi("catlabel",opt[opt.lang].c),fi("create",`${opt[opt.lang].cr} ${opt[opt.lang].newCase}`),fi("com",opt[opt.lang].com),fi("com2",opt[opt.lang].com)},ser=e=>{delete e.sNum,delete e.catNum,delete e.attempts;let t=JSON.stringify(e);return e.cNms.forEach((e,n)=>t=t.replace(new RegExp(e,"g"),`b${n}b`)),(t=JSON.parse(t)).cNms=e.cNms,JSON.stringify(t)},deser=e=>{return JSON.parse(e).cNms.forEach((t,n)=>e=e.replace(new RegExp(`b${n}b`,"g"),t)),(e=JSON.parse(e)).sNum=e.slotNames.length,e.catNum=e.cNms.length,e.attempts=0,e},config={nodeUrl:"https://rpc.testnet.near.org",deps:{keyStore:new nearApi.keyStores.BrowserLocalStorageKeyStore},networkId:"testnet"};let subGame;!async function(){const{connect:e,keyStores:t,WalletConnection:n}=nearApi,a={networkId:"testnet",keyStore:new t.BrowserLocalStorageKeyStore,nodeUrl:"https://rpc.testnet.near.org",walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};window.near=await e(a);const o=new n(near),s=await o.account(),r=d[ge]("near");o.isSignedIn()&&(r.innerHTML="You're signed into NEAR."),r.onclick=(()=>{1==confirm("Going to NEAR to log in.")&&o.requestSignIn("dev-1629217600951-74234604044359")});const i=new nearApi.Contract(s,"dev-1629217600951-74234604044359",{viewMethods:["getMessages"],changeMethods:["addMessage"],sender:s});messages=await i.getMessages(),subGame=(()=>{o.isSignedIn()?(clear(),workbook[ac](nnote()),root.style.display="none",addGame(5,5).then(e=>{i.addMessage({text:JSON.stringify(e),gas:1e14}),sng(e)})):1==confirm("Going to NEAR to log in.")&&o.requestSignIn("dev-1629217600951-74234604044359")});const c=d[ge]("com-list");sampleSize(20,messages.filter(e=>"{"===e.text[0])).forEach(e=>{const t=ce("div");t.innerHTML=`<div class="sub-game"><span>5x5</span> - ${e.sender}: <span>👍</span></div>`,t.onclick=(()=>{clear(),root.style.display="none",sng(deser(e.text))}),c[ac](t)})}(window);const addGame=(e=2,t=2)=>new Promise(function(n){let a,o,s,r,i,c,l,p,d,u,m,f;const g=()=>{a=[...Array(e)].map(e=>({})),o=[],s=0,r=[],i=[],c=!1,l=!1,p=[],d=0,u=!1,m=[],f=[]};g();let h=opt.cats,$=opt.cNms,w=opt.slotNames;w=sampleSize(e,w).map(e=>randSkinTone(e)).map(e=>randGender(e));const k=sampleSize(t,[...Array($.length).keys()]);$=$.filter((e,t)=>-1!==k.indexOf(t)),h=h.filter((e,t)=>-1!==k.indexOf(t)).map(t=>sampleSize(e+2,t));const b=t*e,y=(e,t)=>{for(const n of Object.keys(t))if(e[n]&&e[n]!==t[n])return!1;return!0},N={*ti(e,t,n){for(const t of[...Array(n.length).keys()])yield*this.tiai(e,{i:t},n)},*tiai(e,t,n){if(y(n[t.i],e)){const a=JSON.parse(JSON.stringify(n));a[t.i]=Object.assign({},n[t.i],e),yield a}},*b(e,t,n){for(const a of[...Array(n.length-1).keys()])if(y(n[a],e)&&y(n[a+1],t)){const o=JSON.parse(JSON.stringify(n));o[a]=Object.assign({},n[a],e),o[a+1]=Object.assign({},n[a+1],t),yield o}},*a(e,t,n){for(const a of[...Array(n.length-1).keys()].map(e=>e+1))if(y(n[a],e)&&y(n[a-1],t)){const o=JSON.parse(JSON.stringify(n));o[a]=Object.assign({},n[a],e),o[a-1]=Object.assign({},n[a-1],t),yield o}},*nt(e,t,n){yield*this.a(e,t,n),yield*this.b(e,t,n)}},v=e=>{let t=!1;const n={};return e.reduce(function(e,a){for(var o in a)n[o]||(n[o]=[]),n[o].indexOf(a[o])>-1&&(t=!0),n[o].push(a[o]),e[o]=a[o];return e},{}),t};const x=e=>{const t=[];for(const n of function*e(t,n){if(0===(t=t.map(e=>"function"==typeof e?e:t=>N[e.type](e.d[0],e.d[1],t))).length){if(v(n))return void(yield!1);yield n}else{const[a,...o]=t;for(const t of a(n))yield*e(o,t)}}(e,a))t.push(n);return t.filter(e=>e)},G=(e=null,t,n)=>{if(t>100)return n(!1);let o,s,r={},i={};const c=(e="",t=1)=>{const n=sample($.filter(t=>t!==e)),a=h[$.indexOf(n)];return{key:n,d:1===t?sample(a):sampleSize(t,a)}};switch(e||sample([0,0,0,1,2,2,3,3,4])){case 0:r[(o=c()).key]=o.d,r[(o=c(o.key)).key]=o.d,s={type:opt.clueTypes[0],d:[r,{d:[]}]};break;case 1:r[(o=c()).key]=o.d,i={i:~~(M[ra]()*a.length)},s={type:opt.clueTypes[1],d:[r,i]};break;case 2:r[(o=c("",2)).key]=o.d[0],i[o.key]=o.d[1],s={type:opt.clueTypes[2],d:[r,i]};break;case 3:r[(o=c("",2)).key]=o.d[0],i[o.key]=o.d[1],s={type:opt.clueTypes[3],d:[i,r]};break;case 4:r[(o=c()).key]=o.d,i[(o=c(o.key)).key]=o.d,s={type:opt.clueTypes[4],d:[r,i]}}p.some(e=>checkToString(e)===checkToString(s.d))?raf(()=>{G(e,++t,n)}):(p.push(s.d),n(s))},T=(p=null,k=0,y=!1)=>{G(p,k,p=>{if(!p){if(y){const e=ce("div");e[cl].add("clue"),e.innerHTML=`<h3>${opt[opt.lang].noMore}</h3>`,workbook[ac](e)}return}o.push(p);let N=x(o);if(0==N||!N[0])return o.pop(),void T(null,++k,y);const v=N[0].reduce((e,t)=>e+Object.keys(t).length,0);if(i.push(p),(N.reduce((e,t)=>e.concat(t),[]).some(e=>[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length)||v===s)&&s<b)return o.length>9*a.length?(g(),void T()):void raf(()=>{T(null,0,y)});if(s=v,!c)return(e=>{c||(c=!0,d=s,f.push({solution:e,selections:s}),r.push(i.slice(0)),i=[])})(N),void raf(()=>{T(null,0,y)});if(c&&s<b)return s>M.min(d+e,d+t)&&(e=>{l||(l=!0,f.push({solution:e,selections:s}),r.push(i.slice(0)),i=[])})(N),void raf(()=>{T(null,0,y)});{const a=x(o.map(e=>("nt"===e.type&&(e.d=e.d.reverse()),e)).reverse())[0];if(!a||!iareEquals(N[0],a))return void raf(()=>{T(1,0,y)});if(f.push({solution:N,selections:s}),u)return showClueArr([p]),void extraClueButton();r.push(i.slice(0)),u=!0,r.map(n=>(n=>{var a=[];let o;for(var s=0,r=n.length;s<r;s+=o)o=M.max(1,1+~~(M[ra]()*e),1+~~(M[ra]()*t)),a.push(n.slice(s,s+o));return a})(n)).forEach((e,t)=>{e.forEach((e,n)=>{m.push({cb:f[t].solution,rwc:e})})}),o.length<=3&&(m[m.length-1].rwc=m.map(e=>e.rwc).reduce((e,t)=>e.concat(t)),m=m.slice(m.length-1)),n({sNum:e,catNum:t,levels:m,extraClue:()=>{T(null,0,!0)},clues:o,cats:h,cNms:$,slotNames:w,attempts:0}),games=games.sort((e,t)=>e.clues.length-t.clues.length)}})};T(1)});let userBoard=[];const createMatrix=()=>{userBoard=[];for(let e=0;e<curG.sNum;e++)userBoard.push({});const e=ce("table"),t=ce("col");t.setAttribute("span",1),e[ac](t);let n=ce("tr"),a=ce("td");n[ac](a),curG.slotNames.forEach(e=>{const t=ce("th");t[cl].add("person"),t.innerHTML=`<span>${e}</span>`,n[ac](t)}),e[ac](n);curG.cats.forEach((t,o)=>{(n=ce("tr"))[cl].add("mrow"),(a=ce("th")).innerHTML=curG.cNms[o],n[ac](a);const s=["␣",...t];curG.slotNames.forEach((e,t)=>{const a=ce("td");a[cl].add("draggable");const r=ce("span");r.setAttribute("data-option",0),r.innerHTML=s[0],userBoard[t][curG.cNms[o]]={d:"␣",span:r},a.onclick=(e=>{((e,t,n,a)=>{let o=e.innerText;(o=t[t.indexOf(o)+1])||(o=t[0]),sfx([.7,.45,82.40689,,,.02,,3,35,,100*(t.indexOf(o)+1)-150,-.06,,,,,,.5,.03,.21]),userBoard[n][a]={d:o,span:e},e.innerText=o,e[cl].remove("correct","incorrect"),e.setAttribute("data-option",t.indexOf(o))})(r,s,t,curG.cNms[o])}),a[ac](r),n[ac](a)}),e[ac](n),(n=ce("tr"))[cl].add("mrow")}),(n=ce("tr"))[cl].add("mrow"),n[ac](ce("td"));const o=ce("button");o[cl].add("clue"),o.onclick=(()=>{scoreMatrix()&&(o.parentNode.parentNode.parentNode.removeChild(o.parentNode.parentNode),workbook.innerHTML="",workbook.scroll(0,0),cont[cl].add("end",opt.t?"bo":"n"),say(opt[opt.lang].wellDone+(opt.t?"... 100%":"")),sfx([1.4,,474,,.25,.63,1,1.145,-.3,,100,.09,.09,,,,.09,.4,.65]),pause=!0,timeout(()=>{pause=!1,workbook.innerHTML="",timeouts.forEach(e=>clearTimeout(e)),selectNewVoice(),sng()},3e3))}),o.innerText="👍",(a=ce("td")).setAttribute("colspan",curG.sNum),a[ac](o),n[ac](a),e[ac](n),matrix[ac](e)};let curG,sound=!0,pause=!1,games=[];const shuffle=e=>e.sort(()=>.5-M[ra]()),timeouts=[],cont=d[ge]("cont"),workbook=d[ge]("wbc"),matrix=d[ge]("matrix"),root=d[ge]("root"),gi=(e,t=3)=>parseInt(d[ge](e).value)||t,fi=(e,t)=>d[ge](e).innerText=t,ce=e=>d.createElement(e),timeout=(e,t)=>{timeouts.push(setTimeout(e,t))},iareEquals=(e,t)=>{for(let a=0;a<e.length;a++){for(var n in e[a])if(!(n in t[a])||e[a][n]!==t[a][n])return!1;for(var n in t[a])if(!(n in e[a])||e[a][n]!==t[a][n])return!1}return!0},opt={lang:"en",files:10,clueTypes:["ti","tiai","a","b","nt"],cats:[["👓","👕","👘","🎩","👠","🧤","🧣","👒","🧢","👟","🩳"],["🎷","🎸","🎺","🎻","🪕","🥁","🎹"],["⚽","🏀","🏈","🎾","🥏","🏓","🥊","🎳","🏐","⚾","🏸"],["❤️","🧡","💛","💚","💙","💜","🖤","🤎","💔"],["🍇","🍉","🍊","🍎","🥝","🥥","🍐","🍑","🍒","🍋"],["🐒","🐕","🦝","🐈","🦓","🐄","🐖","🐪","🦒","🐘","🐇","🐿️","🦨"],["🥯","🍔","🍕","🧀","🍜","🍦","🍩","🍿","🥐","🌮","🍣"],["😍","😎","👿","🤔","😓","😷","🥺","😡","🤪","🤠","🥶","🥱"]],slotNames:["🧟‍♂️","🦹🏽‍♂️","🦸🏽‍♂️","🧛🏽‍♂️","👷🏻‍♂️","👨🏽‍🎨","👨🏿‍💼","👨🏻‍🔧","👨🏾‍⚕️","👨🏼‍🌾","🧑🏻‍⚖️","👨🏾‍🔬","👨🏼‍🎤","👨🏽‍🚀","👮🏽‍♂️","👩🏽‍🍳","🧕🏼","💂🏽‍♂️","🧙🏼‍♂️","👰🏻","👩🏼‍✈️","🧝🏽‍♂️","👨🏾‍🚒","👩🏽‍🎓","👩🏼‍🏭"],en:{wellDone:"Well Done!",solvable:"Possible Solution",noMore:"No more clues.",tutorial:"Tutorial: Use the prompts. Fill in the spaces.  Then 👍",newCase:"New Case!",p:"# of People",c:"# of Categories",ch:"Choose",cr:"Create",com:"Community",ff:"Case Files"},tp:{wellDone:"pona!",solvable:"ken pali",noMore:"pini",tutorial:"kama sona: o kute e toki pi wile sona. tenpo pini la o luka e 👍",newCase:"utala sin",p:"jan",c:"kulupu ilo",ch:"o pana",cr:"o sin",com:"kulupu",ff:"utala mute"},fr:{wellDone:"Bien Joué!",solvable:"Résolution Possible",noMore:"Indices terminés.",tutorial:"Tutoriel: Utilisez les indices. Remplissez les espaces. Enfin appuyez sur 👍",newCase:"Nouveau Mystère!",p:"Nombre de Personnes",c:"Nombre de Catégories",ch:"Choisir",cr:"Créer",com:"Communauté",ff:"Fichiers de Mystères"},es:{wellDone:"¡Bien Hecho!",solvable:"Resolución Posible",noMore:"No más pistas.",tutorial:"Tutorial: Usa las pistas. Completa la información. Finalmente toca 👍",newCase:"Nuevo Misterio!",p:"Gente",c:"Categorías",ch:"Elegir",cr:"Crear",com:"Comunidad",ff:"Archivos de Misterios"},"zh-CN":{wellDone:"做得好!",solvable:"可以完成",noMore:"没有了",tutorial:"教程：使用线索并完成信息。 然后单击 👍。",newCase:"新谜底!",p:"人数",c:"类别数",ch:"选择",cr:"创建",com:"社区",ff:"神秘档案"}},lang=(e,t=!0)=>{switch(pause=!1,t&&(sfx([.7,.45,82.40689,,,.02,,3,35,,-150,-.06,,,,,,.5,.03,.21]),e.target&&(e.target[cl].add("selected"),e=e?e.target.getAttribute("id"):"en")),opt.lang=e,opt.lang){case"tp":opt.cNms=["len","kalama musi","musi utala","olin","kili","soweli","moku","pilin"];break;case"fr":opt.cNms=["le vêtement","l'instrument","le sport","le cœur","le fruit","l'animal","la bouffe","le sentiment"];break;case"es":opt.cNms=["la ropa","el instrumento","el deporte","el corazón","la fruta","el animal","la comida","el sentimiento"];break;case"zh-CN":opt.cNms=["衣服","乐器","运动","心脏","水果","动物","食物","心情"];break;default:opt.cNms=["clothes","instrument","sport","heart","fruit","animal","food","mood"]}};lang("en",!1),[...d.getElementsByClassName("lang")].forEach((e,t,n)=>{e.addEventListener("click",e=>{n.forEach(e=>e[cl].remove("selected")),lang(e)})});const checkToString=e=>e.map(e=>Object.keys(e).concat(Object.values(e))).flat().sort().join(),sample=e=>{const t=null==e?0:e.length;return t?e[~~(M[ra]()*t)]:void 0},sampleSize=(e,t,n=[])=>e<1||t.length<1?n:shuffle(e>=t.length?[...n,...t]:M[ra]()<e/t.length?sampleSize(e-1,t.slice(1),[...n,t[0]]):sampleSize(e,t.slice(1),n)),stMod=["🏻","🏼","🏽","🏾","🏿"],gMod=["👩","👨"],gMod2=["♂️","♀️"],findSkin=new RegExp("\ud83c[\udffb-\udfff]","g"),findGender=new RegExp(gMod.join("|"),"g"),findGender2=new RegExp(gMod2.join("|"),"g"),randSkinTone=e=>e.replace(findSkin,sample(stMod)),randGender=e=>e.replace(findGender,sample(gMod)).replace(findGender2,sample(gMod2));let det;const newDet=()=>{det=randSkinTone(randGender("🕵🏼‍♂️")),d[ge]("det").innerText=det,d.title=`BLANKS ${det} - Reduce the space`,workbook.setAttribute("data-flair",`${det}`)};let voice;newDet();const selectNewVoice=()=>{(voice=(voice=window.speechSynthesis.getVoices().filter(e=>e.lang.indexOf(opt.lang)>-1))[new Date%voice.length])||timeout(selectNewVoice,1e3)};selectNewVoice();const sfx=e=>{pause||sound&&zzfx(...e)};let say=e=>{if("tp"===opt.lang)return;if(!sound)return;if(pause)return;selectNewVoice(),speechSynthesis.cancel();const t=new SpeechSynthesisUtterance;t.voice=voice,t.text=e.replace(new RegExp("cœur|corazón|heart","g"),""),t.lang=opt.lang,speechSynthesis.speak(t)};const chooseGame=()=>{clear(),workbook[ac](nnote()),root.style.display="none",addGame(gi("people"),gi("cats")).then(e=>sng(e))};zzfxV=.3,zzfx=((e=1,t=.05,n=220,a=0,o=0,s=.1,r=0,i=1,c=0,l=0,p=0,d=0,u=0,m=0,f=0,g=0,h=0,$=1,w=0,k=0)=>{let b,y,N=44100,v=2*M.PI,x=c*=500*v/N/N,G=n*=(1-t+2*t*M[ra](t=[]))*v/N,T=0,C=0,S=0,O=1,E=0,z=0,A=0;for(l*=500*v/N**3,f*=v/N,p*=v/N,d*=N,u=N*u|0,y=(a=N*a+9)+(w*=N)+(o*=N)+(s*=N)+(h*=N)|0;S<y;t[S++]=A)++z%(100*g|0)||(A=r?1<r?2<r?3<r?M.sin((T%v)**3):M.max(M.min(M.tan(T),1),-1):1-(2*T/v%2+2)%2:1-4*M.abs(M.round(T/v)-T/v):M.sin(T),A=(u?1-k+k*M.sin(v*S/u):1)*(0<A?1:-1)*M.abs(A)**i*e*zzfxV*(S<a?S/a:S<a+w?1-(S-a)/w*(1-$):S<a+w+o?$:S<y-h?(y-S-h)/s*$:0),A=h?A/2+(h>S?0:(S<y-h?1:(y-S)/h)*t[S-h|0]/2):A),T+=(b=(n+=c+=l)*M.cos(f*C++))-b*m*(1-1e9*(M.sin(S)+1)%2),O&&++O>d&&(n+=p,G+=p,O=0),!u||++E%u||(n=G,c=x,O=O||1);return(e=zzfxX.createBuffer(1,y,N)).getChannelData(0).set(t),(n=zzfxX.createBufferSource()).buffer=e,n.connect(zzfxX.destination),n.start(),n}),zzfxX=new(window.AudioContext||webkitAudioContext);const wordClues=e=>{const t=Object.keys(e.d[0]),n=Object.keys(e.d[1]||{});let a,o,s;switch(a=(curG.cats[curG.cNms.indexOf(t[0])]||[]).indexOf(e.d[0][t[0]])+1,o=(curG.cats[curG.cNms.indexOf(t[1])]||[]).indexOf(e.d[0][t[1]])+1,n.length&&(s=(curG.cats[curG.cNms.indexOf(n[0])]||[]).indexOf(e.d[1][n[0]])+1),opt.lang){case"es":switch(e.type){case"ti":return`la persona con ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>, también tiene ${t[1]}  <span data-option="${o}">${e.d[0][t[1]]}</span>`;case"tiai":return`<span class="person">${curG.slotNames[e.d[1].i]}</span>tiene ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"b":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> está a la derecha de ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"a":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> está a la izquierda de ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"nt":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> está cerca de ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`}break;case"fr":switch(e.type){case"ti":return`la personne avec ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>, aussi tiens ${t[1]}  <span data-option="${o}">${e.d[0][t[1]]}</span>`;case"tiai":return`<span class="person">${curG.slotNames[e.d[1].i]}</span>tiens ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"b":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> est à droite de ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"a":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> est à gauche de ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"nt":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> est a coté de ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`}break;case"zh-CN":switch(e.type){case"ti":return`有 <span data-option="${a}">${e.d[0][t[0]]}</span> ${t[0]} 的人, 也有 <span data-option="${o}">${e.d[0][t[1]]}</span> 的${t[1]}`;case"tiai":return`<span class="person">${curG.slotNames[e.d[1].i]}</span> 有 <span data-option="${a}">${e.d[0][t[0]]}</span> 的${t[0]}`;case"b":return`${n[0]} <span data-option="${s}">${e.d[1][n[0]]}</span> 在 ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span> 的右边`;case"a":return`${n[0]} <span data-option="${s}">${e.d[1][n[0]]}</span> 在 ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span> 的左边`;case"nt":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> 就在 ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span> 的旁边`}case"tp":switch(e.type){case"ti":return`jan li jo e ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span> li jo e ${t[1]}  <span data-option="${o}">${e.d[0][t[1]]}</span> kin`;case"tiai":return`jan <span class="person">${curG.slotNames[e.d[1].i]}</span>li jo e ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"b":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> li lon poka pini pi ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"a":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> li lon poka open pi ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"nt":return`${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span> li lon poka pi ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`}break;default:switch(e.type){case"ti":return`The one with ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>, also has ${t[1]}  <span data-option="${o}">${e.d[0][t[1]]}</span>`;case"tiai":return`<span class="person">${curG.slotNames[e.d[1].i]}</span>has ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>`;case"a":return`One left of ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>, is ${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}`;case"b":return`One right of ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>, is ${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span>`;case"nt":return`Next to ${t[0]}  <span data-option="${a}">${e.d[0][t[0]]}</span>, is ${n[0]}  <span data-option="${s}">${e.d[1][n[0]]}</span>`}}},showClueArr=(e,t)=>{[...d.getElementsByClassName("loading")].forEach(e=>e[cl].remove("loading")),e.map(wordClues).forEach((e,t)=>{const n=ce("div");n[cl].add("waiting"),n.innerHTML="<div>🔍</div>",workbook[ac](n),timeout(()=>{n[cl].remove("waiting"),n.innerHTML="",timeout(()=>{n.onclick=(e=>{say(e.target.innerText.replace(findSkin,""))}),n.innerHTML=e,n[cl].add("clue"),sfx([2,0,60,.01,,.26,1,2.5,.2,,,,1,,,,,.3,.05]),say(n.innerText.replace(findSkin,""))},100)},clueTime*(t+(sound?0:1)))}),t&&timeout(()=>{const e=nnote();workbook[ac](e)},1e3*(e.length+1))},scoreMatrix=()=>{curG.attempts+=1;const e=curG.levels[curG.levels.length-1].cb[0];let t=!0;for(let n=0;n<curG.sNum;n++)for(let a=0;a<curG.cats.length;a++){const o=userBoard[n][curG.cNms[a]];o.span[cl].remove("correct,incorrect"),"␣"!==o.d?e[n][curG.cNms[a]]===o.d?timeout(()=>{o.span.parentElement.style.pointerEvents="none",o.span[cl].add("correct"),o.span[cl].remove("incorrect")},100*(a+n)):(timeout(()=>{o.span[cl].add("incorrect"),sfx([1.82,,1554,,.03,.23,,1.67,,,,,,,34,,.06,.62,.06])},100*(a+n)),t=!1):t=!1}return t},extraClueButton=()=>{if(!curG.extraClue)return;const e=ce("button");e[cl].add("clue"),e.onclick=(()=>{e.parentNode.removeChild(e),curG.extraClue()}),e.innerText="+ 🔍";const t=ce("div");t[cl].add("spacer"),workbook[ac](t),workbook[ac](e)},nnote=()=>{const e=ce("div");return e[cl].add("clue"),e.innerHTML='<h3 class="loading">&nbsp;</h3>',e};let clueTime,levelTime;const setupWorkbook=()=>{timeouts.forEach(e=>clearTimeout(e)),clueTime=sound?6e3:800,levelTime=sound?2e3:7e3;const e=1===curG.sNum?sound?7e3:4e3:sound?2500:1e3;let t=0;curG.levels.forEach((n,a,o)=>{timeout(()=>{if(curG.level=a,showClueArr(n.rwc,a<o.length-1),curG.level===o.length-1){const e=nnote();workbook[ac](e),timeout(()=>{e[cl].add("clue"),e[cl].remove("loading"),e.innerHTML=`<br/><h3>${opt[opt.lang].solvable}</h3>`,opt.t=!1,say(opt[opt.lang].solvable),workbook[ac](e),extraClueButton()},clueTime*n.rwc.length-1+500*(curG.sNum+curG.catNum))}},t*clueTime+e+a*levelTime),t+=n.rwc.length});const n=ce("div");1===curG.sNum?(n.innerHTML=`<div class="tutorial">${opt[opt.lang].tutorial}</div>`,say(opt[opt.lang].tutorial)):(newDet(),n.innerHTML=`<h1><span>${det}</span> ${opt[opt.lang].newCase}</h1>`,say(opt[opt.lang].newCase)),workbook[ac](n),workbook[ac](nnote())};
