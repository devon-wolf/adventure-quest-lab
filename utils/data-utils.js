const USER = 'USER';
const emptyUser = {};

export function findByID(id, array) {
    return array.find(item => item.id === id);
}

export function setUser(userObject) {
    localStorage.setItem(USER, JSON.stringify(userObject));
}

export function getUser() {
    return JSON.parse(localStorage.getItem(USER));
}

export function clearUser() {
    localStorage.setItem(USER, JSON.stringify(emptyUser));
}

export function submitUserData(formData) {
    const user = {
        name: formData.get('name'),
        charClass: formData.get('char-class'),
        hp: 100,
        gold: 0,
        completed: {}
    };
    setUser(user);
}

export function updateUserStats(choiceObject, questObject) {
    const userObject = getUser();

    userObject.completed[questObject.id] = true;
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;

    setUser(userObject);
}