const btn = document.getElementById('btn');
let clickCount = 0;
const span = document.getElementById('span');


btn.addEventListener('click', () => {
  clickCount += 1;
  span.innerText = clickCount;
})