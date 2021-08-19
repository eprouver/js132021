let currentGame;
let sound = true;
let pause = false;
let games = [];
const shuffle = (arr) => arr.sort(() => .5 - Math.random());
const timeouts = [];

const cont = document.getElementById('cont');
const workbook = document.getElementById('wb');
const matrix = document.getElementById('matrix');
const root = document.getElementById('root');

// get value
const gi = (id, or = 3) => parseInt(document.getElementById(id).value) || or;
// replace text
const fi = (id, txt) => document.getElementById(id).innerText = txt;
// create element
const ce = s => document.createElement(s);

const timeout = (func, time) => {
  timeouts.push(setTimeout(func, time));
};

const options = {
  lang: 'en',
  files: 6,
  clueTypes: ['ti', 'tiai', 'a', 'b', 'nt'],
  cats: [
    ['👓', '👕', '👘', '🎩', '👠', '🧤', '🧣', '👒', '🧢', '👟', '🩳'],
    ['🎷', '🎸', '🎺', '🎻', '🪕', '🥁', '🎹'],
    ['⚽', '🏀', '🏈', '🎾', '🥏', '🏓', '🥊', '🎳', '🏐', '⚾', '🏸'],
    ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤎', '💔'],
    ['🍇', '🍉', '🍊', '🍎', '🥝', '🥥', '🍐', '🍑', '🍒', '🍋'],
    ['🐒', '🐕', '🦝', '🐈', '🦓', '🐄', '🐖', '🐪', '🦒','🐘', '🐁', '🐇', '🐿️', '🦨', '🦘'],
    ['🥯', '🍟', '🍔', '🍕', '🧀', '🍜', '🍦', '🍩', '🍿', '🥐', '🌮', '🍣', '🍚'],
    ['😍', '😎', '👿', '🤔', '😓', '😷', '🥺', '😡', '🤪', '😀', '🥶', '🥱'],
  ],
  slotNames: ['🧟‍♂️','🦹🏽‍♂️','🦸🏽‍♂️','🧛🏽‍♂️','👷🏻‍♂️', '👨🏽‍🎨', '👨🏿‍💼','👨🏻‍🔧', '👨🏾‍⚕️', '👨🏼‍🌾', '🧑🏻‍⚖️', '👨🏾‍🔬', '👨🏼‍🎤', '👨🏽‍🚀', '👮🏽‍♂️', '👩🏽‍🍳', '🧕🏼', '💂🏽‍♂️', '🧙🏼‍♂️', '👰🏻', '👩🏼‍✈️', '🧝🏽‍♂️', '👨🏾‍🚒', '👩🏽‍🎓', '👩🏼‍🏭'],
  en: {
    wellDone: 'Well Done!',
    solvable: 'Possible Solution.',
    empty: 'space',
    noMore: 'No more clues.',
    tutorial: 'Tutorial: Use the prompts. Fill in the spaces.  Then 👍',
    newCase: 'New Case!',
    p: '# of People',
    c: '# of Categories',
    ch: 'Choose',
    cr: 'Create',
    com: 'Community',
    ff: 'Case Files',
  },
  tp: {
    wellDone: 'pona!',
    solvable: 'ken pali',
    empty: 'ala',
    noMore: 'pini',
    tutorial: 'kama sona: o kute e toki pi wile sona. tenpo pini la o luka e 👍',
    newCase: 'utala sin',
    p: 'jan',
    c: 'kulupu ilo',
    ch: 'o pana',
    cr: 'o sin',
    com: 'kulupu',
    ff: 'utala mute',
  },
  fr: {
    wellDone: 'Bien Joué!',
    solvable: 'Résolution Possible.',
    empty: 'espace',
    noMore: 'Indices terminés.',
    tutorial: 'Tutoriel: Utilisez les indices. Remplissez les espaces. Enfin appuyez sur 👍',
    newCase: 'Nouveau Mystère!',
    p : 'Nombre de Personnes',
    c : 'Nombre de Catégories',
    ch: 'Choisir',
    cr : 'Créer',
    com : 'Communauté',
    ff : 'Fichiers de Mystères',
  },
  es: {
    wellDone: '¡Bien Hecho!',
    solvable: 'Resolución Posible.',
    empty: 'espacio',
    noMore: 'No más pistas.',
    tutorial: 'Tutorial: Usa las pistas. Completa la información. Finalmente toca 👍',
    newCase: 'Nuevo Misterio!',
    p: 'Gente',
    c: 'Categorías',
    ch: 'Elegir',
    cr: 'Crear',
    com: 'Comunidad',
    ff: 'Archivos de Misterios',
  },
  'zh-CN': {
    wellDone: '做得好!',
    solvable: '可以完成',
    empty: '空白',
    noMore: '没有了',
    tutorial: '教程：使用线索并完成信息。 然后单击 👍。',
    newCase: '新谜底!',
    p: '人数',
    c: '类别数',
    ch: '选择',
    cr: '创建',
    com: '社区',
    ff: '神秘档案',
  },
};

const lang = (e, play = true) => {
  pause = false;
  if (play) {
    sfx([.7,.45,82.40689,,,.02,,3,35,,-150,-0.06,,,,,,.5,.03,.21]);
    if (e.target) {
      e.target.classList.add('selected');
      e = e ? e.target.getAttribute('id') : 'en';
    }
  }

  options.lang = e;

  switch (options.lang) {
    case 'tp':
      options.cNms = ['len', 'kalama musi', 'musi utala', 'olin', 'kili', 'soweli', 'moku', 'pilin'];
    break;
    case 'fr':
      options.cNms = ['le vêtement', 'l\'instrument', 'le sport', 'le cœur', 'le fruit', 'l\'animal', 'la bouffe', 'le sentiment'];
    break;
    case 'es':
      options.cNms = ['la ropa', 'el instrumento', 'el deporte', 'el corazón', 'la fruta', 'el animal', 'la comida', 'el sentimiento'];
    break;
    case 'zh-CN':
      options.cNms = ['衣服','乐器','运动','心脏','水果','动物','食物','心情'];
    break;
    default:
      options.cNms = ['clothes', 'instrument', 'sport', 'heart', 'fruit', 'animal', 'food', 'mood'];
    break;
  }
}

lang('en', false);

[...document.getElementsByClassName('lang')].forEach((button, i, arr) => {
  button.addEventListener('click', (e) => {
    arr.forEach(a => a.classList.remove('selected'));
    lang(e);
  });
});

const checkToString = (arr) => arr.map(o => {
  return Object.keys(o).concat(Object.values(o))
}).flat().sort().join();

const randBetween = (min, max) => {
  return ~~(Math.random() * (max - min + 1) + min);
};

const sample = arr => {
  const len = arr == null ? 0 : arr.length
  return len ? arr[Math.floor(Math.random() * len)] : undefined
};

const sampleSize = (size, list, collected = []) => size < 1 || list.length < 1 ?
  collected :
  shuffle(size >= list.length ? [...collected, ...list] : Math.random() < size / list.length ?
  sampleSize(size - 1, list.slice(1), [...collected, list[0]]) :
  sampleSize(size, list.slice(1), collected));

// random skin tone?
const stMod = [
  '\u{1f3fb}',
  '\u{1f3fc}',
  '\u{1f3fd}',
  '\u{1f3fe}',
  '\u{1f3ff}',
];

const gMod = [
  '👩',
  '👨',
];
const gMod2 = ['♂️','♀️'];

const findSkin = new RegExp("\ud83c[\udffb-\udfff]", "g");
const findGender = new RegExp(gMod.join('|'), "g");
const findGender2 = new RegExp(gMod2.join('|'), "g");
const randSkinTone = (string) => string.replace(findSkin, sample(stMod));
const randGender = (string) => string.replace(findGender, sample(gMod)).replace(findGender2, sample(gMod2));

let det;
const newDet = () => {
  det = randSkinTone(randGender('🕵🏼‍♂️'));
  document.getElementById('det').innerText = det;
  document.title = `Blank ${det} - Reduce the space`;
  workbook.setAttribute('data-flair', `${det}`);
}

newDet();

let voice;
const selectNewVoice = () => {
  let tries = 0;

  voice = window.speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.indexOf(options.lang) > -1);
  voice = voice[randBetween(0, voice.length)];

  if (!voice) {
    timeout(selectNewVoice, 1000);
  }
}

selectNewVoice();
const sfx = (d) => {
  if (pause) return;
  if (!sound) return;
  zzfx(...d);
}

let say = (m) => {
  if (options.lang === 'tp') return;
  if (!sound) return;
  if (pause) return;
  selectNewVoice();
  speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance();
  msg.voice = voice;
  msg.volume = 3;
  msg.rate = 1;
  msg.text = m.replace(new RegExp("cœur|corazón|heart", "g"), '');
  msg.lang = options.lang;
  speechSynthesis.speak(msg);
};

const chooseGame = () => {
  clear();
  workbook.appendChild(nnote());
  root.style.display = 'none';
  addGame(gi('people'), gi('cats')).then(g => startNewGame(g));
};
