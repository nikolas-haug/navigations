// Set the width of the side nav to 250px
function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    // push content
    document.getElementById('main').style.marginLeft = '250px';
    // add opacity
    document.getElementById('main').style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    // push content
    document.getElementById('main').style.marginLeft = '0';
    // set to default bg color
    document.getElementById('main').style.backgroundColor = 'white';
}