const USER = 'USER';

export function setUser(userObject) {
    localStorage.setItem(USER, JSON.stringify(userObject));
}