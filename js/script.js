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

  function isOperator(str) {
    return ['-', '+', '*', '/'].includes(str);
  }

  function percentage() {
    // TODO:
  }

  function addToInput(action) {
    if (input.length === 0 && isOperator(action)) return;

    if (
      isOperator(input.substr(input.length > 0 ? input.length - 1 : 1)) &&
      isOperator(action)
    )
      return;

    input += action;
  }

  function calculate() {
    if (!input.length) return;

    if (isOperator(input.substr(input.length - 1)))
      input = input.slice(0, input.length - 1);

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
