
const userLogin = "vasya"
const userPassord = "123"

const userInputLogin = prompt('login')
const userInputPassword = prompt('Ener your password, please')

if (userInputLogin !== "vasya") {
    alert("Неправильный логин!")
} else if (userInputLogin === "vasya" && userPassord !== userInputPassword) {
    alert("Hello vasya, password incorect!")
} else if (userInputPassword === userPassord && userLogin === userInputLogin) {
    alert('hello vasya, 123')
} else {
    alert('что то пошло не так')
}