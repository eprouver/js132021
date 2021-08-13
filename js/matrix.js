let userBoard = [];

const createMatrix = () => {
  userBoard = [];
  for (let i = 0; i < currentGame.slotNum; i++) {
    userBoard.push({});
  }
  // why does this make one object by reference
  // userBoard = Array(currentGame.slotNum).fill(new Object());

  const table = document.createElement('table');
  const col = document.createElement('col');
  col.setAttribute('span', 1);
  table.appendChild(col);
  let labelRow = document.createElement('tr');
  let spacer = document.createElement('td');
  labelRow.appendChild(spacer);

  currentGame.slotNames.forEach(col => {
    const newCol = document.createElement('th');
    newCol.classList.add('person');
    newCol.innerHTML = `<span>${col}</span>`;
    labelRow.appendChild(newCol)
  });

  table.appendChild(labelRow);

  const re = (span, options, slot, category) => {
    let current = span.innerText;
    current = options[options.indexOf(current) + 1];
    if (!current) {
      current = options[0]
    }

    sfx([.7,.45,82.40689,,,.02,,3,35,,-150 + ((options.indexOf(current) + 1) * 100),-0.06,,,,,,.5,.03,.21]);
    userBoard[slot][category] = { data: current, span };
    span.innerText = current;
    span.classList.remove('correct','incorrect');
    span.setAttribute('data-option', options.indexOf(current));
  };

  currentGame.categories.forEach((r, i) => {
    labelRow = document.createElement('tr');
    labelRow.classList.add('mrow');
    spacer = document.createElement('th');
    spacer.innerHTML = currentGame.categoryNames[i]
    labelRow.appendChild(spacer);

    const clickOptions = [options[options.lang].empty, ...r];
    currentGame.slotNames.forEach((col, slot) => {
      const newCol = document.createElement('td');
      newCol.classList.add('draggable');

      const newSpan = document.createElement('span');
      newSpan.setAttribute('data-option', 0);
      newSpan.innerText = clickOptions[0];
      userBoard[slot][currentGame.categoryNames[i]] = { data: options[options.lang].empty, span: newSpan };
      newCol.onclick = (e) => {
        re(newSpan, clickOptions, slot, currentGame.categoryNames[i]);
      };
      newCol.appendChild(newSpan);
      labelRow.appendChild(newCol);
    });

    table.appendChild(labelRow);

    labelRow = document.createElement('tr');
    labelRow.classList.add('mrow');
  });

  labelRow = document.createElement('tr');
  labelRow.classList.add('mrow');
  const attempt = document.createElement('td');
  attempt.innerHTML = `${options[options.lang].attempts}: <h2>0</h2>`;
  labelRow.appendChild(attempt);

  const checker = document.createElement('button');
  checker.classList.add('clue');
  checker.onclick = () => {
    if (scoreMatrix()) {
      checker.parentNode.parentNode.parentNode.removeChild(checker.parentNode.parentNode);
      workbook.innerHTML = '';
      [...document.querySelectorAll('th.person')].forEach((p, i) => p.classList.add('bigger'));

      workbook.scroll(0,0);
      cont.classList.add('end');
      say(options[options.lang].wellDone);
      sfx(sounds.win);
      pause = true;
      timeout(() => {
        pause = false;
        selectNewVoice();
        startNewGame();
      }, 3000);
    }

    attempt.innerHTML = `${options[options.lang].attempts}: <h2>${currentGame.attempts}</h2>`;
  };
  checker.innerText = '👍';

  spacer = document.createElement('td');
  spacer.setAttribute('colspan', currentGame.slotNum);
  spacer.appendChild(checker);
  labelRow.appendChild(spacer);

  table.appendChild(labelRow);

  matrix.appendChild(table);

};
