

document.getElementById('input-quantity-value-master').value = 1;
document.getElementById('input-quantity-value-1').value = 1;
document.getElementById('input-quantity-value-2').value = 1;
document.getElementById('input-quantity-value-3').value = 1;


let quantity = document.getElementById('input-quantity-value-master').value;
let totalPrice = 0;

document.getElementById('total-price').innerText = (quantity * 20.00) + 84.00 + ' $';

function pressPlus () {
    document.getElementById('input-quantity-value-master').value++;
    quantity = document.getElementById('input-quantity-value-master').value;
    totalPrice = (quantity * 20.00) + 84.00;
    document.getElementById('total-price').innerText = totalPrice + ' $';
}

function pressMoins () {
    if(quantity > 1){
        document.getElementById('input-quantity-value-master').value--;
        quantity = document.getElementById('input-quantity-value-master').value;
        totalPrice = (quantity * 20.00) + 84.00;
        document.getElementById('total-price').innerText = totalPrice  + ' $';
    }
}

function pressRemove () {
    document.getElementById('remove').style.display = 'none';
    let removePrice = quantity * 20.00;
    totalPrice = (quantity * 20.00) + 84.00;
    document.getElementById('total-price').innerText = totalPrice - removePrice + ' $';
}