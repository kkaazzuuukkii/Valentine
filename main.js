const yes = document.getElementById('yes');
const no = document.getElementById('no');
const main = document.getElementsByClassName('container')[0];
const yes1 = document.getElementsByClassName('yes')[0];
const no1 = document.getElementsByClassName('no')[0];

addEventListener('click', (e) => {
  if (e.target === yes) {
    yes1.classList.remove('inactive');
    main.classList.add('inactive');
  } else if (e.target === no) {
    no1.classList.remove('inactive');
    main.classList.add('inactive');
  }
})