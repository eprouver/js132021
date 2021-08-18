const showChoose = () => {
  clear();
  timeouts.forEach(t => clearTimeout(t));
  cont.classList.remove('end');
  root.style.display = 'flex';
  say(options[options.lang].ff);
  fi('nc', options[options.lang].newCase);
  fi('cf', options[options.lang].ff);
  fi('ch', options[options.lang].ch);
  fi('peplabel', options[options.lang].p);
  fi('catlabel', options[options.lang].c);
  fi('create', options[options.lang].cr);
  fi('com', options[options.lang].com);
  fi('com2', options[options.lang].com);
}

const chooseGame = () => {
  clear();
  root.style.display = 'none';
  addGame(gi('people'), gi('cats')).then(g => startNewGame(g));
}
