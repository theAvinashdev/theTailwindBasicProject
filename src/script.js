document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const id = question.getAttribute('data-id');
    const answer = document.querySelector(`.faq-answer[data-id="${id}"]`);
    const parentItem = question.closest('.faq-item');

    // Close other answers (accordion behavior)
    document.querySelectorAll('.faq-answer').forEach((el) => {
      if (el !== answer) {
        el.style.height = '0';
        el.parentElement.classList.remove('active');
      }
    });

    // Toggle selected answer
    if (parentItem.classList.contains('active')) {
      answer.style.height = '0';
      parentItem.classList.remove('active');
    } else {
      const fullHeight = answer.scrollHeight + 'px';
      answer.style.height = fullHeight;
      parentItem.classList.add('active');
    }
answer.addEventListener('transitionend', () => {
  if (parentItem.classList.contains('active')) {
    answer.style.height = 'auto';
  }
});

  });
});

const menuOpen = document.getElementById('menuOpen');
const close = document.getElementById('close');
const mobileMenu = document.getElementById('mobile_menu');


//opening the mobile menu
menuOpen.addEventListener('click',()=>{
    mobileMenu.classList.toggle('active');
});

//closing the mobile menu
close.addEventListener('click',()=>{
    mobileMenu.classList.toggle('active');
})



