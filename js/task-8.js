'use strict';
const renderBtn = document.querySelector('[data-action="render"]');

const destroyBtn = document.querySelector('[data-action="destroy"]');

const boxInput = document.querySelector('#controls > input');

const boxesContainer = document.querySelector('#boxes');

let inputValue;
boxInput.addEventListener('input', getValue);

function getValue(e) {
  inputValue = e.currentTarget.value;
}

renderBtn.addEventListener('click', hendelRender);
function hendelRender(e) {
  createBoxes(inputValue);
}

destroyBtn.addEventListener('click', hendelDestroy);
function hendelDestroy(e) {
  boxesContainer.innerHTML = '';
}

function createBoxes(amount) {
  const temporaryContainer = document.createDocumentFragment();
  let newDiv;
  let divWidth = 20;
  let divHeight = 20;
  for (let i = 0; i < amount; i++) {
    newDiv = document.createElement('div');
    newDiv.style.width = `${(divWidth += 10)}px`;
    newDiv.style.height = `${(divHeight += 10)}px`;
    newDiv.style.backgroundColor = `#${generateColor()}`;
    temporaryContainer.append(newDiv);
  }
  boxesContainer.appendChild(temporaryContainer);
}

function generateColor() {
  return Math.floor(Math.random() * 16777216).toString(16);
}
