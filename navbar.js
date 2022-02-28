/* 반응형 navbar를 위한 코드입니다. navbar에 있는 객체들을 자동으로 인식하여 모바일 navbar를 만들어줍니다. */

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
menu.classList.toggle('active');
});