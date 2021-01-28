import { getUser } from '../utils/data-utils.js';

export function renderQuestSummary() {
    const h2 = document.querySelector('h2');
    const p = document.querySelector('p');

    const user = getUser();
    const capitalClass = user.charClass.charAt(0).toUpperCase() + user.charClass.slice(1);

    h2.textContent = `${user.name} the ${capitalClass}`;
    p.textContent = `You end your adventures with ${user.gold} gold and ${user.hp} hp`;
}