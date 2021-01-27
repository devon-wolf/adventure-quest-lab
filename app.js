import {
    setUser
} from './utils/data-utils.js';

const userDataForm = document.querySelector('form');

userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userDataForm);

    const user = {
        name: formData.get('name'),
        charClass: formData.get('char-class'),
        hp: 100,
        gold: 0,
        completed: {}
    };

    setUser(user);
    window.location = './map';
});