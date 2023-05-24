function render() {
    let content = document.getElementById('content'); //div container wird verknüpft mit der id 'content' d.h: wir haben eine variable wo unser div-container drin ist
    content.innerHTML = '';
    /*div-container wird gelöscht.
    sonst werden die Elemente einfach immer weiter hinzugefügt werden. 
    Wenn man es aber löscht und dann hinzufügt, hast du immer nur die Elemente die du brauchst und diese "up to date". 
    Im Grunde genommen, löscht man den Content und zeichnet diesen dann neu und das mit neuen "Daten".
    -->Der div container wird an den Inhalt angepasst falls sich dieser ändert
    */


    for (let i = 0; i < dishes.length; i++) {
        const dish = dishes[i];

        content.innerHTML += `
        <h2>${dish['category']}</h2>
            <div class="card">
                <h2>${dish['menuName']}</h2>
                
                <div class="container">
                    <img class="image" src="${dish.image}">
                    
                    <div class="middle">
                        <div class="text">Hinzufügen</div>
                    </div>
                </div>
                
                

                <h3>${dish['description']}</h3>
                <h2>${dish['price']}</h2>

       
            </div>
        `;
    }
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