import questData from '../data/data.js';

import {
    findByID,
    getUser
} from '../utils/data-utils.js';

// map variables
const ul = document.querySelector('ul');
const user = getUser();

// map functions
export function checkQuestStatus() {
    let completedAllQuests = true;

    for (let quest of questData) {
        if (!user.completed[quest.id]) {
            completedAllQuests = false;
        }
    }
	
    if (user.hp <= 0 || completedAllQuests) {
        window.location = '../results';
    }
}

export function renderMapEntry() {
    for (let quest of questData) {
        const li = document.createElement('li');
        const a = document.createElement('a');
	
        a.textContent = quest.title;
        a.href = `../quest/?id=${quest.id}`;
        if (user.completed[quest.id]) a.style.textDecoration = 'line-through';
	
        li.append(a);
        ul.append(li);
    }
}

// quest variables
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const choiceSelection = document.querySelector('form');
const button = document.createElement('button');

const params = new URLSearchParams(window.location.search);
const questID = params.get('id');
const questObject = findByID(questID, questData);

// quest functions
function renderQuestChoices() {
    for (let choice of questObject.choices) {
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
}

export function renderQuest() {
    h2.textContent = questObject.title;
    p.textContent = questObject.description;
    renderQuestChoices();
    button.textContent = '==>';
    choiceSelection.append(button);
}