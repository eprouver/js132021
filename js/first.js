const ge = 'getElementById';
const cl = 'classList';
const ac = 'appendChild';
const d = document;
const menu = d[ge]('menu');
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
  workbook.innerHTML = '';
  matrix.innerHTML = '';
  menu.style.display = 'none';
};

const makeGames = () => {
  clear();
  pause = false;
  games = [];

  // tutorial first first
  if (!tutorial) {
    // small board for tutorial
    addGame(1, 2).then((g) => games.push(g));
  }
  timeout(() => {
    // Ramping Difficulty
    for (let slot = 2; slot < 5; slot++) {
      for (let cat = 2; cat < 5; cat++){
        addGame(~~slot, ~~cat).then((g) => games.push(g));
      }
    }
  }, !tutorial ? 1000 : 0);

 tutorial = true;

  files = 0;
  sng();
};

let files = 0;

const sng = (game) => {
  if (!game) {
    files += 1;
    if (files > opt.files) {
      showChoose();
      files = 0;
      return;
    }
  }

  curG = game || games.shift();
  // Tutorial
  if (!curG && games.length === 0) {
    timeout(sng, 500);
    return;
  }

  workbook.setAttribute('data-msg', `${opt[opt.lang].wellDone}`);
  clear();
  if (games.length < 4) {
    // Add new random game
    addGame(~~(Math.random() * 5) + 2, ~~(Math.random() * 5) + 2).then((g) => games.push(g));
  }
  opt.t = true;
  selectNewVoice();
  sfx([, , -62, .02, .03, .23, , 10.8, 5.8, , 200, -0.07, , .3, 2, , , 1.3, .13, .3]);

  createMatrix();
  cont[cl].remove('end');
  timeout(() => {
    setupWorkbook(curG);
  }, 500);
};

function scroller(event){
  switch(event.deltaMode){
    case 0: 		//DOM_DELTA_PIXEL		Chrome
      wb.scrollTop+=event.deltaY
      wb.scrollLeft+=event.deltaX
      break;
    case 1: 		//DOM_DELTA_LINE		Firefox
      wb.scrollTop+=15*event.deltaY
      wb.scrollLeft+=15*event.deltaX
      break;
    case 2: 		//DOM_DELTA_PAGE
      wb.scrollTop+=0.03*event.deltaY
      wb.scrollLeft+=0.03*event.deltaX
      break;
  }
  event.stopPropagation();
}

d.onwheel = scroller;

if (d.monetization && d.monetization.state) {
  d[ge]('mon-files').style.display = 'inline-block';
  d[ge]('coil').innerHTML = 'You\'re signed into COIL.';
}
