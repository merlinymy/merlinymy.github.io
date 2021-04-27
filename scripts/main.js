let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/voyager.png') {
        myImage.setAttribute('src','images/voyager2.png');
    } else {
        myImage.setAttribute('src','images/voyager.png');
    }

}

//takes references to the new button and the heading, storing each inside variables
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//
function setUserName(){
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName()
    }else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to my Journey, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'welcome to my Journey,' + storedName;
}

myButton.onclick = function () {
    setUserName();
}