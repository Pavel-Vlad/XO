window.onload = () => {
    let xos = document.querySelectorAll('.xo');
    let click = true;

    xos.forEach((el) => {
        el.addEventListener('click', (event) => {
            if (click) {
                event.target.innerText = 'O';
            }
            if (!click) {
                event.target.innerText = 'X';
            }
            click = !click;
        })
    })
}