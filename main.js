const menuIcon = document.getElementById('menu-icon');
const navigation = document.getElementById('navigation');

menuIcon.addEventListener('click', function () {
  navigation.classList.toggle('active');
});