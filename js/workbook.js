// workbook
//['ti', 'tiai', 'a', 'b', 'nt']
// options.slotNames

const wordClues = clue => {
  const keys = Object.keys(clue.d[0]);
  const keys2 = Object.keys(clue.d[1] || {});
  let option, option2, option3;

  option = (currentGame.cats[currentGame.cNms.indexOf(keys[0])] || []).indexOf(clue.d[0][keys[0]]) + 1;
  option2 = (currentGame.cats[currentGame.cNms.indexOf(keys[1])] || []).indexOf(clue.d[0][keys[1]]) + 1;
  if (keys2.length)
  option3 = (currentGame.cats[currentGame.cNms.indexOf(keys2[0])] || []).indexOf(clue.d[1][keys2[0]]) + 1;

  switch(options.lang) {
    case 'es':
    switch(clue.type) {
      case 'ti':
        return `la persona con ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>, también tiene ${keys[1]}  <span data-option="${option2}">${clue.d[0][keys[1]]}</span>`;
      break;
      case 'tiai':
        return `<span class="person">${currentGame.slotNames[clue.d[1].i]}</span>tiene ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'b':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> está a la derecha de ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'a':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> está a la izquierda de ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'nt':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> está cerca de ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
    }
    break;
    case 'fr':
    switch(clue.type) {
      case 'ti':
        return `la personne avec ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>, aussi tiens ${keys[1]}  <span data-option="${option2}">${clue.d[0][keys[1]]}</span>`;
      break;
      case 'tiai':
        return `<span class="person">${currentGame.slotNames[clue.d[1].i]}</span>tiens ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'b':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> est à droite de ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'a':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> est à gauche de ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'nt':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> est a coté de ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
    }
    break;
    case 'zh-CN':
    switch(clue.type) {
      case 'ti':
        return `有 <span data-option="${option}">${clue.d[0][keys[0]]}</span> ${keys[0]} 的人, 也有 <span data-option="${option2}">${clue.d[0][keys[1]]}</span> 的${keys[1]}`;
      break;
      case 'tiai':
        return `<span class="person">${currentGame.slotNames[clue.d[1].i]}</span> 有 <span data-option="${option}">${clue.d[0][keys[0]]}</span> 的${keys[0]}`;
      break;
      case 'b':
        return `${keys2[0]} <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> 在 ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span> 的右边`;
      break;
      case 'a':
        return `${keys2[0]} <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> 在 ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span> 的左边`;
      break;
      case 'nt':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> 就在 ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span> 的旁边`;
      break;
    }
    case 'tp':
    switch(clue.type) {
      case 'ti':
        return `jan li jo e ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span> li jo e ${keys[1]}  <span data-option="${option2}">${clue.d[0][keys[1]]}</span> kin`
      break;
      case 'tiai':
        return `jan <span class="person">${currentGame.slotNames[clue.d[1].i]}</span>li jo e ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'b':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> li lon poka pini pi ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'a':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> li lon poka open pi ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'nt':
        return `${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span> li lon poka pi ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
    }
    break;
    default:
    switch(clue.type) {
      case 'ti':
        return `The one with ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>, also has ${keys[1]}  <span data-option="${option2}">${clue.d[0][keys[1]]}</span>`
      break;
      case 'tiai':
        return `<span class="person">${currentGame.slotNames[clue.d[1].i]}</span>has ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>`;
      break;
      case 'a':
        return `One left of ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>, is ${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}`;
      break;
      case 'b':
        return `One right of ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>, is ${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span>`;
      break;
      case 'nt':
        return `Next to ${keys[0]}  <span data-option="${option}">${clue.d[0][keys[0]]}</span>, is ${keys2[0]}  <span data-option="${option3}">${clue.d[1][keys2[0]]}</span>`;
      break;
    }
    break;
  }
};

const showClueArr = (arr, div) => {
  [...document.getElementsByClassName('loading')].forEach(c => c[cl].remove('loading'));
  arr.map(wordClues).forEach((clue, i) => {
      const note = ce('div');
      note[cl].add('waiting')
      note.innerHTML = '<div>🔍</div>';
      workbook.appendChild(note);
    timeout(() => {
      note[cl].remove('waiting');
      note.innerHTML = '';
      timeout(() => {
        note.onclick = (e) => { say(e.target.innerText.replace(findSkin, '')) };
        note.innerHTML = clue;
        note[cl].add('clue');
        sfx([2,0,60,.01,,.26,1,2.5,.2,,,,1,,,,,.3,.05]);
        say(note.innerText.replace(findSkin, ''));
      }, 100);
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
    const finalBoard = currentGame.levels[currentGame.levels.length -1].cb[0];
    let cleared = true;
    for(let col = 0; col < currentGame.slotNum; col++) {
      for(let row = 0; row < currentGame.cats.length; row++) {
        const user = userBoard[col][currentGame.cNms[row]];
        user.span[cl].remove('correct,incorrect');
        if (user.d === options[options.lang].empty){
          cleared = false;
          continue;
        }
        if (finalBoard[col][currentGame.cNms[row]] === user.d) {
          timeout(() => {
            user.span[cl].add('correct');
            user.span[cl].remove('incorrect');
          }, (row + col) * 100)

        } else {
          timeout(() => {
            user.span[cl].remove('correct');
            user.span[cl].add('incorrect');
            sfx([1.82,,1554,,.03,.23,,1.67,,,,,,,34,,.06,.62,.06]);
          }, (row + col) * 100)

          cleared = false;
        }
      }
    }

    return cleared;
  // } else if (currentGame.levels[currentGame.level].cb.length === 1) {
  //   // puzzle has only one solution - but might not be filled in
  //
  // } else {
  //   // score current selection against all possibles
  // }
}

const extraClueButton = () => {
  if (!currentGame.extraClue) return;
  const checker = ce('button');
  checker[cl].add('clue');
  checker.onclick = () => {
    sfx([3,,22,,.14,.08,1,2.8,4,-0.7,-300,,,1.9,,.5,.01,.75,.01]);
    checker.parentNode.removeChild(checker);
    currentGame.extraClue();
  };
  checker.innerText = '+ 🔍';
  for (let i = 0; i < 3; i++) {
    const spacer = ce('br');
    workbook.appendChild(spacer);
  }
  workbook.appendChild(checker);
}

const nnote = () =>  {
  const n = ce('div');
  n[cl].add('clue');
  n.innerHTML = '<h3 class="loading">&nbsp;</h3>';
  return n;
}

let clueTime, levelTime;
const setupWorkbook = () => {
  timeouts.forEach(t => clearTimeout(t));
  clueTime = (sound ? 6000 : 800);
  levelTime = (sound ? 2000 : 7000);
  const tutorial = currentGame.slotNum === 1 ? (sound ? 7000 : 4000) : (sound ? 2500 : 1000);

  let clues = 0;
  currentGame.levels.forEach((level, i, arr) => {
    timeout(() => {
      currentGame.level = i;
      showClueArr(level.rwc, i < arr.length - 1);

      // if it's the last level still show the ellipse
      if (currentGame.level === arr.length - 1) {
        const note = nnote();
        workbook.appendChild(note);
        timeout(() => {
          note[cl].add('clue');
          note[cl].remove('loading');
          note.innerHTML = `<br/><h3>${options[options.lang].solvable}</h3>`;
          // options.t = false;
          say(options[options.lang].solvable);
          workbook.appendChild(note);
          extraClueButton();
        // }, clueTime * level.rwc.length - 1 + (currentGame.slotNum + currentGame.catNum) * 500);
        }, clueTime * level.rwc.length - 1 + 3000);
      }
    }, clues * clueTime + tutorial + (i * levelTime));

    clues += level.rwc.length;
  });

  const note = ce('div');
  if (currentGame.slotNum === 1) {
    note.innerHTML = `<div class="tutorial">${options[options.lang].tutorial}</div>`;
    say(options[options.lang].tutorial);
  } else {
    newDet();
    note.innerHTML = `<h1><span>${det}</span> ${options[options.lang].newCase}</h1>`;
    say(options[options.lang].newCase);
  }

  workbook.appendChild(note);
  workbook.appendChild(nnote());
};
