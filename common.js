const priceUpdate = function (price, quantity, action) {
    quantity.value = parseInt(quantity.value);
    let productQuantity = quantity.value;
    if (action === 'plus') {
        productQuantity = ++quantity.value;
    }
    else if (action === 'minus' && productQuantity > 1) {
        productQuantity = --quantity.value;
        console.log(productQuantity);
    }

    return (price * productQuantity);


}

//totalPriceUpdate

const totalPriceUpdate = function (phoneTotal, caseTotal) {
    const subTotal = document.querySelector('#subTotal');
    const inTotalBalance = document.querySelector('#total_balance');
    const vatAmount = document.querySelector('#tax');
    const mobilePrice = parseInt(document.querySelector('#mobile-price').innerText);
    const casePrice = parseInt(document.querySelector('#case-price').innerText);
    const totalPriceWithoutVat = mobilePrice + casePrice;
    subTotal.innerText = totalPriceWithoutVat;
    const totalVat = (.7 / 100) * totalPriceWithoutVat;
    vatAmount.innerText = totalVat.toFixed(2);
    inTotalBalance.innerText = (totalPriceWithoutVat + totalVat).toFixed(2);
}