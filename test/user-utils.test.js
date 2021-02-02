import {
    setUser,
    getUser,
    clearUser,
    submitUserData,
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

// test submitUserData
test('It should use form data to set the user object in localStorage', (expect) => {
	
    const testForm = new FormData();
    testForm.append('name', 'Testy');
    testForm.append('char-class', 'thief');
    testForm.append('hp', 100);
    testForm.append('gold', 0);
    testForm.append('completed', {});

    submitUserData(testForm);

    const actual = JSON.parse(localStorage.getItem(USER));
    const expected = {
        charClass: 'thief',
        completed: {},
        gold: 0,
        hp: 100,
        name: 'Testy'
    };

    expect.deepEqual(actual, expected);
});