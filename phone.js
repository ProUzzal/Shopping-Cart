
const mobilePrice = document.querySelector('#mobile-price');
const mobileQuantityStr = document.querySelector('#mobileQuantity');
let totalMobilePrice;

document.querySelector('#plusBtnPhone').addEventListener('click', function (event) {
    event.stopPropagation();
    totalMobilePrice = priceUpdate(1219, mobileQuantityStr, 'plus');
    mobilePrice.innerText = totalMobilePrice;
    document.querySelector('#minusBtnPhone').removeAttribute('disabled');

    totalPriceUpdate();
})

document.querySelector('#minusBtnPhone').addEventListener('click', function (event) {
    event.stopPropagation();

    if (parseInt(mobileQuantityStr.value) < 2) {
        document.querySelector('#minusBtnPhone').setAttribute('disabled', 'true');
    }
    else {
        totalMobilePrice = priceUpdate(1219, mobileQuantityStr, 'minus');
        mobilePrice.innerText = totalMobilePrice;
        totalPriceUpdate();

    }
})


