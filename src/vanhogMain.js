const menu = document.getElementById('menu');
const ham = document.getElementById('hamIcon');
const hamFrame = document.getElementById('hm');

ham.addEventListener('click', (e) => {
  e.stopPropagation();
  ham.classList.add('hidden');
  menu.classList.remove('hidden');
  hamFrame.classList.remove('p-2', 'rounded-lg');
});
menu.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    closeMenu();
  }
});

document.addEventListener('click', (e) => {
  const isClickInsideMenu = menu.contains(e.target);
  const isClickOnHam = ham.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHam) {
    closeMenu();
  }
});

function closeMenu() {
  menu.classList.add('hidden');
  ham.classList.remove('hidden');
  hamFrame.classList.add('p-2', 'rounded-lg');
}
