// Tiny click game. Game logic is kept in pure functions so it can be tested with Node.
(function (root) {
  'use strict';

  function createGame() {
    return { clicks: 0 };
  }

  function click(state) {
    return { clicks: state.clicks + 1 };
  }

  var api = { createGame: createGame, click: click };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  if (typeof document !== 'undefined') {
    var state = createGame();
    var target = document.getElementById('target');
    if (target) {
      target.addEventListener('click', function () {
        state = click(state);
      });
    }
  }

  root.ClickGame = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
