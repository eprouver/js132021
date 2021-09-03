let userBoard = [];

const createMatrix = () => {
  userBoard = [];
  for (let i = 0; i < curG.sNum; i++) {
    userBoard.push({});
  }
  // why does this make one object by reference
  // userBoard = Array(curG.sNum).fill(new Object());

  const table = ce('table');
  const col = ce('col');
  col.setAttribute('span', 1);
  table[ac](col);
  let labelRow = ce('tr');
  let spacer = ce('td');
  labelRow[ac](spacer);

  curG.slotNames.forEach(col => {
    const newCol = ce('th');
    newCol[cl].add('person');
    newCol.innerHTML = `<span>${col}</span>`;
    labelRow[ac](newCol)
  });

  table[ac](labelRow);

  const re = (span, opt, slot, category) => {
    let current = span.innerText;
    current = opt[opt.indexOf(current) + 1];
    if (!current) {
      current = opt[0]
    }

    sfx([.7,.45,82.40689,,,.02,,3,35,,-150 + ((opt.indexOf(current) + 1) * 100),-0.06,,,,,,.5,.03,.21]);
    userBoard[slot][category] = { d: current, span };
    span.innerText = current;
    span[cl].remove('correct','incorrect');
    span.setAttribute('data-option', opt.indexOf(current));
  };

  curG.cats.forEach((r, i) => {
    labelRow = ce('tr');
    labelRow[cl].add('mrow');
    spacer = ce('th');
    spacer.innerHTML = curG.cNms[i];
    labelRow[ac](spacer);

    const clickopt = ['_', ...r];
    curG.slotNames.forEach((col, slot) => {
      const newCol = ce('td');
      newCol[cl].add('draggable');

      const newSpan = ce('span');
      newSpan.setAttribute('data-option', 0);
      newSpan.innerHTML = clickopt[0];
      userBoard[slot][curG.cNms[i]] = { d: '_', span: newSpan };
      newCol.onclick = (e) => {
        re(newSpan, clickopt, slot, curG.cNms[i]);
      };
      newCol[ac](newSpan);
      labelRow[ac](newCol);
    });

    table[ac](labelRow);

    labelRow = ce('tr');
    labelRow[cl].add('mrow');
  });

  labelRow = ce('tr');
  labelRow[cl].add('mrow');
  labelRow[ac](ce('td'));

  const checker = ce('button');
  checker[cl].add('clue');
  checker.onclick = () => {
    if (scoreMatrix()) {
      checker.parentNode.parentNode.parentNode.removeChild(checker.parentNode.parentNode);
      workbook.innerHTML = '';

      workbook.scroll(0,0);
      cont[cl].add('end', opt.t ? 'bo': 'n');
      // say(opt[opt.lang].wellDone);
      say(opt[opt.lang].wellDone + (opt.t ? '... 100%': ''));
      // if (opt.t) {
      //   d[ge]('hun').innerHTML = d[ge]('hun').innerHTML + '🎖️';
      // } else {
      //   d[ge]('hun').innerHTML = '';
      // }
      sfx([1.4,,474,,.25,.63,1,1.145,-0.3,,100,.09,.09,,,,.09,.4,.65]);
      pause = true;
      to(() => {
        pause = false;
        workbook.innerHTML = ``;
        timeouts.forEach(t => clearTimeout(t));
        selectNewVoice();
        sng();
      }, 3000);
    }
  };
  checker.innerText = '👍';

  spacer = ce('td');
  spacer.setAttribute('colspan', curG.sNum );
  spacer[ac](checker);
  labelRow[ac](spacer);

  table[ac](labelRow);

  matrix[ac](table);

};
