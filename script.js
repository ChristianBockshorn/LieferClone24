let basketCardTemplate = [];
let basketAmount = [];
let basketDishName = [];
let basketPrices = [];


function render() {
    let content = document.getElementById('content'); //div container wird verknüpft mit der id 'content' d.h: wir haben eine variable wo unser div-container drin ist
    content.innerHTML = '';

    for (let i = 0; i < dishes.length; i++) {
        let dish = dishes[i];

        content.innerHTML += `
        <h2>${dish['category']}</h2>
            <div id="card(${i})" class="card">
                <h2>${dish['menuName']}</h2>
                
                <div class="container">
                    <img class="image" src="${dish.image}">
                    
                    <div class="middle">
                        <div><button onclick="addMenu('${dish['menuName']}','${dish['price']}')" class="add-product-button">Hinzufügen</button></div>
                    </div>
                </div>
                
                <h3>${dish['description']}</h3>
                <h2>${dish['price']}</h2>
            </div>
        `;
    }

}


function addMenu(menuName, price) {
    let index = dishes.indexOf(menuName);

    basketDishName.push(menuName);
    basketPrices.push(Number(price));

    renderBasketCard();


}

function renderBasketCard() {
    let basketMain = document.getElementById('basketMain');
    basketMain.innerHTML = '';
    let amount = 0;

    for (let b = 0; b < basketDishName.length; b++) {
        let item = basketDishName[b];
        let price = basketPrices[b];



        amount += basketAmount[b]++;
        basketMain.innerHTML += `
        
        <div id="orderContainer(${b})">        
            <div class="order-menu">
                
                <div class="order-menu-amount">
                    <h3>${amount[b]}</h3>          
                </div>

                <div class="order-menu-name">
                    <h3>${item}</h3>          
                </div>

                <div class="order-menu-price">
                    <p>${price}€</p> 
                </div>
            </div>

            <div class="order-add-reduce">
                <img src="icon/add.png">
                <img src="icon/reduce.png">

            </div>
        </div>
        
        `;

    }

    for (let p = 0; p < basketDishName.length; p++) {
        let price = basketPrices[p];

        basketCostsContainer.innerHTML = '';




        renderBasketPriceContainer(price);

    }





    fullBasket();
}

function renderBasketPriceContainer(price) {
    document.getElementById('basketCostsContainer').innerHTML += `
    <div class="basket-costs-subtotal">
        <p>Zwischensumme</p><p>${subTotal().toFixed(2)}€</p>
    </div>
    <div class="basket-costs-delivery">
        <p>Lieferkosten</p><p>2,00€</p>
    </div>
    <div class="basket-costs-total">
        <p><b>Gesamt</b></p><p><b>${totalPrice().toFixed(2)}€</b></p>
    </div>

    <div class="basket-pay-button-container">
        <button class="basket-pay-button">Bezahlen</button>
    </div>
`;
}


function addAmount(b) {
    basketAmount[b]++;


}

function subTotal() {
    let sum = 0;
    for (let r = 0; r < basketPrices.length; r++) {
        sum += basketPrices[r];
    }
    return sum;
}

function totalPrice() {
    let sum = 0;
    for (let r = 0; r < basketPrices.length; r++) {
        sum += basketPrices[r] + 2;
    }
    return sum;
}

// function addToBasket(name, price) {
//     basketDishName.push(menuName);
//     basketPrices.push(price);
// }

function fullBasket() {
    document.getElementById('emptyShoppingCard').classList.add('d-none');
    document.getElementById('fullShoppingCard').classList.remove('d-none');
}

function emptyBasket() {
    document.getElementById('emptyShoppingCard').classList.remove('d-none');
    document.getElementById('fullShoppingCard').classList.add('d-none');
}


// function openHeaderMenuMore() {
//     openHeaderMenuMoreBackground.style.display = 'flex';
// }

// function closeHeaderMenuMore() {
//     openHeaderMenuMoreBackground.style.display = 'none';
// }


function openHeaderMenuMore() {
    document.getElementById('openHeaderMenuMoreBackground').classList.remove('d-none');

}

function closeHeaderMenuMore() {
    document.getElementById('openHeaderMenuMoreBackground').classList.add('d-none');

}

function doNotClose(event) {
    event.stopPropagation();
}

function scrollArrow() {
    const box = document.getElementById("box");
    box.scrollTo({

        left: 450,
        behavior: 'smooth'
    });

}