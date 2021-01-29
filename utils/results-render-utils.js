import { getUser } from '../utils/data-utils.js';

export function renderQuestSummary() {
    const h2 = document.querySelector('h2');
    const p = document.querySelector('p');

    const user = getUser();
    const capitalClass = user.charClass.charAt(0).toUpperCase() + user.charClass.slice(1);

    h2.textContent = `${user.name} the ${capitalClass}`;
    p.textContent = `You end your adventures with ${user.gold} gold and ${user.hp} hp.\n${evaluateUser(user)}`;
}

function evaluateUser(user) {
    switch (user.charClass) {
        case 'mage':
            if (user.hp > 100) return 'Only a mage would walk away with more than full health.';
            else if (user.gold > 100) return 'What, did you want people to think you were a thief?';
            else return '';
        case 'warrior':
            if (user.hp > 90) return 'I thought warriors were supposed to take risks...';
            else if (user.hp < 80) return `Aren't you supposed to be able to handle yourself?`;
            else return '';
        case 'thief':
            if (user.gold <= 0) return 'Some thief you turned out to be.';
            else if (user.hp > 90) return 'Dodging danger like a true rogue.';
            else return '';
        default:
            return 'Did you even pick a class?';
    }
}