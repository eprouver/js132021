let userBoard = [];

const createMatrix = () => {
  userBoard = [];
  for (let i = 0; i < currentGame.slotNum; i++) {
    userBoard.push({});
  }
  // why does this make one object by reference
  // userBoard = Array(currentGame.slotNum).fill(new Object());

  const table = ce('table');
  const col = ce('col');
  col.setAttribute('span', 1);
  table.appendChild(col);
  let labelRow = ce('tr');
  let spacer = ce('td');
  labelRow.appendChild(spacer);

  currentGame.slotNames.forEach(col => {
    const newCol = ce('th');
    newCol[cl].add('person');
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
    userBoard[slot][category] = { d: current, span };
    span.innerText = current;
    span[cl].remove('correct','incorrect');
    span.setAttribute('data-option', options.indexOf(current));
  };

  currentGame.cats.forEach((r, i) => {
    labelRow = ce('tr');
    labelRow[cl].add('mrow');
    spacer = ce('th');
    spacer.innerHTML = currentGame.cNms[i];
    labelRow.appendChild(spacer);

    const clickOptions = ['␣', ...r];
    currentGame.slotNames.forEach((col, slot) => {
      const newCol = ce('td');
      newCol[cl].add('draggable');

      const newSpan = ce('span');
      newSpan.setAttribute('data-option', 0);
      newSpan.innerHTML = clickOptions[0];
      userBoard[slot][currentGame.cNms[i]] = { d: '␣', span: newSpan };
      newCol.onclick = (e) => {
        re(newSpan, clickOptions, slot, currentGame.cNms[i]);
      };
      newCol.appendChild(newSpan);
      labelRow.appendChild(newCol);
    });

    table.appendChild(labelRow);

    labelRow = ce('tr');
    labelRow[cl].add('mrow');
  });

  labelRow = ce('tr');
  labelRow[cl].add('mrow');
  labelRow.appendChild(ce('td'));

  const checker = ce('button');
  checker[cl].add('clue');
  checker.onclick = () => {
    if (scoreMatrix()) {
      checker.parentNode.parentNode.parentNode.removeChild(checker.parentNode.parentNode);
      workbook.innerHTML = '';

      workbook.scroll(0,0);
      cont[cl].add('end');
      say(options[options.lang].wellDone);
      // say(options[options.lang].wellDone + (options.t ? '... 100%': ''));
      // if (options.t) {
      //   d[ge]('hun').innerHTML = d[ge]('hun').innerHTML + '🎖️';
      // } else {
      //   d[ge]('hun').innerHTML = '';
      // }
      sfx([1.4,,474,,.25,.63,1,1.145,-0.3,,100,.09,.09,,,,.09,.4,.65]);
      pause = true;
      timeout(() => {
        pause = false;
        workbook.innerHTML = ``;
        timeouts.forEach(t => clearTimeout(t));
        selectNewVoice();
        startNewGame();
      }, 3000);
    }
  };
  checker.innerText = '👍';

  spacer = ce('td');
  spacer.setAttribute('colspan', currentGame.slotNum );
  spacer.appendChild(checker);
  labelRow.appendChild(spacer);

  table.appendChild(labelRow);

  matrix.appendChild(table);

};
