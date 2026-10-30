const selectors = document.querySelectorAll('.selector');

selectors.forEach(selector => {
  const knob = selector.querySelector('.knob');
  const status = selector.parentElement.querySelector('.status');
  const menuItems = selector.querySelectorAll('.menu-item');

  // Open and close the circular menu
  knob.addEventListener('click', () => {
    selector.classList.toggle('active');

    const isOpen = selector.classList.contains('active');

    knob.setAttribute('aria-expanded', isOpen);

    status.textContent = isOpen
      ? 'Choose a menu option'
      : 'Click the center button';
  });

  // Handle menu item clicks
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(button => {
        button.classList.remove('selected');
      });

      item.classList.add('selected');

      status.textContent = item.dataset.action + ' selected';

      selector.classList.remove('active');
      knob.setAttribute('aria-expanded', 'false');
    });
  });
});

console.log('Futuristic Menu JavaScript loaded!');
