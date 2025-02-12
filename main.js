const yes = document.getElementById('yes');
const no = document.getElementById('no');
const main = document.getElementsByClassName('container')[0];
const yes1 = document.getElementsByClassName('yes')[0];
const no1 = document.getElementsByClassName('no')[0];
let count1 = 0;
let count2 = 0;

yes.addEventListener('click', (e) => {
  if (e.target === yes) {
    count1++;
    yes.innerHTML = "Are you sure?"
  }
  if (count1 === 2) {
    yes1.classList.remove('inactive');
    main.classList.add('inactive');
  }
})

no.addEventListener('click', (e) => {
  if (e.target === no) {
    count2++;
    no.innerHTML = "Are you sure?"
  }
  if (count2 === 2) {
    no1.classList.remove('inactive');
    main.classList.add('inactive');
  }
})

// addEventListener('click', (e) => {
//   if (e.target === yes) {
//     yes1.classList.remove('inactive');
//     main.classList.add('inactive');
//   } else if (e.target === no) {
//     no1.classList.remove('inactive');
//     main.classList.add('inactive');
//   }
// })