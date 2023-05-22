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