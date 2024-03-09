const menu = document.querySelector('.menu');
const navbarLinks = document.querySelector('.navbar-links');
const bodyContainerHeading = document.querySelector('.bodyContainerHeading');

menu.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  menu.classList.toggle('active');

  if (navbarLinks.classList.contains('active')) {
    // Add margin to bodyContainerHeading when navbar links are active
    bodyContainerHeading.style.marginRight = '100px'; // Adjust margin as needed
  } else {
    // Reset margin when navbar links are not active
    bodyContainerHeading.style.marginRight = '0';
  }
});