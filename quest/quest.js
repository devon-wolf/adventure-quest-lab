import quests from '../data/data.js';
import questData from '../data/data.js';
import { findByID } from '../utils/data-utils.js';
import { renderQuest, selectChoice, renderChoiceOutcome } from '../utils/quest-render-utils.js';

renderQuest();
const choiceForm = document.querySelector('form');
// const params = new URLSearchParams(window.location.search);
// const questObject = findByID(questID, questData);

choiceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const choiceID = selectChoice(choiceForm);
    renderChoiceOutcome(choiceID);
  // questObject.choices find by ID to get choice
        // window.location = `./?id=${questID}&choice=${choiceID}`;
});


// try/catch block didn't turn out as useful as I thought

// catch (error) {
//     const params = new URLSearchParams(window.location.search);
//     // const questID = params.get('id');
//     const choiceID = params.get('choice');
//     console.log(choiceID);
  
    
// 	// const choiceObject = findByID(choiceID, questData.choices);
// 	// console.log(choiceObject);
// }

