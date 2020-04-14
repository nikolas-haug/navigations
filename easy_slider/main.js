const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');

const span_togglers = document.querySelector('.menu__toggler span');

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

   console.log(event.target);

//    if(event.target == span_togglers) {
//        alert('toggler!');
//    }

   if (-1 !== toggler.className.indexOf( 'active' ) && !isDescendantOrSelf(root, event.target) && event.target != span_togglers) {
       console.log('Passed!');
       toggler.classList.toggle('active');
       menu.classList.toggle('active');

       document.body.classList.toggle('dimmed');
   }
});