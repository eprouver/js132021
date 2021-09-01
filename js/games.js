const addGame = (sNum = 2, catNum = 2) => {
  return new Promise(function(resolve){
  let row,
    constraints,
    prevSolution,
    steps,
    currentStep,
    everyObject,
    firstBoard,
    attemptedConstraints,
    firstOffering,
    solutionFound,
    levels,
    stepTest;

  const reset = () => {
    row = [...Array(sNum)].map(a => ({}));
    constraints = [];
    prevSolution = 0;
    steps = [];
    currentStep = [];
    everyObject = false;
    firstBoard = false;
    attemptedConstraints = [];
    firstOffering = 0;
    solutionFound = false;
    levels = [];
    stepTest = [];
  };

  reset();

  const chunk = (arr) => {
    var R = [];
    let chunkSize;
    for (var i = 0, len = arr.length; i < len; i += chunkSize) {
      chunkSize = Math.max(1, ~~(Math.random() * sNum) + 1, ~~(Math.random() * catNum) + 1);
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  let cats = opt.cats;
  let cNms = opt.cNms;
  let slotNames = opt.slotNames;

  slotNames = sampleSize(sNum, slotNames).map(f => randSkinTone(f)).map(f => randGender(f));

  const select = sampleSize(catNum, [...Array(cNms.length).keys()]);

  cNms = cNms.filter((a, i) => select.indexOf(i) !== -1);
  cats = cats.filter((a, i) => select.indexOf(i) !== -1).map(e => sampleSize(sNum + 2, e));

  const maxFill = catNum * sNum;

  const canBe = (slot, criteria) => {
    for (const key of Object.keys(criteria))
      if (slot[key] && slot[key] !== criteria[key]) return false;
    return true;
  };

  const clueCheck = {
    * ti(critA, critB, row) {
      for (const i of [...Array(row.length).keys()])
        yield* this.tiai(critA, {i}, row);
    },
    * tiai(critA, critB, row) {
      if (canBe(row[critB.i], critA)) {
        const newRow = JSON.parse(JSON.stringify(row));
        newRow[critB.i] = Object.assign({}, row[critB.i], critA);
        yield newRow;
      }
    },
    * b(critA, critB, row) {
      for (const i of [...Array(row.length - 1).keys()]) {
        if (canBe(row[i], critA) && canBe(row[i + 1], critB)) {
          const newRow = JSON.parse(JSON.stringify(row));
          newRow[i] = Object.assign({}, row[i], critA);
          newRow[i + 1] = Object.assign({}, row[i + 1], critB);
          yield newRow;
        }
      }
    },
    * a(critA, critB, row) {
      for (const i of [...Array(row.length - 1).keys()].map(k => k + 1)) {
        if (canBe(row[i], critA) && canBe(row[i - 1], critB)) {
          const newRow = JSON.parse(JSON.stringify(row));
          newRow[i] = Object.assign({}, row[i], critA);
          newRow[i - 1] = Object.assign({}, row[i - 1], critB);
          yield newRow;
        }
      }
    },
    * nt(critA, critB, row) {
      yield* this.a(critA, critB, row);
      yield* this.b(critA, critB, row);
      // for (const i of [...Array(row.length - 1).keys()]) {
      //   if (canBe(row[i], critA) && canBe(row[i + 1], critB) && canBe(row[i + 1], critA) && canBe(row[i], critB)) {
      //     const newRow = JSON.parse(JSON.stringify(row));
      //     newRow[i] = Object.assign({}, row[i], critA);
      //     newRow[i + 1] = Object.assign({}, row[i + 1], critB);
      //     yield newRow;
      //   }
      // }
      //
      // critB = [critA, critA = critB][0];
      //
      // for (const i of [...Array(row.length - 1).keys()]) {
      //   if (canBe(row[i], critA) && canBe(row[i + 1], critB) && canBe(row[i + 1], critA) && canBe(row[i], critB)) {
      //     const newRow = JSON.parse(JSON.stringify(row));
      //     newRow[i] = Object.assign({}, row[i], critA);
      //     newRow[i + 1] = Object.assign({}, row[i + 1], critB);
      //     yield newRow;
      //   }
      // }
    },
  };

  const findDupes = (row) => {
    let dupes = false;
    const checks = {};
    row.reduce(function(acc, x) {
      for (var key in x) {
        if (!checks[key]) {
          checks[key] = [];
        }
        if (checks[key].indexOf(x[key]) > -1) {
          dupes = true;
        }
        checks[key].push(x[key]);
        acc[key] = x[key];
      }
      return acc;
    }, {});
    return dupes;
  };

  function* findSolution(remainingConstraints, row) {
    remainingConstraints = remainingConstraints.map(c => {
      return typeof c === 'function' ? c : (s) => clueCheck[c.type](c.d[0], c.d[1], s)
    });
    if (remainingConstraints.length === 0) {
      if (findDupes(row)) {
        yield false;
        return;
      }
      yield row;
    } else {
      const [head, ...tail] = remainingConstraints
      for (const newRow of head(row))
        yield* findSolution(tail, newRow);
    }
  }

  const findSolutions = (consts) => {
    const solutions = [];
    for (const rowSolution of findSolution(consts, row)) {
      solutions.push(rowSolution);
    }

    return solutions.filter(a => a);
  };

  const addConstraint = (type = null, depth, callback) => {
    if (depth > 100) {
      return callback(false);
    }

    let data;
    let constraint = {};
    let constraint2 = {};
    let newConstraint;

    const pickConstraint = (not = '', size = 1) => {
      const key = sample(cNms.filter(a => a !== not));
      const obj = {};
      obj.key = key;
      const category = cats[cNms.indexOf(key)];
      return {
        key,
        d: size === 1 ? sample(category) : sampleSize(size, category)
      };
    };

    // balance types of clues by adding more of that #
    switch (type || sample([0, 0, 0, 1, 2, 2, 3, 3, 4, 4, 4])) {
      case 0:
        data = pickConstraint();
        constraint[data.key] = data.d;
        data = pickConstraint(data.key);
        constraint[data.key] = data.d;
        newConstraint = {
          type: opt.clueTypes[0],
          d: [constraint, {d: []}],
        }
        break;
      case 1:
        data = pickConstraint();
        constraint[data.key] = data.d;
        constraint2 = {
          i: ~~(Math.random() * row.length)
        };
        newConstraint = {
          type: opt.clueTypes[1],
          d: [constraint, constraint2],
        };
        break;
      case 2:
        data = pickConstraint('', 2);
        constraint[data.key] = data.d[0];
        constraint2[data.key] = data.d[1];
        newConstraint = {
          type: opt.clueTypes[2],
          d: [constraint, constraint2],
        };
        break;
      case 3:
        data = pickConstraint('', 2);
        constraint[data.key] = data.d[0];
        constraint2[data.key] = data.d[1];
        newConstraint = {
          type: opt.clueTypes[3],
          d: [constraint2, constraint],
        };
        break;
      case 4:
        data = pickConstraint();
        constraint[data.key] = data.d;
        data = pickConstraint(data.key);
        constraint2[data.key] = data.d;
        newConstraint = {
          type: opt.clueTypes[4],
          d: [constraint, constraint2],
        }
        break;
    }

    if (attemptedConstraints.some(a => checkToString(a) === checkToString(newConstraint.d))) {
      // console.log('KICKING ALREADY USED CONSTRAINT');
      requestAnimationFrame(() => {
        addConstraint(type, ++depth, callback);
      });
      return;
    }
    attemptedConstraints.push(newConstraint.d);
    callback(newConstraint);
  };

  const firstFill = (solution) => {
    if (everyObject) return;
    everyObject = true;
    firstOffering = prevSolution;
    // console.log('*****', `Everyone has a key. ${ prevSolution } selections, ${solution.length} arrangements, ${constraints.length} clues`, solution);
    stepTest.push({
      solution,
      selections: prevSolution
    });
    steps.push(currentStep.slice(0));
    currentStep = [];
  };

  const firstSolution = (solution) => {
    if (firstBoard) return;
    firstBoard = true;
    // console.log('*****', `Middle: ${ prevSolution } selections, ${solution.length} arrangements, ${constraints.length} clues`, solution);
    stepTest.push({
      solution,
      selections: prevSolution
    });
    steps.push(currentStep.slice(0));
    currentStep = [];
  };

  const addAndCheck = (type = null, depth = 0, print = false) => {
    const constraint = addConstraint(type, depth, (constraint) => {
      if (!constraint) {
        if (print) {
          const note = ce('div');
          note[cl].add('clue');
          note.innerHTML = `<h3>${opt[opt.lang].noMore}</h3>`;
          workbook[ac](note);
        }
        return;
      }

      constraints.push(constraint);
      let solution = findSolutions(constraints);

      // constraint breaks the game, pop it off
      if (solution == false || !solution[0]) {
        constraints.pop();
        addAndCheck(null, ++depth, print);
        return;
      }

      const currentLength = solution[0].reduce((a, b) => {
        return a + Object.keys(b).length
      }, 0);

      currentStep.push(constraint);
      if ((solution.reduce((a, b) => a.concat(b), []).some(obj => [Object, Array].includes((obj || {}).constructor) &&
            !Object.entries((obj || {})).length) ||
          currentLength === prevSolution) && prevSolution < maxFill) {
        // empty objects, or fewer than all selections indicated
        if (constraints.length > row.length * 9) {
          // console.log('TOO MANY CLUES, STARTING OVER');
          reset();
          addAndCheck();
          return;
        }
        requestAnimationFrame(() => {
          addAndCheck(null, 0, print);
        });
        return;
      }
      prevSolution = currentLength;

      if (!everyObject) {
        // chapter one make sure every object has at least one key
        firstFill(solution);
        requestAnimationFrame(() => {
          addAndCheck(null, 0, print);
        });
        return;
      } else if (everyObject && prevSolution < maxFill) {
        // chapter 2 make sure clues indicate one possible arrangement
        if (prevSolution > Math.min(firstOffering + sNum, firstOffering + catNum)) {
          firstSolution(solution);
        }
        requestAnimationFrame(() => {
          addAndCheck(null, 0, print);
        });
        return;
      } else {
        // chapter 3 make sure all selections are indicated by clues
        // console.log(`******* ALL ${ prevSolution } selections, ${solution.length} arrangement, ${constraints.length} clues`);
        const rev = findSolutions(constraints.map(c => {
          if (c.type === 'nt') {
              c.d = c.d.reverse();
          }
          return c;
        }).reverse())[0];

        if (!rev || !iareEquals(solution[0], rev)) {
          requestAnimationFrame(() => {
            // console.log('reverse check failed');
            addAndCheck(1, 0, print);
          });
          return;
        }

        stepTest.push({
          solution,
          selections: prevSolution
        });
        // console.log('filled board', solution[0]);
        if (!solutionFound) {
          steps.push(currentStep.slice(0));
          solutionFound = true;
        } else {
          // Extra Clue
          showClueArr([constraint]);
          extraClueButton();
          return;
        }
        //create chunked Steps
        const chunkedSteps = steps.map(arr => chunk(arr));
        chunkedSteps.forEach((step, act) => {
          step.forEach((level, scene) => {
            levels.push({
              cb:  stepTest[act].solution,
              rwc: level,
            });
          });
        });

        // reduce to one level
        if (constraints.length <= 3) {
          levels[levels.length - 1].rwc = levels.map(l => l.rwc).reduce((o, n) => o.concat(n));
          levels = levels.slice(levels.length - 1)
        }

        resolve({
          sNum,
          catNum,
          levels,
          extraClue: () => {
            addAndCheck(null, 0, true);
          },
          clues: constraints,
          cats,
          cNms,
          slotNames,
          attempts: 0,
        });

        games = games.sort((a, b) => a.clues.length - b.clues.length);
      }
    });
  }

  addAndCheck(1);
});
};
