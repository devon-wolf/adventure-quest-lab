import { getUser } from '../utils/data-utils.js';

export function renderQuestSummary() {
    const h2 = document.querySelector('h2');
    const p = document.querySelector('p');

    const user = getUser();

    h2.textContent = `${user.name} the ${user.charClass}`;
    p.textContent = `You end your adventures with ${user.gold} gold and ${user.hp} hp`;
}