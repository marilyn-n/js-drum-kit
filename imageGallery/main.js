const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleOpenActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

[...panels].map(item => item.addEventListener('click', toggleOpen));
[...panels].map(item => item.addEventListener('transitionend', toggleOpenActive));
