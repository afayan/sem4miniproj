// myModule.js

export const cart = [];

export const formbox = document.querySelector('.form-box');
export const curtain = document.querySelector('.curtain');

export let name = "Geen";
export let email = "ywssf@gmail.com";
export let password;

export const profInfo = document.querySelector('.profInfo');
export const cartMenu = document.querySelector('.cartMenu');
export const profileMenu = document.querySelector('.profileMenu');

export function openPage() {
    console.log('Shit is real');
    const computedStyles = window.getComputedStyle(formbox);
    const currentTop = parseInt(computedStyles.getPropertyValue('top'));

    getLoginFormInfo();

    if (currentTop === 150) {
        formbox.style.top = "-600px";
    } else {
        formbox.style.top = "150px";
    }

    curtain.style.top = "800px";
}

export function getLoginFormInfo() {
    const fullName = document.querySelector('.form-box input[placeholder="Full Name"]').value;
    const email = document.querySelector('.form-box input[placeholder="Email"]').value;
    password = document.querySelector('.form-box input[placeholder="Password"]').value;

    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    const nameButton = document.querySelector('.topbutton');
    nameButton.innerHTML = "Hello " + fullName;
}

export function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price
    };
    cart.push(item);
    updateCartDisplay();
}

export function updateCartDisplay() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    for (const item of cart) {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(cartItem);
    }
}

// Event listeners for "Add to Cart" buttons
export const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.newcard');
        const productName = card.querySelector('.product-name').textContent;
        const productPrice = parseFloat(card.querySelector('.product-price').textContent.slice(1));
        addToCart(productName, productPrice);
    });
});

export function dropCart() {
    cartMenu.style.top = (cartMenu.style.top === '0px') ? '-600px' : '0px';
}

export function dropProfile() {
    profileMenu.style.top = (profileMenu.style.top === '0px') ? '-600px' : '0px';
    setProfile();
}

export function setProfile() {
    profInfo.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Password: ${password}</p>`;
}

export function submitForm() {
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    console.log(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
}
