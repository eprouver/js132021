let currentGame;
let sound = true;
let pause = false;
let games = [];
const shuffle = (arr) => arr.sort(() => .5 - Math.random());
const timeouts = [];

const cont = document.getElementById('cont');
const workbook = document.getElementById('wb');
const matrix = document.getElementById('matrix');

const timeout = (func, time) => {
  timeouts.push(setTimeout(func, time));
};

const ce = s => document.createElement(s);

const sounds = {
  win: [1.4,,474,,.25,.63,1,1.145,-0.3,,100,.09,.09,,,,.09,.4,.65]
}

const options = {
  lang: 'en',
  clueTypes: ['ti', 'tiai', 'a', 'b', 'nt'],
  categories: [
    ['👓', '👕', '👘', '🎩', '👠', '🧤', '🧣', '👒', '🧢', '👟', '🩳'],
    ['🎷', '🎸', '🎺', '🎻', '🪕', '🥁', '🎹'],
    ['⚽', '🏀', '🏈', '🎾', '🥏', '🏓', '🥊', '🎳', '🏐'],
    ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤎', '💔'],
    ['🍇', '🍉', '🍊', '🍎', '🥝', '🥥', '🍐', '🍑', '🍒', '🍋'],
    ['🐒', '🐕', '🦝', '🐈', '🦓', '🐄', '🐖', '🐪', '🦒','🐘', '🐁', '🐇', '🐿️', '🦨', '🦘'],
    ['🥯', '🍟', '🍔', '🍕', '🧀', '🍜', '🍦', '🍩', '🍿'],
    ['😍', '😎', '👿', '🤔', '😓', '😷', '🥺', '😡', '🤪', '😀'],
  ],
  slotNames: ['🧟‍♂️','🦹🏽‍♂️','🦸🏽‍♂️','🧛🏽‍♂️','👷🏻‍♂️', '👨🏽‍🎨', '👨🏿‍💼','👨🏻‍🔧', '👨🏾‍⚕️', '👨🏼‍🌾', '🧑🏻‍⚖️', '👨🏾‍🔬', '👨🏼‍🎤', '👨🏽‍🚀', '👮🏽‍♂️', '👩🏽‍🍳', '🧕🏼', '💂🏽‍♂️', '🧙🏼‍♂️', '👰🏻', '👩🏼‍✈️', '🧝🏽‍♂️', '👨🏾‍🚒', '👩🏽‍🎓', '👩🏼‍🏭'],
  en: {
    attempts: 'Attempts',
    wellDone: 'Well Done!',
    solvable: 'Possible Solution.',
    empty: 'space',
    noMore: 'No more clues.',
    tutorial: 'Tutorial: Use the prompts. Fill in the spaces.  Then 👍',
  },
  tp: {
    attempts: 'nanpa alasa',
    wellDone: 'pona!',
    solvable: 'ken li pini',
    empty: 'ala',
    noMore: 'pona ala',
    tutorial: 'kama sona: sina kute e toki pi wile sona. tempo pini la sina luka e 👍',
  },
  fr: {
    attempts: 'Essai #',
    wellDone: 'Bien Joué!',
    solvable: 'Résolution Possible.',
    empty: 'espace',
    noMore: 'Indices terminés.',
    tutorial: 'Tutoriel: Utilisez les indices. Remplissez les espaces. Enfin appuyez sur 👍',
  },
  es: {
    attempts: 'Prueba #',
    wellDone: '¡Bien Hecho!',
    solvable: 'Resolución Posible.',
    empty: 'espacio',
    noMore: 'No más pistas.',
    tutorial: 'Tutorial: Usa las pistas. Completa la información. Finalmente toca 👍',
  },
  'zh-CN': {
    attempts: '猜测 ＃',
    wellDone: '做得好!',
    solvable: '可以完成',
    empty: '空白',
    noMore: '没有了',
    tutorial: '教程：使用线索并完成信息。 终于摸了👍',
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
      options.categoryNames = ['len', 'kalama musi', 'musi utala', 'olin', 'kili', 'soweli', 'moku', 'pilin'];
    break;
    case 'fr':
      options.categoryNames = ['le vêtement', 'l\'instrument', 'le sport', 'le cœur', 'le fruit', 'l\'animal', 'la bouffe', 'le sentiment'];
    break;
    case 'es':
      options.categoryNames = ['la ropa', 'el instrumento', 'el deporte', 'el corazón', 'la fruta', 'el animal', 'la comida', 'el sentimiento'];
    break;
    case 'zh-CN':
      options.categoryNames = ['衣服','仪器','运动','心脏','水果','动物','食物','心情'];
    break;
    default:
      options.categoryNames = ['clothes', 'instrument', 'sport', 'heart', 'fruit', 'animal', 'food', 'mood'];
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

const newDet = () => {
  const det = randSkinTone(randGender('🕵🏼‍♂️'));
  document.getElementById('det').innerText = det;
  document.title = `${det} Blanks - Reduce the space`;
  workbook.setAttribute('data-flair', `${randSkinTone(randGender('🕵🏼‍♂️'))}`);
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
