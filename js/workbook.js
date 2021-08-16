// workbook
//['ti', 'tiai', 'a', 'b', 'nt']
// options.slotNames

const wordClues = clue => {
  const keys = Object.keys(clue.data[0]);
  const keys2 = Object.keys(clue.data[1] || {});
  let option, option2, option3;

  option = currentGame.categories[currentGame.categoryNames.indexOf(keys[0])].indexOf(clue.data[0][keys[0]]) + 1;
  option2 = (currentGame.categories[currentGame.categoryNames.indexOf(keys[1])] || []).indexOf(clue.data[0][keys[1]]) + 1;
  if (keys2.length)
  option3 = (currentGame.categories[currentGame.categoryNames.indexOf(keys2[0])] || []).indexOf(clue.data[1][keys2[0]]) + 1;

  switch(options.lang) {
    case 'es':
    switch(clue.type) {
      case 'ti':
        return `la persona con ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>, también tiene ${keys[1]}  <span data-option="${option2}">${clue.data[0][keys[1]]}</span>`
      break;
      case 'tiai':
        return `<span class="person">${currentGame.slotNames[clue.data[1].index]}</span>tiene ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'b':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> está a la derecha de ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'a':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> está a la izquierda de ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'nt':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> está cerca de ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
    }
    break;
    case 'fr':
    switch(clue.type) {
      case 'ti':
        return `la personne avec ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>, aussi tiens ${keys[1]}  <span data-option="${option2}">${clue.data[0][keys[1]]}</span>`
      break;
      case 'tiai':
        return `<span class="person">${currentGame.slotNames[clue.data[1].index]}</span>tiens ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'b':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> est à droite de ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'a':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> est à gauche de ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'nt':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> est a coté de ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
    }
    break;
    case 'zh-CN':
    switch(clue.type) {
      case 'ti':
        return `有 <span data-option="${option}">${clue.data[0][keys[0]]}</span> ${keys[0]} 的人, 也有 <span data-option="${option2}">${clue.data[0][keys[1]]}</span> 的${keys[1]}  `
      break;
      case 'tiai':
        return `<span class="person">${currentGame.slotNames[clue.data[1].index]}</span> 有 <span data-option="${option}">${clue.data[0][keys[0]]}</span> 的${keys[0]}`;
      break;
      case 'b':
        return `${keys2[0]} <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> 在 ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span> 的右边`;
      break;
      case 'a':
        return `${keys2[0]} <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> 在 ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span> 的左边`;
      break;
      case 'nt':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> 就在 ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span> 的旁边`;
      break;
    }
    case 'tp':
    switch(clue.type) {
      case 'ti':
        return `jan li jo e ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>, kin jo e ${keys[1]}  <span data-option="${option2}">${clue.data[0][keys[1]]}</span>`
      break;
      case 'tiai':
        return `jan <span class="person">${currentGame.slotNames[clue.data[1].index]}</span>li jo e ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'b':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> li lon poka pini e ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'a':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> li lon poka open e ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'nt':
        return `${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span> li lon poka e ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
    }
    break;
    default:
    switch(clue.type) {
      case 'ti':
        return `The one with ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>, also has ${keys[1]}  <span data-option="${option2}">${clue.data[0][keys[1]]}</span>`
      break;
      case 'tiai':
        return `<span class="person">${currentGame.slotNames[clue.data[1].index]}</span>has ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>`;
      break;
      case 'a':
        return `One left of ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>,
        is ${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}`;
      break;
      case 'b':
        return `One right of ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>, is ${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span>`;
      break;
      case 'nt':
        return `Next to ${keys[0]}  <span data-option="${option}">${clue.data[0][keys[0]]}</span>, is ${keys2[0]}  <span data-option="${option3}">${clue.data[1][keys2[0]]}</span>`;
      break;
    }
    break;
  }
};

const showClueArr = (arr, div) => {
  [...document.getElementsByClassName('loading')].forEach(c => c.classList.remove('loading'));
  arr.map(wordClues).forEach((clue, i) => {
      const note = ce('div');
      note.classList.add('waiting')
      note.innerHTML = '<h1>✉️</h1>';
      workbook.appendChild(note);
    timeout(() => {
      note.classList.add('clue');
      note.classList.remove('waiting');
      note.onclick = (e) => { say(e.target.innerText.replace(findSkin, '')) };
      note.innerHTML = clue;
      sfx([2,0,60,.01,,.26,1,2.5,.2,,,,1,,,,,.3,.05]);
      say(note.innerText.replace(findSkin, ''));
    }, clueTime * (i + (sound ? 0 : 1)));
  });

  if (div) {
    timeout(() => {
      const note = nnote();
      workbook.appendChild(note);
    }, (arr.length + 1) * 1000);
  }
}

const scoreMatrix = () => {
  currentGame.attempts += 1;

  //if (currentGame.level === currentGame.levels.length - 1) {
    // player is on last level check entire board
    const finalBoard = currentGame.levels[currentGame.levels.length -1].correctBoards[0];
    let cleared = true;
    for(let col = 0; col < currentGame.slotNum; col++) {
      for(let row = 0; row < currentGame.categories.length; row++) {
        const user = userBoard[col][currentGame.categoryNames[row]];
        user.span.classList.remove('correct,incorrect');
        if (user.data === options[options.lang].empty){
          cleared = false;
          continue;
        }
        if (finalBoard[col][currentGame.categoryNames[row]] === user.data) {
          timeout(() => {
            user.span.classList.add('correct');
            user.span.classList.remove('incorrect');
          }, (row + col) * 100)

        } else {
          timeout(() => {
            user.span.classList.remove('correct');
            user.span.classList.add('incorrect');
            sfx([1.82,,1554,,.03,.23,,1.67,,,,,,,34,,.06,.62,.06]);
          }, (row + col) * 100)

          cleared = false;
        }
      }
    }

    return cleared;
  // } else if (currentGame.levels[currentGame.level].correctBoards.length === 1) {
  //   // puzzle has only one solution - but might not be filled in
  //
  // } else {
  //   // score current selection against all possibles
  // }
}

const extraClueButton = () => {
  const checker = ce('button');
  checker.classList.add('clue');
  checker.onclick = () => {
    sfx([3,,22,,.14,.08,1,2.8,4,-0.7,-300,,,1.9,,.5,.01,.75,.01]);
    checker.parentNode.removeChild(checker);
    currentGame.extraClue();
  };
  checker.innerText = '📩';
  for (let i = 0; i < 3; i++) {
    const spacer = ce('br');
    workbook.appendChild(spacer);
  }
  workbook.appendChild(checker);
}

const nnote = () =>  {
  const n = ce('div');
  n.classList.add('clue');
  n.innerHTML = '<h3 class="loading">&nbsp;</h3>';
  return n;
}

let clueTime, levelTime;
const setupWorkbook = () => {
  clueTime = (sound ? 6000 : 800);
  levelTime = (sound ? 2000 : 7000);
  const tutorial = currentGame.slotNum === 1 ? 7000 : 0;

  let clues = 0;
  currentGame.levels.forEach((level, i, arr) => {
    timeout(() => {
      currentGame.level = i;
      showClueArr(level.rewardClues, i < arr.length - 1);

      // if it's the last level still show the ellipse
      if (currentGame.level === arr.length - 1) {
        const note = nnote();
        workbook.appendChild(note);
        timeout(() => {
          note.classList.add('clue');
          note.classList.remove('loading');
          note.innerHTML = `<br/><br/><h3>${options[options.lang].solvable}</h3>`;
          say(options[options.lang].solvable);
          workbook.appendChild(note);
          extraClueButton();
        }, clueTime * level.rewardClues.length - 1);
      }
    }, clues * clueTime + tutorial + (i * levelTime));

    clues += level.rewardClues.length;
  });

  if (tutorial > 0) {
    const note = ce('div');
    note.innerHTML = `<div class="tutorial">${options[options.lang].tutorial}</div>`;
    say(options[options.lang].tutorial);
    workbook.appendChild(note);
    workbook.appendChild(nnote());
  }
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
