import quests from '../data/data.js';
import questData from '../data/data.js';
import { findByID } from '../utils/data-utils.js';
import { renderQuest, selectChoice, renderChoiceOutcome } from '../utils/quest-render-utils.js';

try { 
    renderQuest();
    const choiceForm = document.querySelector('form');
    const params = new URLSearchParams(window.location.search);
    const questID = params.get('id');
    // const questObject = findByID(questID, questData);

    choiceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const choiceID = selectChoice(choiceForm);
        renderChoiceOutcome(choiceID);
        // questObject.choices find by ID to get choice
        // window.location = `./?id=${questID}&choice=${choiceID}`;
    });
}
catch (error) {
    const params = new URLSearchParams(window.location.search);
    // const questID = params.get('id');
    const choiceID = params.get('choice');
    console.log(choiceID);
  
    
	// const choiceObject = findByID(choiceID, questData.choices);
	// console.log(choiceObject);
}

