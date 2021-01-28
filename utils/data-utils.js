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

export function submitUserData(form) {
    const formData = new FormData(form);
    
    const user = {
        name: formData.get('name'),
        charClass: formData.get('char-class'),
        hp: 100,
        gold: 0,
        completed: {}
    };
    
    setUser(user);
    window.location = './map';
}


// this function does not work and is also pretty redundant considering we can change object properties by assignment... holding onto it to experiment with later
// export function updateUser(param, change) {
//     const userObject = getUser();
//     userObject[param] = change(userObject[param]);
//     setUser(userObject);
// }