const consoleLog = document.querySelector("#consoleLog");

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const consoleLog2 = document.querySelector("#alert");

consoleLog2.addEventListener('click', () => {
  alert('Функция alert() предназначена для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК». При его появлении дальнейшее выполнение кода страницы прекращается до тех пор, пока пользователь не закроет это окно.');
})


const consoleLog3 = document.querySelector("#prompt");

consoleLog3.addEventListener('click', () => {
    alert('Функция prompt выводит окно для ввода данных.');
})