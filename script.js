// function openHeaderMenuMore() {
//     openHeaderMenuMoreBackground.style.display = 'flex';
// }

// function closeHeaderMenuMore() {
//     openHeaderMenuMoreBackground.style.display = 'none';
// }


function openHeaderMenuMore() {
    document.getElementById('openHeaderMenuMoreBackground').classList.remove('d-none');
    
}

function closeHeaderMenuMore(){
    document.getElementById('openHeaderMenuMoreBackground').classList.add('d-none');
    
}

function doNotClose(event) {
    event.stopPropagation();    
}