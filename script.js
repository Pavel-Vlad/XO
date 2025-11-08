window.onload = () => {
    let cells = []; // [234,'fwefwe',[0,9,9],'wfwe'] cells[1]
    let xos = document.querySelectorAll('.xo');
    let click = true; // true / false
    let buttonsXO = document.querySelectorAll('.buttons button');
    let buttons = document.getElementsByClassName('buttons');
    let xoWrap = document.getElementsByClassName('xo-wrap');
    let whoPlay = document.getElementById('whoPlay');
    let layer = document.querySelector('.layer');
    let winner = document.querySelector('.popup span');
    let popupClose = document.querySelector('.popup-close');
    let clicksOnCells = 0;

    popupClose.addEventListener('click', () => {
        window.location.reload();
    })

    // обработка кнопок выбора кто ходит первым
    buttonsXO.forEach(
        (el, index) => {
            el.addEventListener('click', (event) => {
                if (el.innerText === 'X') {
                    click = false;
                }
                if (el.innerText === 'O') {
                    whoPlay.innerText = 'Ходит O'
                    click = true;
                }
                xoWrap[0].classList.remove('hidden');
                buttons[0].classList.add('hidden');
                whoPlay.classList.remove('hidden');
            })
        }
    )

    // обработка нажатия клеток игрового поля
    xos.forEach(
        (el, index) => {
            el.addEventListener('click', (event) => {
                if (el.innerText !== '') {
                    return;
                }
                if (click) {
                    whoPlay.innerText = 'Ходит X'
                    el.innerText = 'O';
                }
                if (!click) {
                    whoPlay.innerText = 'Ходит O'
                    el.innerText = 'X';
                }

                cells[index] = el.innerText;
                console.log(cells);
                click = !click;
                clicksOnCells = clicksOnCells + 1;
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
        let win = false;

        winLines.forEach((line) => {
            let a = line[0];
            let b = line[1];
            let c = line[2];

            if (cells[a] !== undefined &&
                cells[a] === cells[b] &&
                cells[a] === cells[c]) {

                layer.classList.remove('hidden');
                winner.innerText = 'Победил ' + cells[a];
                win = true;
            }
        })

        if (clicksOnCells === 9 && win !== true) {
            layer.classList.remove('hidden');
            winner.innerText = 'Ничья';
        }
    }
}


