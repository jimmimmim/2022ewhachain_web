const clickIds = document.querySelectorAll('.question');


function openClose() {
    const answerId = this.id.replace('que', 'ans');
    if (document.getElementById(answerId).style.display === 'none') {
        document.getElementById(answerId).style.display = 'block';
        var toggleId = this.id + '-toggle';
        document.getElementById(toggleId).innerText = '∧';

    } else {
        document.getElementById(answerId).style.display = 'none';
        var toggleId = this.id + '-toggle';
        document.getElementById(toggleId).innerText = '∨';
    }
}

clickIds.forEach(clickId => {
    clickId.addEventListener("click", openClose);
})