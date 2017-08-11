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
    container.offsetHeight = imgOne[0].height;
    slider[0].style.height = imgOne[0].height + 'px';
    container.style.transform = 'translateX(0px)';
    digit=0;

    if (document.body.clientWidth >= 900) {
        imgOne.forEach(function (item) {
            item.width = slider[0].offsetWidth / 3;
            imgWidth = item.width;
                slider[0].offsetWidth = imgWidth * 3;
            container.offsetWidth = imgWidth * 3;

        });
    } else if (document.body.clientWidth >= 600) {
        imgOne.forEach(function (item) {
            item.width = slider[0].offsetWidth / 2;
            imgWidth = item.width;
            slider[0].offsetWidth = imgWidth * 2;
            container.offsetWidth = imgWidth * 2;
        });
    } else {
        imgOne.forEach(function (item) {
            item.width = slider[0].offsetWidth;
            imgWidth = item.width;
            slider[0].offsetWidth = imgWidth;
            container.offsetWidth = imgWidth;
            }
        );
    };




    // if (digit === 0) {
    //     buttonBack.disabled = true;
    // }
}

function slide(event) {
    if (event.target.classList.contains('go')) {
        if (digit < imgOne.length * imgWidth - slider[0].offsetWidth) {
            container.style.transform = 'translateX(-' + (imgWidth + digit) + 'px)';
            digit = Number(container.style.transform.replace(/\D+/g, ""));
        buttonBack.disabled = false;
            console.log(digit);} else {
            buttonGo.disabled = true;
        }

            // if (digit >= (imgWidth * imgOne.length - imgWidth * 2)) {
            //     buttonGo.disabled = true;
            // } else if (-digit < -300) {
            //     buttonBack.disabled = false;
            // } else {
            //     buttonGo.disabled = false;
            //     buttonBack.disabled = true;
            // }

    } else if (event.target.classList.contains('back')) {
        if (digit !== 0) {

            container.style.transform =
                'translateX(' + (-digit + imgWidth) + 'px)';
            digit = Number(container.style.transform.replace(/\D+/g, ""));
            buttonGo.disabled = false;
            // if (digit === imgWidth * 2) {
            //     buttonBack.disabled = true;
            // } else if (digit <= (imgWidth * imgOne.length - imgWidth)) {
            //     buttonGo.disabled = false;
            // } else {
            //     buttonGo.disabled = true;
            //     buttonBack.disabled = false;
            // }
            console.log(digit);
        } else {
            buttonBack.disabled = true;
        }
    }

}


