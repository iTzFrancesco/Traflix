const cursor = document.querySelector('.box.arrow');

document.addEventListener('mousemove', e => {
  cursor.style.top = (e.clientY) + 'px';
  cursor.style.left = (e.clientX) + 'px';
});
