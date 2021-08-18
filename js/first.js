const menu = document.getElementById('menu');
const pauseGame = () => {
  say('')
  pause = true;
  games = [];
  clear();
  menu.style.display = 'flex';
  cont.classList.remove('end');
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
  startNewGame();
};

let files = 0;

const startNewGame = (game) => {
  if (!game) {
    files += 1;
    if (files % options.files === 0) {
      showChoose();
      files = 1;
      return;
    }
  }

  workbook.setAttribute('data-msg', `${options[options.lang].wellDone}`);
  clear();
  if (currentGame && games.length < 4) {
    // Add new random game
    let total = 9;
    const one = ~~(Math.random() * 4 + 3);
    addGame(one, total - one).then((g) => games.push(g));
  }
  if (games.length === 0) {
    timeout(startNewGame, 500);
    return;
  }
  selectNewVoice();
  currentGame = game || games.shift();
  sfx([, , -62, .02, .03, .23, , 10.8, 5.8, , 200, -0.07, , .3, 2, , , 1.3, .13, .3]);

  createMatrix();
  cont.classList.remove('end');
  timeout(() => {
    setupWorkbook(currentGame);
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

document.onwheel = scroller;
