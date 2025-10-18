window.onload = () => {
    let cells = [];
    let who;
    do {
        who = prompt('Кто ходит первым? (ввести X или O - большие английские буквы)');
    } while (who !== 'X' && who !== 'O')

    let xos = document.querySelectorAll('.xo');
    let click = true;
    if (who === 'X') {
        click = false;
    }
    console.log(click)

    xos.forEach(
        (el, index) => {
            el.addEventListener('click', (event) => {
                if (el.innerText !== '') {
                    return;
                }
                if (click) {
                    el.innerText = 'O';
                }
                if (!click) {
                    el.innerText = 'X';
                }

                cells[index] = el.innerText;
                console.log(cells);
                click = !click;
                whoWin();
            })
        }
    )

    function whoWin() {
        let winLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        winLines.forEach((line) => {
            let a = line[0];
            let b = line[1];
            let c = line[2];

            if (cells[a] !== undefined &&
                cells[a] === cells[b] &&
                cells[a] === cells[c]) {

                alert('Победил ' + cells[a] + '!');
            }
        })


    }
}