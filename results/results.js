import { clearUser } from '../utils/data-utils.js';
import { renderQuestSummary } from '../utils/results-render-utils.js';

const resetButton = document.getElementById('quest-reset');

renderQuestSummary();

resetButton.addEventListener('click', () => {
    clearUser();
    window.location = '../';
});