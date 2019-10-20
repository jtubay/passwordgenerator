// //function to generate password



// function generate () {

//     //alert to choose a length
    
//     let comlexity = document.getElementById('slider').value;
//     // final password
//     let password = '';

    
//     //prompt asking for paramiters 
//     // var choiceOne = prompt('Do you want capital letters?')
//     // var choiceTwo = prompt('Do you want Lower case letters?')
//     // var choiceThree = prompt('Do you want special characters?')
//     // var choiceFour = prompt('Do you want capital symbols?')
    
//     //arrays 
//     const values = 'ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'

//     for (var i = 0; i <= complexity; i++) {
//         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
//     }
    
//     document.getElementById('display').value = password;
// }    

// //set the default length 
// document.getElementById('pwLength').innerHTML = "Length: 8";

// document.getElementById('slider').oninput = function () {
//     if(document.getElementById('slider').value >= 8) {
//         document.getElementById('pwLength').innerHTML = 'Length: ' + document.getElementById('slider').value;
//     } else {
//         document.getElementById('pwLength').innerHTML= 'length: 8'
//     }
// }






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



/// generato des
function generate() {

    //set pw length/complexity
    let complexity =document.getElementById('slider').value;
    //possible values
    const values = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

    let password = '';

    //creat for loop to chose pw cha
    for (var i = 0; i < complexity; i++) {
        password = password + values[Math.floor(Math.random() * values.length)];
    }

    // add password to textbox/display are
    document.getElementById('display').value = password;

//     // add pw to prev generated section
//     document.getElementById('lastNums').innerHTML += password + '<br />';
 }


//set default length display 
// document.getElementById('length').innerHTML = "Length: 8";

// function to set length based on slider position
document.getElementById('slider').oninput = function() {

    if(document.getElementById('slider').value >= 8) {
        document.getElementById('length').innerHTML = 'Length: ' + document.getElementById('slider').value;
    } else {
        document.getElementById('length').innerHTML = "length = 8"
    }

}