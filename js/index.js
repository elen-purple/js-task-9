//* 1
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
  return;
};
logItems(["Mango", "Poly", "Ajax"]);
//* 2
const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const price = words.length * pricePerWord;
  return price;
};
console.log(calculateEngravingPrice("Made in China", 6));
//* 3
const findLongestWord = function (string) {
  const words = string.split(" ");
  let theLongestWord = "";
  for (const word of words) {
    if (word.length > theLongestWord.length) {
      theLongestWord = word;
    }
  }
  return theLongestWord;
};
console.log(findLongestWord("Made in China"));
//* 4
const formatString = function (string) {
  let modifiedString;
  if (string.length > 40) {
    const letter = string.split("");
    letter.length = 40;
    modifiedString = letter.join("");
    modifiedString = modifiedString.trim();
    modifiedString += "...";
  }
  return modifiedString;
};
console.log(formatString("Made in China"));
console.log(
  formatString(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos non et eveniet quidem dolorum, mollitia iusto. Veritatis possimus, minus aliquam magni reprehenderit amet temporibus minima eos quia nesciunt sunt corporis impedit aut culpa modi! Officiis minima sed vero, similique corrupti quasi eum adipisci blanditiis eveniet harum nostrum ab illum!"
  )
);
//* 5
const checkForSpam = function (message) {
  let chekingMessage = message;
  chekingMessage = chekingMessage.toLowerCase();
  let isMessageSpam = false;
  if (chekingMessage.includes("spam") || chekingMessage.includes("sale")) {
    isMessageSpam = true;
  }
  return isMessageSpam;
};
console.log(checkForSpam("SpAm and sAlE"));
console.log(checkForSpam("Made in China"));
// * 6
let input;
const numbers = [];
let total = 0;
const getValuesAndAdd = function () {
  let isInputNaN = false;
  do {
    input = prompt("Введіть будь-яке число");
    isInputNaN = isNaN(input);
    if (isInputNaN === true) {
      alert("Було введено не число, попробуйте ще раз");
    } else if (input === null) {
    } else {
      numbers[numbers.length] = Number(input);
    }
  } while (input !== null);
  if (numbers.length === 0) {
    total = "Ви не вписали жодного числа";
  } else {
    for (const num of numbers) {
      total += num;
    }
  }
  return total;
};
alert(getValuesAndAdd());
//* 7
const userLogin = "Ana";
const usersLogins = ["Luca", "Mary", "Alex"];

const isLoginValid = function (login) {
  let result = false;
  if (login.length > 3 && login.length < 17) {
    result = true;
  }
  return result;
};

const isLoginUnique = function (allLogins, login) {
  let result = true;
  for (const l of allLogins) {
    if (l === login) {
      result = false;
    }
  }
  return result;
};

const addLogin = function (allLogins, login) {
  let message = "";
  const resultLoginValid = isLoginValid(login);
  const resultLoginUnique = isLoginUnique(allLogins, login);
  if (resultLoginValid === false) {
    message = "Помилка! Логін повинен бути від 4 до 16 символів";
  } else if (resultLoginUnique === false) {
    message = "Такий логін уже використовується!";
  } else {
    message = "Логін успішно доданий!";
  }
  return message;
};
console.log(addLogin(usersLogins, userLogin));
