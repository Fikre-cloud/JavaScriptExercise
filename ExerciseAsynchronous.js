// write code to implement callback by passing one function as a parameter
const add = (result) => {
    return result;
}
function sum (number1,number2,callback) {
    if(isNaN(number1) || isNaN(number2)){
        return;
    }
    let sum = number1 + number2;
    return callback(sum);
}
console.log(`sum1: ${sum(5,3,add)}`);

// validate email by passing the callback function in another function
const printEmail = () => {
    console.log(`email is valid`);
}
function validateEmail(email, callback) {
    let at = email.includes('@');
    let dot = email.includes('.');
    if(at && dot){
        callback(true);
    }
}

validateEmail('fikre@gmail.com', printEmail);

//or different way 
const printEmail1 = (isValid) => {
    isValid?console.log(`email is valid`):console.log(`email is invalid`);
}
function validateEmail(email, callback) {
    let at = email.includes('@');
    let dot = email.includes('.');
    if(at && dot){
        callback(true);
    }else {
        callback(false);
    }
}

validateEmail('fikre@gmail.com', printEmail1);

// delay message using promise with setTimeout
const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve ("my message to the clients...");
}, 2000);
});

simplePromise
  .then(promiseResult => {
    return promiseResult;
  })
  .then(message => {
    console.log(message);
  })
  .catch(err => {
    console.error(err);
  })

  // delay a message using setTimeout

  function delayedMessage (delay) {
    setTimeout(function () {
        console.log("delayed message");
  }, delay);
}

delayedMessage(5000);

// implement countdown timer using set interval

function countdownTimer (count) {
   const timer = setInterval(function () {
        count--;
        if (count === 0) {
            console.log("Time's up");
            clearInterval(timer);
        }
    },1000);
} 

countdownTimer(5);