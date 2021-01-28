import {
    findByID
} from '../utils/utils.js';
import questData from '../data/data.js';

const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const choiceSelection = document.querySelector('form');

const params = new URLSearchParams(window.location.search);
const questID = params.get('id');
const quest = findByID(questID, questData);

h2.textContent = quest.title;
p.textContent = quest.description;

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const radioButton = document.createElement('input');
    const textSpan = document.createElement('span');

    radioButton.type = 'radio';
    radioButton.value = choice.id;
    radioButton.name = 'choices';
    textSpan.textContent = choice.description;

    label.append(textSpan, radioButton);

    choiceSelection.append(label);
}

const button = document.createElement('button');
button.textContent = '==>';
choiceSelection.append(button);
