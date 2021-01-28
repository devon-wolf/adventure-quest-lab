import {
    setUser,
    getUser,
    updateUser,
    clearUser
} from '../utils/data-utils.js';

const test = QUnit.test;

const userObject = {
    charClass: 'mage',
    completed: {},
    gold: 0,
    hp: 100,
    name: 'Testy'
};

// test setUser
test('It should correctly set the user in localStorage', (expect) => {
	
    setUser(userObject);
	
    const expected = JSON.stringify(userObject);
    const actual = localStorage.getItem('USER');

    expect.equal(actual, expected);
});