var slider = document.getElementsByClassName('slider__wrapper');
var imgOne = document.querySelectorAll('img');
var container = document.getElementsByClassName('img__container')[0];
var buttonGo = document.getElementsByClassName('go')[0];
var buttonBack = document.getElementsByClassName('back')[0];
var digit = Number(container.style.transform.replace(/\D+/g, ""));
var imgWidth = imgOne[0].width;
var imgHeight = imgOne[0].height;
var nav = document.getElementsByClassName('nav')[0];
nav.addEventListener('click', slide);
window.addEventListener('resize', slideAppear);

window.onload = slideAppear();

function slideAppear() {
    buttonGo.disabled = false;
    container.style.transform = 'translateX(0px)';
    digit = 0;

    if (document.body.clientWidth >= 900) {
        imgOne.forEach(function (item) {
            item.width = slider[0].offsetWidth / 3;
            imgHeight = item.height;
            imgWidth = item.width;
            slider[0].offsetWidth = imgWidth * 3;
            container.offsetWidth = imgWidth * 3;
            slider[0].style.height = imgHeight + 'px';

        });
    } else if (document.body.clientWidth >= 600) {
        imgOne.forEach(function (item) {
            item.width = slider[0].offsetWidth / 2;
            imgHeight = item.height;
            imgWidth = item.width;
            slider[0].offsetWidth = imgWidth * 2;
            container.offsetWidth = imgWidth * 2;
            slider[0].style.height = imgHeight + 'px';
        });
    } else {
        imgOne.forEach(function (item) {
                item.width = slider[0].offsetWidth;
                imgHeight = item.height;
                imgWidth = item.width;
                slider[0].offsetWidth = imgWidth;
                container.offsetWidth = imgWidth;
                slider[0].style.height = imgHeight + 'px';
            }
        );
    }
}

function slide(event) {
    if (event.target.classList.contains('go')) {
        if (digit < imgOne.length * imgWidth - slider[0].offsetWidth) {
            container.style.transform = 'translateX(-' + (imgWidth + digit) + 'px)';
            digit = Number(container.style.transform.replace(/\D+/g, ""));
            buttonBack.disabled = false;
            console.log(digit);
        } else {
            buttonGo.disabled = true;
        }
    } else if (event.target.classList.contains('back')) {
        if (digit !== 0) {

            container.style.transform =
                'translateX(' + (-digit + imgWidth) + 'px)';
            digit = Number(container.style.transform.replace(/\D+/g, ""));
            buttonGo.disabled = false;
            console.log(digit);
        } else {
            buttonBack.disabled = true;
        }
    }
}


