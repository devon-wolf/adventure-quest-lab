import { renderQuest, selectChoice, renderChoiceOutcome } from '../utils/quest-render-utils.js';

renderQuest();
const choiceForm = document.querySelector('form');

choiceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const choiceID = selectChoice(choiceForm);
    renderChoiceOutcome(choiceID);
});