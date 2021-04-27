(function () {
  const buttons = document.querySelector('.calculator__buttons');
  const mainDisplayBox = document.querySelector('.calculator__display--text');
  let values = [];
  let input = '';

  function backspace() {
    if (input) input = input.slice(0, -1).trim();
  }

  function togglePlusMinus() {
    input = input.toString();
    if (input.slice(0, 1) === '-') {
      input = input.slice(1);
    } else {
      input = '-' + input;
    }
  }

  function percentage() {
    // TODO:
  }

  function addToInput(action) {
    input += action;
  }

  function calculate() {
    input = eval(input).toString();
  }

  function clear() {
    input = '';
  }

  buttons.addEventListener('click', e => {
    const action = e.target.dataset.action;

    if (!action) return;
    switch (action) {
      case 'backspace':
        backspace();
        break;
      case 'toggle-plus-minus':
        togglePlusMinus();
        break;
      case '%':
        percentage();
        break;
      case 'clear':
        clear();
        break;
      case 'calculate':
        calculate();
        break;
      default:
        addToInput(action);
        break;
    }

    mainDisplayBox.innerHTML = input;
  });
})();
