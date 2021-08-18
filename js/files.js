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

// serialize
const ser = g => {
  delete g.slotNum;
  delete g.catNum;
  delete g.attempts;
  let ss = JSON.stringify(g)
  g.cNms.forEach((n, i) => ss = ss.replace(new RegExp(n, 'g'), `b${i}b`));
  ss = JSON.parse(ss)
  ss.cNms = g.cNms;
  return JSON.stringify(ss)
}

// deserialize
const deser = g => {
  let ss = JSON.parse(g);
  ss.cNms.forEach((n, i) => g = g.replace(new RegExp(`b${i}b`, 'g'), n));
  g = JSON.parse(g);
  g.slotNum = g.slotNames.length;
  g.catNum = g.cNms.length;
  g.attempts = 0;

  return g;
}

// configure minimal network settings and key storage
const config = {
  nodeUrl: "https://rpc.testnet.near.org",
  deps: {
    keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),
  },
  networkId: 'testnet',
};

let subGame;

// open a connection to the NEAR platform
(async function () {
  const { connect, keyStores, WalletConnection } = nearApi;

  const config = {
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };

  // connect to NEAR
  window.near = await connect(config);
  // create wallet connection
  const wallet = new WalletConnection(near);
  const account = await wallet.account();

  const link = document.getElementById('near');

  if(wallet.isSignedIn()) {
    link.innerHTML = '<h3>You\'re signed into NEAR wallet.';
  }

  link.onclick = () => {
    var r = confirm("Going to NEAR to log in.");
    if (r == true) {
      wallet.requestSignIn(
        "dev-1629217600951-74234604044359", // contract requesting access
      );
    }
  }

  const contract = new nearApi.Contract(
    account, // the account object that is connecting
    "dev-1629217600951-74234604044359",
    {
      // name of contract you're connecting to
      viewMethods: ["getMessages"], // view methods do not change state but usually return a value
      changeMethods: ["addMessage"], // change methods modify state
      sender: account, // account object to initialize and sign transactions.
    }
  );

  messages = await contract.getMessages();

  subGame = () => {
    if(wallet.isSignedIn()) {
      clear();
      root.style.display = 'none';
      addGame(5,5).then(g => {
        contract.addMessage({ text: JSON.stringify(g), gas: 100000000000000});
        startNewGame(g);
      });
    } else {
      var r = confirm("Going to NEAR to log in.");
      if (r == true) {
        wallet.requestSignIn(
          "dev-1629217600951-74234604044359", // contract requesting access
        );
      }
    }
  }

  const list = document.getElementById('com-list');
  sampleSize(20, messages.filter(m => m.text[0] === '{')).forEach(m => {
    const gg = ce('div');
    gg.innerHTML = `<div class="sub-game"><span>5x5</span> - ${m.sender}: <span>👍</span></div>`;
    gg.onclick = () => { clear(); root.style.display = 'none'; startNewGame(deser(m.text)); }
    list.appendChild(gg);
  });
})(window);
