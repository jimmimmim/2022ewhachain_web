var btn = document.querySelector('.quickmenu button');
var btnState = false;

btn.addEventListener("click", function() {
    btn.style.textAlign = 'center';
    if (btnState === false) {
        $('.kor').hide();
        $('.eng').show();
        btnState = true;
        btn.innerText = '한국어';
    } else {
        $('.kor').show();
        $('.eng').hide();
        btnState = false;
        btn.innerText = 'ENG';
    }

})