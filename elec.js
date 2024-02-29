var formbox = document.querySelector('.form-box');
var curtain = document.querySelector('.curtain')
var username;
function openPage() {
    console.log('SHit is real')
    var computedStyles = window.getComputedStyle(formbox);
    var currentTop = parseInt(computedStyles.getPropertyValue('top'));
    getLoginFormInfo();

    if (currentTop === 150) {
        formbox.style.top = "-600px";
    } else {
        formbox.style.top = "150px";
    }
    
    curtain.style.top = "800px"
}

function getLoginFormInfo() {
    var fullName = document.querySelector('.form-box input[placeholder="Full Name"]').value;
    var email = document.querySelector('.form-box input[placeholder="Email"]').value;
    var password = document.querySelector('.form-box input[placeholder="Password"]').value;

    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    var NameButton = document.querySelector('.topbutton')
    NameButton.innerHTML = "Hello " + fullName;

    // You can use these values as needed, for example, send them to a server or perform other actions.
}


