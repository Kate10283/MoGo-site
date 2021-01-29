'use strict'

var card = document.getElementsByClassName("dropdown-card");
var des = document.getElementsByClassName("description");
var arrow = document.getElementsByClassName("dropdown-card__arrow");


for (let i = 0; i < card.length; i++) { 
    card[i].onclick = () => {
        for (let j = 0; j < des.length; j++) {
            if (j == i) {
                continue;
            }
            des[j].classList.add('_display-none');
            changeArrow(j);
        }
        des[i].classList.toggle('_display-none');
        changeArrow(i);
    }
}

function changeArrow(x) {
    if (des[x].classList.contains("_display-none")) {
        arrow[x].src = 'images/icons/arrow-down.png';
    }
    else {
        arrow[x].src = 'images/icons/arrow-up.png';
    }
}