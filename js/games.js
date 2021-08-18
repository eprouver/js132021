const addGame = (slotNum = 2, catNum = 2) => {
  return new Promise(function(resolve, reject){
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
    row = [...Array(slotNum)].map(a => ({}));
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
      chunkSize = Math.max(1, ~~(Math.random() * slotNum + 1), ~~(Math.random() * catNum + 1));
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  let categories = options.categories;
  let categoryNames = options.categoryNames;
  let slotNames = options.slotNames;

  slotNames = sampleSize(slotNum, slotNames).map(f => randSkinTone(f)).map(f => randGender(f));

  const select = sampleSize(catNum, [...Array(categoryNames.length).keys()]);

  categoryNames = categoryNames.filter((a, i) => select.indexOf(i) !== -1);
  categories = categories.filter((a, i) => select.indexOf(i) !== -1).map(e => sampleSize(slotNum + 2, e));

  const maxFill = catNum * slotNum;

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
      for (const i of [...Array(row.length - 1).keys()]) {
        if (canBe(row[i], critA) && canBe(row[i + 1], critB) && canBe(row[i + 1], critA) && canBe(row[i], critB)) {
          const newRow = JSON.parse(JSON.stringify(row));
          newRow[i] = Object.assign({}, row[i], critA);
          newRow[i + 1] = Object.assign({}, row[i + 1], critB);
          yield newRow;
        }
      }

      critB = [critA, critA = critB][0];

      for (const i of [...Array(row.length - 1).keys()]) {
        if (canBe(row[i], critA) && canBe(row[i + 1], critB) && canBe(row[i + 1], critA) && canBe(row[i], critB)) {
          const newRow = JSON.parse(JSON.stringify(row));
          newRow[i] = Object.assign({}, row[i], critA);
          newRow[i + 1] = Object.assign({}, row[i + 1], critB);
          yield newRow;
        }
      }
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
      return typeof c === 'function' ? c : (s) => clueCheck[c.type](c.data[0], c.data[1], s)
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

  const findSolutions = () => {
    const solutions = [];
    for (const rowSolution of findSolution(constraints, row)) {
      solutions.push(rowSolution);
    }
    return solutions.filter(a => a);
  };

  const addConstraint = (type = null, depth, callback) => {
    if (depth > 100) {
      const note = ce('div');
      note.classList.add('clue');
      note.innerHTML = `<h3>${options[options.lang].noMore}</h3>`;
      workbook.appendChild(note);
      return;
    }

    let data;
    let constraint = {};
    let constraint2 = {};
    let newConstraint;

    const pickConstraint = (not = '', size = 1) => {
      const key = sample(categoryNames.filter(a => a !== not));
      const obj = {};
      obj.key = key;
      const category = categories[categoryNames.indexOf(key)];
      return {
        key,
        data: size === 1 ? sample(category) : sampleSize(size, category)
      };
    };

    switch (type || sample([... Array(options.clueTypes.length)].map((a,i) => i))) {
      case 0:
        data = pickConstraint();
        constraint[data.key] = data.data;
        data = pickConstraint(data.key);
        constraint[data.key] = data.data;
        newConstraint = {
          type: options.clueTypes[0],
          data: [constraint, {data: []}],
        }
        break;
      case 1:
        data = pickConstraint();
        constraint[data.key] = data.data;
        constraint2 = {
          i: ~~(Math.random() * row.length)
        };
        newConstraint = {
          type: options.clueTypes[1],
          data: [constraint, constraint2],
        };
        break;
      case 2:
        data = pickConstraint('', 2);
        constraint[data.key] = data.data[0];
        constraint2[data.key] = data.data[1];
        newConstraint = {
          type: options.clueTypes[2],
          data: [constraint, constraint2],
        };
        break;
      case 3:
        data = pickConstraint('', 2);
        constraint[data.key] = data.data[0];
        constraint2[data.key] = data.data[1];
        newConstraint = {
          type: options.clueTypes[3],
          data: [constraint2, constraint],
        };
        break;
      case 4:
        data = pickConstraint();
        constraint[data.key] = data.data;
        data = pickConstraint(data.key);
        constraint2[data.key] = data.data;
        newConstraint = {
          type: options.clueTypes[4],
          data: [constraint, constraint2],
        }
        break;
    }

    if (attemptedConstraints.some(a => checkToString(a) === checkToString(newConstraint.data))) {
      // console.log('KICKING ALREADY USED CONSTRAINT');
      requestAnimationFrame(() => {
        addConstraint(type, ++depth, callback);
      });
      return;
    }
    attemptedConstraints.push(newConstraint.data);
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

  const addAndCheck = (type = null, depth = 0) => {
    const constraint = addConstraint(type, depth, (constraint) => {
      constraints.push(constraint);
      let solution = findSolutions();

      // constraint breaks the game, pop it off
      if (solution == false || !solution[0]) {
        constraints.pop();
        addAndCheck(null, ++depth);
        return;
      }

      const currentLength = solution[0].reduce((a, b) => {
        return a + Object.keys(b).length
      }, 0);
      if ((solution.reduce((a, b) => a.concat(b), []).some(obj => [Object, Array].includes((obj || {}).constructor) &&
            !Object.entries((obj || {})).length) ||
          currentLength === prevSolution) && prevSolution < maxFill) {
        // empty objects, or fewer than all selections indicated
        if (constraints.length > row.length * 8) {
          // console.log('TOO MANY CLUES, STARTING OVER');
          reset();
          addAndCheck();
          return;
        }
        currentStep.push(constraint);
        requestAnimationFrame(() => {
          addAndCheck();
        });
        return;
      }
      prevSolution = currentLength;

      if (!everyObject) {
        // chapter one make sure every object has at least one key
        currentStep.push(constraint);
        firstFill(solution);
        requestAnimationFrame(() => {
          addAndCheck();
        });
        return;
      } else if (everyObject && prevSolution < maxFill) {
        // chapter 2 make sure clues indicate one possible arrangement
        currentStep.push(constraint);
        if (prevSolution > Math.min(firstOffering + slotNum, firstOffering + catNum)) {
          firstSolution(solution);
        }
        requestAnimationFrame(() => {
          addAndCheck();
        });
        return;
      } else {
        // chapter 3 make sure all selections are indicated by clues
        // console.log(`******* ALL ${ prevSolution } selections, ${solution.length} arrangement, ${constraints.length} clues`);
        stepTest.push({
          solution,
          selections: prevSolution
        });
        // console.log('filled board', solution[0]);
        if (!solutionFound) {
          currentStep.push(constraint);
          steps.push(currentStep.slice(0));
          solutionFound = true;
        } else {
          // Extra Clue
          showClueArr([constraint]);
          extraClueButton();
          return;
        }
        //create chuncked Steps
        const chunkedSteps = steps.map(arr => chunk(arr));
        chunkedSteps.forEach((step, act) => {
          step.forEach((level, scene) => {
            levels.push({
              chore: 'add chore',
              reward: scene === step.length - 1 ? true : false,
              correctBoards: stepTest[act].solution,
              rewardClues: level,
            });
          });
        });

        // reduce to one level
        if (constraints.length <= 3) {
          levels[levels.length - 1].rewardClues = levels.map(l => l.rewardClues).reduce((o, n) => o.concat(n));
          levels = levels.slice(levels.length - 1)
        }

        resolve({
          slotNum,
          catNum,
          levels,
          extraClue: addAndCheck,
          clues: constraints,
          setupGame: () => {
            createMatrix();
          },
          categories,
          categoryNames,
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
