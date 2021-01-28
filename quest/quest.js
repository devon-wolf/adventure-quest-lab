// import questData from '../data/data.js';
// import { findByID } from '../utils/data-utils.js';
import { renderQuest } from '../utils/quest-render-utils.js';

try { 
    renderQuest();
    const choiceForm = document.querySelector('form');

    choiceForm.addEventListener('submit', () => {
		// e.preventDefault();
    }); 
}
catch (error) {
    const params = new URLSearchParams(window.location.search);
    const choiceID = params.get('choices');
    console.log(choiceID);
	
	// const choiceObject = findByID(choiceID, questData.choices);
	// console.log(choiceObject);
}

