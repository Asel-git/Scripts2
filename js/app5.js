let userName = "Asel";
let userCard = prompt(`${userName}, введите номер:`);
let userNumber = "*".repeat(userCard.length - 4);
let result = userNumber + userCard.slice(userCard.length - 4, userCard.length);

document.write(`${userName}: номер вашей кредитной карты: ${result}`);
