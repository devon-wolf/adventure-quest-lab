import { clearUser } from '../utils/data-utils.js';

const resetButton = document.getElementById('quest-reset');

resetButton.addEventListener('click', () => {
    clearUser();
    window.location = '../';
});