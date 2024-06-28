// Insert which html element is in the variable
const btn = document.getElementById('btn-menu');
const menu_items = document.getElementById('menu-items');

// Menu Function
function menu(){
    // Add classes to elements ".toggle"
    btn.classList.toggle('active');
    menu_items.classList.toggle('show');
}