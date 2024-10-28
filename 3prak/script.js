const main = document.querySelector(".main")



function open_form(){
    main.style.display = "block";
}

function close_form(){
    main.style.display = "none";
}

function confirm_order() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const date = document.getElementById('date').value;
    
    if (!(name && email && number && date)) {
        alert("Не все поля заполнены!");
    } else {
        alert("Все поля заполнены!");
    }
}