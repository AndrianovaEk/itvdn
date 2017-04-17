//регистрация
var tel = document.querySelector("input[type='tel']");
var submit = document.querySelector("input[type='submit']");
var mail = document.querySelector("input[type='e-mail']");
var header = document.querySelector('h2');
var msg = document.createElement('div');
var expr;
var invalid;
var filling;

submit.addEventListener('click', function() {
    if (invalid) {
        event.preventDefault()
    } else {
        alert('Заказ оформлен!')
    }
})

function validation(elem, expr) {
    var res = elem.value.search(expr);
    invalid = false;
    if (res == -1) {
        invalid = true;
        elem.style.backgroundColor = '#F08080';
        msg.innerHTML = 'Введите корректные данные!';
        header.appendChild(msg);
    }
}

tel.addEventListener('change', function() {
    expr = /[0-9]{9,10}/;
    validation(tel, expr)
})
mail.addEventListener('change', function() {
    expr = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validation(mail, expr)
})

//заказ пиццы
var order = document.querySelector('#order');
var selectSize = document.querySelector('#size');
var size;
var priceSize;
var priceFilling
selectSize.addEventListener('change', function() {
    size = selectSize.options[selectSize.selectedIndex].text;
    for (var i = 0; i < menuSize.length; i++) {
        if (menuSize[i].name == size) {
            priceSize = parseInt(menuSize[i].price)
        }
    }

})

var selectFilling = document.querySelector('#filling');
selectFilling.addEventListener('change', function() {
    filling = selectFilling.options[selectFilling.selectedIndex].text;
    for (var i = 0; i < menuFilling.length; i++) {
        if (menuFilling[i].filling == filling) {
            priceFilling = parseInt(menuFilling[i].price)
        }
    }
    order.style.visibility = 'visible';
    var orderPrice = priceSize + priceFilling
    order.value = 'Стоимость Вашего заказа: ' + orderPrice + ' рублей';
})

var menuSize = [
    { name: 'Большая 33 см', price: '400' },
    { name: 'Средняя 22 см', price: '300' },
    { name: 'Маленькая 16 см', price: '200' }
];

var menuFilling = [
    { filling: 'Грибы', price: '40' },
    { filling: 'Ветчина', price: '50' },
    { filling: 'Сыр', price: '30' },
    { filling: 'Оливки', price: '25' },
    { filling: 'Помидоры', price: '20' }
]