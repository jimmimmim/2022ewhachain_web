var btn = document.querySelector('.btn-lang');
var btnState = false;

$('.kor').show();
$('.eng').hide();

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