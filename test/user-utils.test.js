import {
    setUser,
    getUser,
    clearUser,
} from '../utils/data-utils.js';

const test = QUnit.test;

const USER = 'USER';
const emptyUser = {};
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
    const actual = localStorage.getItem(USER);

    expect.equal(actual, expected);
});

// test getUser
test('It should correctly get the user object from localStorage', (expect) => {
	
    localStorage.setItem(USER, JSON.stringify(userObject));
	
    const expected = userObject;
    const actual = getUser();

    expect.deepEqual(actual, expected);
});

// test clearUser
test('It should clear the user data from local storage', (expect) => {
	
    localStorage.setItem(USER, JSON.stringify(userObject));

    clearUser();
	
    const expected = JSON.stringify(emptyUser);
    const actual = localStorage.getItem(USER);

    expect.equal(actual, expected);
});