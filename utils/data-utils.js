const USER = 'USER';

export function setUser(userObject) {
    localStorage.setItem(USER, JSON.stringify(userObject));
}

export function getUser() {
    return JSON.parse(localStorage.getItem(USER));
}

export function updateUser(param, change) {
    const userObject = getUser();
    userObject[param] = change(userObject[param]);
    setUser(userObject);
}