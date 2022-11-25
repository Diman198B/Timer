const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


const createTimerAnimator = setInterval(() => { 
 hours = time/60/60%60
 minutes = time/60%60
 seconds = time%60
  
if (time >= 0) {              
  timerEl.innerHTML = `${('0' + Math.trunc(hours)).slice(-2)}:${('0' + Math.trunc(minutes)).slice(-2)}:${('0' + seconds).slice(-2)}`;
  }else{
    clearInterval(createTimerAnimator);
  }
  --time;
}, 1000)

inputEl.addEventListener('input', (e) => {
   e.target.value = e.target.value.replace(/\D/g, '');
 });    

buttonEl.addEventListener('click', () => {
  time = parseInt(inputEl.value);
});
