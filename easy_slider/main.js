const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');

  document.body.classList.toggle('dimmed');
});

function isDescendantOrSelf(parent, child) {
    let node = child;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

window.addEventListener('mouseup', function (event) {
   const root = menu;

   if (! isDescendantOrSelf(root, event.target)) {
       console.log('Passed!');
       toggler.classList.toggle('active');
       menu.classList.toggle('active');

       document.body.classList.toggle('dimmed');
   }
});