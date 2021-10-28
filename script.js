const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
const mainBlock = document.querySelector('.main-block');
const dataPart = document.querySelector('.data-part');
const formPart = document.querySelector('.form-part');

nextButton.addEventListener('click', () => {
  previousButton.parentNode.style.marginRight = 0;
  nextButton.parentNode.style.marginLeft = '-' + (nextButton.parentElement.offsetWidth + 50) + 'px';
  mainBlock.style.width = formPart.offsetWidth + 'px';
});

previousButton.addEventListener('click', () => {
  nextButton.parentNode.style.marginLeft = 0;
  mainBlock.style.width = dataPart.offsetWidth + 'px';
  previousButton.parentNode.style.marginRight = '-' + (previousButton.parentElement.offsetWidth - 50) + 'px';
})