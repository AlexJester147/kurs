const nextButton = document.querySelector('#next-button');
const backButton = document.querySelector('#back-button');
const mainBlock = document.querySelector('.main-block');
const dataPart = document.querySelector('.data-part');
const formPart = document.querySelector('.form-part');
const firstForm = document.querySelector('.first-form');
const secondForm = document.querySelector('.second-form');

const rowsInput = document.querySelector('.rows-input');
const colsInput = document.querySelector('.cols-input');

const formCaption = document.querySelectorAll('.form-caption');


let select = `<select>
<option>≥</option>
<option>≤</option>
<option>=</option>
</select>`;

let selectMax = `<select>
<option>max</option>
<option>min</option>
</select>`;

let col = `<td><input type="number" class="col" min="0" step="1" value="0"></td>`;
let row = `<tr><input type="number" class="row" min="0" step="1" value="0"></tr>`;


nextButton.addEventListener('click', () => {

  firstForm.innerHTML = '';
  secondForm.innerHTML = '';

  backButton.parentNode.style.marginRight = 0;
  nextButton.parentNode.style.marginLeft = '-' + (nextButton.parentElement.offsetWidth + 50) + 'px';
  mainBlock.style.width = formPart.offsetWidth + 'px';

  let caption;

  //подпись формы
  for (let i = 0; i < colsInput.value; i++) {
    caption = document.createElement('div');
    caption.classList.add('form-caption');
    caption.innerHTML+=`x${i}`;
    firstForm.append(caption);
  }

//первая таблица
  for (let i = 0; i < rowsInput.value; i++) {
    let tr = document.createElement('tr');
    tr.innerHTML = col;
    
    for (let i = 0; i < colsInput.value-1; i++) {
      let td = document.createElement('td');
      td.innerHTML = row;
      tr.appendChild(td);
    }
      firstForm.appendChild(tr);
  }

  //вторая таблица

  for (let i = 0; i < colsInput.value; i++) {
    caption = document.createElement('div');
    caption.classList.add('form-caption');
    caption.innerHTML+=`x${i}`;
    secondForm.append(caption);
  }

  for (let i = 0; i < 1; i++) {
    let tr = document.createElement('tr');
    tr.innerHTML = row;
    
    for (let i = 0; i < colsInput.value-1; i++) {
      let td = document.createElement('td');
      td.innerHTML = col;
      tr.appendChild(td);
    }
      secondForm.appendChild(tr);
  }
    

    let tdCollection = document.querySelector('.second-form tr');
    tdCollection.innerHTML+=selectMax+col;

  let trCollection = document.querySelectorAll('.first-form tr');
  trCollection.forEach(item => item.innerHTML+=select+row);

});


backButton.addEventListener('click', () => {
  nextButton.parentNode.style.marginLeft = 0;
  mainBlock.style.width = dataPart.offsetWidth + 'px';
  backButton.parentNode.parentNode.style.marginRight = '-' + (backButton.parentElement.parentNode.offsetWidth - 50) + 'px';
});

