
const VALID_LOGIN = "vasya";
const VALID_PASSWORD = "123";

const login = prompt('login');

const isLoginValid = login === VALID_LOGIN;

let isPasswordValid;

let shouldRepeat = true;

while (shouldRepeat){
    const password = prompt('Ener your password, please');
    shouldRepeat = password !== null;
    isPasswordValid = password === VALID_PASSWORD;
    if (isPasswordValid || !isLoginValid) break;
}

let massege;

if (!isLoginValid) {
    massege = "Wrong login!";
} else if (!isPasswordValid){
    massege = "Wrong password!";
} else {
    massege = "HELLO";
}

alert(massege);