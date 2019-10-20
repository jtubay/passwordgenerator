//function to generate password

function generate () {

    //alert to choose a length
    var passwordLength = prompt('Please pick a length between 8 to 128').value;

    // final password
    var finalPassword = '';

    
    //prompt asking for paramiters 
    var choiceOne = prompt('Do you want capital letters?')
    var choiceTwo = prompt('Do you want Lower case letters?')
    var choiceThree = prompt('Do you want special characters?')
    var choiceFour = prompt('Do you want capital symbols?')
    
    //arrays 
    var outcomeOne = 'ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'

    for (var i = 8; i <= passwordLength;  i++) {
        finalPassword = finalPassword + outcomeOne.charAt(Math.floor(Math.random() * outcomeOne.length))
    }
    
    document.getElementById('display').value = finalPassword;
}    







// function generatePassword() {
//      var length = 8,
//             charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//             retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//             retVal += charset.charAt(Math.floor(Math.random() * n));
//         }
//     return retVal;
// }
// console.log(generatePassword())
// alert(generatePassword())