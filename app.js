import {
    submitUserData
} from './utils/data-utils.js';

const userDataForm = document.querySelector('form');

userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userDataForm);
    submitUserData(formData);
    window.location = './map';
});