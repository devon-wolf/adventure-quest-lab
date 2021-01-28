import questData from '../data/data.js';
import { getUser } from '../utils/data-utils.js';

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