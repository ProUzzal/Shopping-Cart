const casePrice = document.querySelector('#case-price');
const caseQuantityStr = document.querySelector('#caseQuantity');
let totalCasePrice;

document.querySelector('#plusBtnCase').addEventListener('click', function (event) {
    event.stopPropagation()
    totalCasePrice = priceUpdate(59, caseQuantityStr, 'plus');
    casePrice.innerText = totalCasePrice;
    document.querySelector('#minusBtnCase').removeAttribute('disabled');
    totalPriceUpdate();
})
document.querySelector('#minusBtnCase').addEventListener('click', function (event) {
   event.stopPropagation()
    if (parseInt(caseQuantityStr.value) < 2) {
        document.querySelector('#minusBtnCase').setAttribute('disabled', 'true');
    }
    else {
        totalCasePrice = priceUpdate(59, caseQuantityStr, 'minus');
        casePrice.innerText = totalCasePrice;
        totalPriceUpdate();

    }

})
