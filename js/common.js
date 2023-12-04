
const Target = document.querySelectorAll('.fadeIn');
function observation() {

    Target.forEach(function (fade) {

        const targetRect = fade.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            fade.classList.add('fadeIn');
        } else {
            fade.classList.remove('fadeIn');
        }
    })
};

window.addEventListener('scroll', observation);