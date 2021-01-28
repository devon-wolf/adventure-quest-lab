import {
    findByID
} from '../utils/data-utils.js';

import {
    h2,
    p,
    choiceSelection,
    button
} from '../quest/quest.js';

import questData from '../data/data.js';

const params = new URLSearchParams(window.location.search);
const questID = params.get('id');
const quest = findByID(questID, questData);

function renderQuestChoices() {
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
}

export function renderQuest() {
    h2.textContent = quest.title;
    p.textContent = quest.description;
    renderQuestChoices();
    button.textContent = '==>';
    choiceSelection.append(button);
}