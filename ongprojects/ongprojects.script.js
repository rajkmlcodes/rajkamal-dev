const accordians = document.querySelectorAll('.accordian');

console.log(accordians);

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');
    const image = accordian.querySelector('.image');


    accordian.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
        image.classList.toggle('active');
    })
})