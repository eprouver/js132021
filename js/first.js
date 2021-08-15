const menu = document.getElementById('menu');
const pauseGame = () => {
  say('')
  pause = true;
  games = [];
  menu.style.display = 'flex';
  workbook.innerHTML = '';
  cont.classList.remove('end');
  matrix.innerHTML = '';
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

  // "Tutorial"
  if (!tutorial) {
    // small board for tutorial
    addGame(1, 2);
    tutorial = true;
    timeout(() => {
      // Ramping Difficulty
      for (let slot = 2; slot < 5; slot++) {
        for (let cat = 2; cat < 5; cat++) {
          addGame(~~slot, ~~cat);
        }
      }
    }, 1000);
  } else {
    sfx([1.77, , 202, .07, .14, .48, , .43, -4.8, , -5, .06, .16, , , , .14, .76]);
    for (let slot = 2; slot < 5; slot++) {
      for (let cat = 2; cat < 5; cat++) {
        addGame(~~slot, ~~cat);
      }
    }
  }

  startNewGame();
};

const startNewGame = () => {
  newDet();
  workbook.setAttribute('data-msg', `${options[options.lang].wellDone}`);
  clear();
  if (currentGame && games.length < 4) {
    // Add new random game
    let total = 9;
    const one = ~~(Math.random() * 4 + 3);
    addGame(one, total - one);
  }
  if (games.length === 0) {
    timeout(startNewGame, 500);
    return;
  }
  selectNewVoice();
  currentGame = games.shift();
  sfx([, , -62, .02, .03, .23, , 10.8, 5.8, , 200, -0.07, , .3, 2, , , 1.3, .13, .3]);

  currentGame.setupGame();
  cont.classList.remove('end');
  timeout(() => {
    setupWorkbook(currentGame);
  }, 500);
};
