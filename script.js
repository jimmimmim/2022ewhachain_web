// LOAD HEADER & FOOTER
window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});




// FAQ관련 스크립트
// const items = document.querySelectorAll('#que-3');

// function openCloseAnswer() {
//     alert("진짜");
//     const answerId = this.id.replace('que', 'ans');

//     if (document.querySelector(answerId).style.display === 'block') {
//         document.querySelector(answerId).style.display = 'none';
//         document.querySelector(this.id + '-toggle').textContent = '∨';
//     } else {
//         document.getElementById(answerId).style.display = 'block';
//         document.getElementById(this.id + '-toggle').textContent = '∧';
//     }
// }

// items.forEach(item => item.addEventListener('click', openCloseAnswer));

// RECRUITING PAGE
$(window).scroll(function() {
    $('.faq').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("fadeIn");
        }
    });
});

$(window).scroll(function() {
    $('.notice').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("fadeIn");
        }
    });
});

$(window).scroll(function() {
    $('.section').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("fadeIn");
        }
    });
});