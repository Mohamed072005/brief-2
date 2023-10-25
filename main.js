// JS for panier page 

var carts = document.getElementsByClassName('edit-product-info');
let plusButton = document.getElementsByClassName('plus-button');
var moinButton = document.getElementsByClassName('moins-button');
let productPrice = document.querySelectorAll('#product-price');
var inputButton = document.getElementsByClassName('input');
var productPricePlus = document.querySelectorAll('#product-price-plus');
var totalPrice = document.querySelector('#total-price');
var removeButton = document.querySelectorAll('.remove-button');
var productRemove = document.querySelectorAll('.edit-product-info');
let carts_length = carts.length;
let displayPrice;
let removePrice;




for(let i = 0; i < carts_length; i++){
    plusButton[i].addEventListener('click', function () {
        inputButton[i].value++;
        displayPrice = inputButton[i].value * Number(productPrice[i].innerText);
        productPricePlus[i].textContent = displayPrice.toFixed(2);
        totalcheckout();
    })
}   

for(let i = 0; i < carts_length; i++){
    moinButton[i].addEventListener('click', function () {
        if(inputButton[i].value > 1){
            inputButton[i].value--;
            displayPrice = inputButton[i].value * Number(productPrice[i].innerText); 
            productPricePlus[i].textContent = displayPrice.toFixed(2);            
        }
        totalcheckout();
        
    })
}

for(let i = 0; i < carts_length; i++){
    removeButton[i].addEventListener('click', function() {
        productRemove[i].style.display = 'none';
        totalcheckout();
    })
    
}

function totalcheckout(){
    let summ = 0;
    for(let i = 0; i<carts_length; i++){
        if(productRemove[i].style.display != 'none'){
            summ += Number(productPrice[i].innerHTML) * inputButton[i].value;
            totalPrice.innerText = summ + ' $';
        }
    }
}





// JS for menu !!!!!!

function displayMenu () {
    document.querySelector('button').style.display = 'none';
    document.getElementById('menu-burger').style.display = 'block';
    document.getElementsByClassName('close-button')[0].style.display = 'block'
}

function removeMenu () {
    document.querySelector('button').style.display = 'block';
    document.getElementById('menu-burger').style.display = 'none';
    document.getElementsByClassName('close-button')[0].style.display = 'none'
}
























































