const buttons = document.querySelector('.calculator__buttons');

buttons.addEventListener('click', e => {
  const action = e.target.dataset.action;

  console.log(action);
});
