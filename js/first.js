const ge = 'getElementById';
const cl = 'classList';
const ac = 'appendChild';
const ih = 'innerHTML';
const d = document;
const menu = d[ge]('menu');
const M = Math;
const ra = 'random';
const raf = requestAnimationFrame;
const pauseGame = () => {
  say('')
  pause = true;
  games = [];
  clear();
  menu.style.display = 'flex';
  cont[cl].remove('end');
  timeouts.forEach(t => clearTimeout(t));
}

let tutorial = false;

const clear = () => {
  wbc[ih] = '';
  matrix[ih] = '';
  menu.style.display = 'none';
};

let tt;

const makeGames = () => {
  clear();
  pause = false;
  games = [];
  files = 0;

  // tutorial first first
  if (!tutorial) {
    // small board for tutorial
    sng(tt);
    tutorial = true;
    files = 0;
  } else {
    sng();
  }
  to(() => {
    // Ramping Difficulty
    for (let slot = 2; slot < 5; slot++) {
      for (let cat = 2; cat < 5; cat++){
        addGame(~~slot, ~~cat).then((g) => games.push(g));
      }
    }
  }, !tutorial ? 1000 : 0);
};

let files = 0;

const sng = (game) => {
  pause = false;
  if (games.length < 2) {
    const nn = () => ~~(M[ra]() * 5) + 2;
    // Add new random game
    let one = nn(), two = nn();
    while(one + two > 9) {
      one = nn(), two = nn();
    }
    addGame(one, two).then((g) => games.push(g));
  }

  curG = game || games.shift();

  if (!curG){
    to(sng, 500);
    return;
  }

  if (!game) {
    files += 1;
    if (files > opt.files) {
      showChoose();
      files = 0;
      return;
    }
  }

  wbc.setAttribute('data-msg', `${opt[opt.lang].wellDone}`);
  clear();
  opt.t = true;
  selectNewVoice();
  sfx([, , -62, .02, .03, .23, , 10.8, 5.8, , 200, -0.07, , .3, 2, , , 1.3, .13, .3]);

  createMatrix();
  cont[cl].remove('end');
  to(() => {
    setupWorkbook(curG);
  }, 500);
};

function scroller(event){
  switch(event.deltaMode){
    case 0: 		//DOM_DELTA_PIXEL		Chrome
      wbc.scrollTop+=event.deltaY
      break;
    case 1: 		//DOM_DELTA_LINE		Firefox
      wbc.scrollTop+=15*event.deltaY
      break;
    case 2: 		//DOM_DELTA_PAGE
      wbc.scrollTop+=0.03*event.deltaY
      break;
  }
  event.stopPropagation();
}

d.onwheel = scroller;

if (d.monetization && d.monetization.state) {
  d[ge]('mon-files').style.display = 'inline-block';
  d[ge]('coil')[ih] = 'You\'re signed into COIL.';
}
