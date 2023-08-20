// Get text input title by id

function getTextInputTitle(titleId) {
    const title = document.getElementById(titleId).innerText;
    return title;
}

// Get text input price value by id 

function getPriceValue(PriceId) {
    const priceValue = document.getElementById(PriceId);
    const priceValueString = priceValue.innerText;
    const price = parseFloat(priceValueString);
    return price;
}

// setup product name 

function setUpProductName(setupId, setupValue) {
    const container = document.getElementById(setupId);
    const p = document.createElement('p');
    const count = container.childElementCount;
    p.innerHTML =`${count + 1}. ${setupValue}`
    container.appendChild(p);
}

// setup price value 

function setupPriceAmount(setupId, priceAmount){
    const priceFieldAmount = document.getElementById(setupId);
    const previousPriceAmountString = priceFieldAmount.innerText;
    const previousPrice = parseFloat(previousPriceAmountString);
    const totalPrice = parseFloat(priceAmount + previousPrice).toFixed(2);
    priceFieldAmount.innerText = totalPrice;

    const buttonApply = document.getElementById('btn-apply');
    if(totalPrice >= 200){
        buttonApply.removeAttribute('disabled');
    }
    if(totalPrice >= 0){
        const makePurchase = document.getElementById('make-purchase');
        makePurchase.removeAttribute('disabled');
    }
    return totalPrice;
}

// Kitchenware card one

document.getElementById('card-accessories1').addEventListener('click', function () {
    const productName = getTextInputTitle('accessories-title1');
    const productPrice = getPriceValue('accessories1-price');
    setUpProductName('items-push', productName);
    const price = setupPriceAmount('total-price', productPrice);
    const total = setupPriceAmount('total', productPrice);
    
})
// Kitchenware card two

document.getElementById('card-accessories2').addEventListener('click', function () {
    const productName = getTextInputTitle('accessories-title2');
    const productPrice = getPriceValue('accessories2-price');
    setUpProductName('items-push', productName);
    const price = setupPriceAmount('total-price', productPrice);
    const total = setupPriceAmount('total', productPrice);
    
})
// Kitchenware card three

document.getElementById('home-cooker').addEventListener('click', function () {
    const productName = getTextInputTitle('cooker-title');
    const productPrice = getPriceValue('cooker-price');
    setUpProductName('items-push', productName);
    const price = setupPriceAmount('total-price', productPrice);
    const total = setupPriceAmount('total', productPrice);
    
})

/** 
 * Sportswear part
*/

// Sportswear card one

document.getElementById('sports-cap').addEventListener('click', function () {
    const productName = getTextInputTitle('cap-title');
    const productPrice = getPriceValue('cap-price');
    setUpProductName('items-push', productName);
    const price = setupPriceAmount('total-price', productPrice);
    const total = setupPriceAmount('total', productPrice);
    
})
// Sportswear card two

document.getElementById('full-jersey').addEventListener('click', function () {
    const productName = getTextInputTitle('jersey-title');
    const productPrice = getPriceValue('jersey-price');
    setUpProductName('items-push', productName);
    const price = setupPriceAmount('total-price', productPrice);
    const total = setupPriceAmount('total', productPrice);
    
})
// Sportswear card three

document.getElementById('sports-cates').addEventListener('click', function () {
    const productName = getTextInputTitle('cates-title');
    const productPrice = getPriceValue('cates-price');
    setUpProductName('items-push', productName);
    const price = setupPriceAmount('total-price', productPrice);
    const total = setupPriceAmount('total', productPrice);
    
})

/** 
 * Furniture part
*/

// Furniture card one

document.getElementById('relax-chair').addEventListener('click', function () {
    const productName = getTextInputTitle('chair-title');
    const productPrice = getPriceValue('chair-price');
    setUpProductName('items-push', productName);
    const price = setupPriceAmount('total-price', productPrice);
    const total = setupPriceAmount('total', productPrice);
    
})
// Furniture card two

document.getElementById('children-chair').addEventListener('click', function () {
    const productName = getTextInputTitle('children-chair-title');
    const productPrice = getPriceValue('children-chair-price');
    setUpProductName('items-push', productName);
    const price = setupPriceAmount('total-price', productPrice);
    const total = setupPriceAmount('total', productPrice);
    
})
// Furniture card three

document.getElementById('flexible-sofa').addEventListener('click', function () {
    const productName = getTextInputTitle('sofa-title');
    const productPrice = getPriceValue('flexible-sofa-price');
    setUpProductName('items-push', productName);
    const price = setupPriceAmount('total-price', productPrice);
    const total = setupPriceAmount('total', productPrice);
    
})

// for coupon button

document.getElementById('btn-apply').addEventListener('click', function(){
    const totalPriceValue = document.getElementById('total-price');
    const totalPriceStringValue = totalPriceValue.innerText;
    const totalPrice = parseFloat(totalPriceStringValue);
    // find coupon field value
    const couponField = document.getElementById('coupon-field');
    const couponFieldValue = couponField.value;
    if(couponFieldValue === 'SELL200'){
        const discountPrice = parseFloat((totalPrice * 20) / 100).toFixed(2);
        const discountValue = document.getElementById('discount');
        discountValue.innerText = discountPrice;
        const totalAmount = document.getElementById('total');
        totalAmount.innerText = parseFloat(totalPrice - discountPrice).toFixed(2);
    }
    else{
        alert('Please enter valid coupon')
    }
    
})

// Go home button

document.getElementById('btn-go-home').addEventListener('click', function(){
    window.location.href = 'index.html';
})

// function calculation(titleId, productPrice,) {
//     const productName = getTextInputTitle(titleId);
//     const productPrice = getPriceValue(productPrice);
//     setUpProductName('items-push', productName);
//     const price = setupPriceAmount('total-price', productPrice);
    
// }