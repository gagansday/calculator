(function () {
  const buttons = document.querySelector('.calculator__buttons');
  const mainDisplayBox = document.querySelector('.calculator__display--text');
  let input = '';

  function backspace() {
    if (input) input = input.slice(0, -1).trim();
  }

  function togglePlusMinus() {
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

  function divide() {}
  function multiply() {}
  function minus() {}
  function plus() {}
  function calculate() {}

  function clear() {
    input = '';
  }

  buttons.addEventListener('click', e => {
    const action = e.target.dataset.action;

    switch (action) {
      case 'backspace':
        backspace();
        break;
      case 'toggle-plus-minus':
        togglePlusMinus();
        break;
      case 'percentage':
        percentage();
        break;
      case 'divide':
        divide();
      case 'multiply':
        multiply();
      case 'minus':
        minus();
      case 'plus':
        plus();
      case 'clear':
        clear();
      case 'calculate':
        calculate();
        break;
      default:
        addToInput(action);
        break;
    }

    console.log(input);
    mainDisplayBox.innerHTML = input;
  });
})();
