const dataNextButton = document.querySelector('.data-part #next-button');
const formNextButton = document.querySelector('#second-next-button');
const formBackButton = document.querySelector('.form-part #back-button');
const resultBackButton = document.querySelector('#result-back-button');
const mainBlock = document.querySelector('.main-block');
const dataPart = document.querySelector('.data-part');
const formPart = document.querySelector('.form-part');
const resultPart = document.querySelector('.result-part');
const firstForm = document.querySelector('.first-form');
const secondForm = document.querySelector('.second-form');

const rowsInput = document.querySelector('.rows-input');
const colsInput = document.querySelector('.cols-input');

const formCaption = document.querySelectorAll('.form-caption');

const firstResult = document.querySelector('.first-result');
const secondResult = document.querySelector('.second-result');


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
let row = `<tr><input type="number" class="col" min="0" step="1" value="0"></tr>`;

// mainBlock.style.width = formPart.offsetWidth + 'px';


dataNextButton.addEventListener('click', () => {

  firstForm.innerHTML = '';
  secondForm.innerHTML = '';

  resultBackButton.parentNode.style.marginRight = 0;
  dataNextButton.parentNode.style.marginLeft = '-' + (dataNextButton.parentElement.offsetWidth + 50) + 'px';
  // mainBlock.style.width = formPart.offsetWidth + 'px';
  formPart.style.marginLeft = 0;

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

formNextButton.addEventListener('click', () => {
  firstResult.textContent = '';
  secondResult.textContent = '';
  formPart.style.marginRight = 0;
  formPart.style.marginLeft = '-' + (formPart.offsetWidth +50) + 'px';
  resultPart.style.marginRight = (formPart.offsetWidth ) + 'px';


  let arr1 = []
  let arr2 = []
  let trFirstCollection = document.querySelectorAll('.first-form tr');
  let trSecondCollection = document.querySelectorAll('.second-form tr');

  trFirstCollection.forEach((item, index)=> {
    arr1.push(item.querySelectorAll('input, select'));
  })

  trSecondCollection.forEach((item, index)=> {
    arr2.push(item.querySelectorAll('input, select'));
  })

  let firstRes, secondRes;

  arr1.forEach(item => {
    firstRes = new Array();
    item.forEach((part) => {
      firstRes.push(part.value)
    })
    firstResult.innerHTML += `</br>${firstRes}</br>`;
  })

  arr2.forEach(item => {
    secondRes = new Array();
    item.forEach((part) => {
      secondRes.push(part.value)
    })

    secondResult.innerHTML += `</br>${secondRes}</br>`;
  })

})

formBackButton.addEventListener('click', () => {
  dataPart.style.marginLeft = 0;
  formPart.style.marginRight = 0;
  formPart.style.marginLeft =(formPart.offsetWidth +50) + 'px';
});

resultBackButton.addEventListener('click', () => {
  formPart.style.marginLeft = 0;
  formPart.style.marginRight = (formPart.offsetWidth +50) + 'px';
})