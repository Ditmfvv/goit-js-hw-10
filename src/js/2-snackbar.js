import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input-delay');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value, 10); 
  const state = event.target.state.value; 

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  })
    .then(() => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`, 
        position: 'bottomRight', 
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`, 
        position: 'bottomRight', 
      });
    });
});
