let basketCardTemplate = [];

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
                        <div><button onclick="addMenu(${i})" class="add-product-button">Hinzufügen</button></div>
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
    let food = dishes.menuName

        

    render();
    renderBasketCard();
}

function renderBasketCard() {
    let fullShoppingCard = document.getElementById('fullShoppingCard');
    fullShoppingCard = '';



    for (let b = 0; b < basketCardTemplate.length; b++) {

        let item = dishes.menuName;


        fullShoppingCard.innerHTML += `
        
        <div id="fullShoppingCard">
            <div id="orderContainer">
                <div class="order-menu">
                    <div class="order-menu-name">
                        <h2>${dish['menuName']}</h2>          
                    </div>

                    <div class="order-menu-price">

                    </div>
                </div>

                <div class="order-add-reduce">

                </div>
            </div>
        </div>
        `;

    }
    fullBasket();
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