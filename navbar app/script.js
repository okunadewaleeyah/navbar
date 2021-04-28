// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class



const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

// toggle - toggles class
// tackling the toggle bar
navToggle.addEventListener('click', function() {
   // console.log(links.classList.contains('links'));
  // if(links.classList.contains('show-links')) {
  //     links.classList.remove('show-links')
  // } else {
  //     links.classList.add('show-links')
  // }
   links.classList.toggle('show-links')
})