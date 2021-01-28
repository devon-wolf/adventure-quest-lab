import questData from '../data/data.js';
import { findByID } from '../utils/data-utils.js';

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

// choice-based sub-page rendering
export function selectChoice(form) {
    const choiceData = new FormData(form);
    return choiceData.get('choices');
}

export function renderChoiceOutcome(choice) {
    const questChoices = questObject.choices;
    const choiceObject = findByID(choice, questChoices);

    h2.textContent = choiceObject.description;
    p.textContent = choiceObject.result;
    
    continueToMap();
}

function continueToMap() {
    choiceSelection.remove();
    
    const continueButton = document.createElement('button');
    continueButton.textContent = '==>';

    const main = document.querySelector('main');
    main.append(continueButton);

    continueButton.addEventListener('click', () => {
        // update user stats either here or in renderChoiceOutcome
        window.location = '../map/';
    });
}
