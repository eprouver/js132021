let curG;
let sound = true;
let pause = false;
let games = [];
const shuffle = (arr) => arr.sort(() => .5 - M[ra]());
const timeouts = [];

const cont = d[ge]('cont');
const wbc = d[ge]('wbc');
const matrix = d[ge]('matrix');
const root = d[ge]('root');

// get value
const gi = (id, or = 3) => parseInt(d[ge](id).value) || or;
// replace text
const fi = (id, txt) => d[ge](id).innerText = txt;
// create element
const ce = s => d.createElement(s);

const to = (func, time) => {
  timeouts.push(setTimeout(func, time));
};

const iareEquals = (a, b) => {
  for(let i = 0; i < a.length; i++) {
    for(var key in a[i]) {
        if(!(key in b[i]) || a[i][key] !== b[i][key]) {
            return false;
        }
    }
    for(var key in b[i]) {
        if(!(key in a[i]) || a[i][key] !== b[i][key]) {
            return false;
        }
    }
  }
  return true;
};

const opt = {
  lang: 'en',
  files: 10,
  clueTypes: ['ti', 'tiai', 'a', 'b', 'nt'],
  cats: [
    ['👓', '👕', '👘', '🎩', '👠', '🧤', '🧣', '👒', '🧢', '👟', '🩳'],
    ['🎷', '🎸', '🎺', '🎻', '🪕', '🥁', '🎹'],
    ['⚽', '🏀', '🏈', '🎾', '🥏', '🏓', '🥊', '🎳', '🏐', '⚾', '🏸'],
    ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤎', '💔'],
    ['🍇', '🍉', '🍊', '🍎', '🥝', '🥥', '🍐', '🍑', '🍒', '🍋'],
    ['🐒', '🐕', '🦝', '🐈', '🦓', '🐄', '🐖', '🐪', '🦒','🐘', '🐇', '🐿️', '🦨'],
    ['🥯', '🍔', '🍕', '🧀', '🍜', '🍦', '🍩', '🍿', '🥐', '🌮', '🍣'],
    ['😍', '😎', '👿', '🤔', '😓', '😷', '🥺', '😡', '🤪', '😇', '🥶', '🥱'],
  ],
  slotNames: ['🧟‍♂️','🦹🏽‍♂️','🦸🏽‍♂️','🧛🏽‍♂️','👷🏻‍♂️', '👨🏽‍🎨', '👨🏿‍💼','👨🏻‍🔧', '👨🏾‍⚕️', '👨🏼‍🌾', '👨🏽‍⚖️', '👨🏾‍🔬', '👨🏼‍🎤', '👨🏽‍🚀', '👮🏽‍♂️', '👩🏽‍🍳', '🧕🏼', '💂🏽‍♂️', '🧙🏼‍♂️', '👰🏻', '👩🏼‍✈️', '🧝🏽‍♂️', '👨🏾‍🚒', '👩🏽‍🎓', '👩🏼‍🏭'],
  en: {
    wellDone: 'Well Done!',
    solvable: 'Possible 👍',
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
    solvable: 'ken 👍',
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
    solvable: '👍 Possible',
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
    solvable: '👍 Posible',
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
      e.target[cl].add('selected');
      e = e ? e.target.getAttribute('id') : 'en';
    }
  }

  opt.lang = e;

  switch (opt.lang) {
    case 'tp':
      opt.cNms = ['len', 'kalama musi', 'musi utala', 'olin', 'kili', 'soweli', 'moku', 'pilin'];
    break;
    case 'fr':
      opt.cNms = ['le vêtement', 'l\'instrument', 'le sport', 'le cœur', 'le fruit', 'l\'animal', 'la bouffe', 'le sentiment'];
    break;
    case 'es':
      opt.cNms = ['la ropa', 'el instrumento', 'el deporte', 'el corazón', 'la fruta', 'el animal', 'la comida', 'el sentimiento'];
    break;
    case 'zh-CN':
      opt.cNms = ['衣服','乐器','运动','心脏','水果','动物','食物','心情'];
    break;
    default:
      opt.cNms = ['clothes', 'instrument', 'sport', 'heart', 'fruit', 'animal', 'food', 'mood'];
    break;
  }
}

lang('en', false);

[...d.getElementsByClassName('lang')].forEach((button, i, arr) => {
  button.addEventListener('click', (e) => {
    arr.forEach(a => a[cl].remove('selected'));
    lang(e);
  });
});

const checkToString = (arr) => arr.map(o => {
  return Object.keys(o).concat(Object.values(o))
}).flat().sort().join();

const sample = arr => {
  const len = arr == null ? 0 : arr.length
  return len ? arr[~~(M[ra]() * len)] : undefined
};

const sampleSize = (size, list, collected = []) => size < 1 || list.length < 1 ?
  collected :
  shuffle(size >= list.length ? [...collected, ...list] : M[ra]() < size / list.length ?
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
  d[ge]('det').innerText = det;
  d.title = `BLANKS ${det} - Reduce the space`;
  wbc.setAttribute('data-flair', `${det}`);
}

newDet();

let voice;
const selectNewVoice = () => {
  let tries = 0;

  voice = window.speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.indexOf(opt.lang) > -1);
  voice = voice[new Date%voice.length];

  if (!voice) {
    to(selectNewVoice, 1000);
  }
}

selectNewVoice();
const sfx = (d) => {
  if (pause) return;
  if (!sound) return;
  zzfx(...d);
}

let say = (m) => {
  if (opt.lang === 'tp') return;
  if (!sound) return;
  if (pause) return;
  selectNewVoice();
  speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance();
  msg.voice = voice;
  // msg.volume = 1;
  // msg.pitch = 1.1;
  // msg.rate = 1;
  msg.text = m.replace(new RegExp("cœur|corazón|heart", "g"), '');
  msg.lang = opt.lang;
  speechSynthesis.speak(msg);
};

const chooseGame = () => {
  clear();
  wbc[ac](nnote());
  root.style.display = 'none';
  addGame(gi('people'), gi('cats')).then(g => sng(g));
};

addGame(1, 2).then((g) => tt = g);
