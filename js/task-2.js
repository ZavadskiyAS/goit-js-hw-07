'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const createIngredientsItems = ingredientsArr => {
  return ingredientsArr.reduce((listItem, ingredient) => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    listItem.push(item);
    return listItem;
  }, []);
};

const newList = createIngredientsItems(ingredients);
ingredientsList.append(...newList);
