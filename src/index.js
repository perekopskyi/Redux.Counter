import { createStore } from 'redux';

const reduser = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RESET':
      return state = 0;
    default:
      return state;
  }
};

// action creater
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const reset = () => ({ type: 'RESET' });

const store = createStore(reduser);

document.querySelector('#dec').addEventListener('click', () => {
  store.dispatch(dec());
});
document.querySelector('#inc').addEventListener('click', () => {
  store.dispatch(inc());
});
document.querySelector('#reset').addEventListener('click', () => {
  store.dispatch(reset());
});

const update = () => {
  document.querySelector('#counter').textContent = store.getState();
};

store.subscribe(update);