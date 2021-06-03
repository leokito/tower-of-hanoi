// const button = document.getElementById("teste");
// button.addEventListener("click", function() {
//     //    temCoisa()
// });



function game() {
    let discoAtual = '';
    let torreAtual = '';
    let dropDisco = false;


    const setDiscoAtual = (event) => {
        event.stopPropagation()
        discoAtual = event.currentTarget;
        dropDisco = true;
    }


    const setTorreAtual = (event) => {
        event.stopPropagation()
        torreAtual = event.currentTarget;
        console.log("entrou")
        if (dropDisco === true && (discoAtual === torre1.lastElementChild ||
                discoAtual === torre2.lastElementChild ||
                discoAtual === torre3.lastElementChild)) {
            // console.log(discoAtual)
            if (torreAtual.childElementCount === 0 || discoAtual.clientWidth < torreAtual.lastElementChild.clientWidth) {
                torreAtual.appendChild(discoAtual)
                dropDisco = false
                torreAtual = "";
                discoAtual = '';
            }

        }
    }


    let largeContainer = document.getElementById('container')

    let torre1 = document.createElement('div');
    torre1.classList.add('towers');
    torre1.id = 'tower1';
    largeContainer.appendChild(torre1);

    let torre2 = document.createElement('div');
    torre2.classList.add('towers');
    torre2.id = 'tower2';
    largeContainer.appendChild(torre2);

    let torre3 = document.createElement('div');
    torre3.classList.add('towers');
    torre3.id = 'tower3';
    largeContainer.appendChild(torre3);

    let disc4 = document.createElement('div');
    disc4.classList.add('discs');
    disc4.id = 'disc4';
    torre1.appendChild(disc4);

    let disc3 = document.createElement('div');
    disc3.classList.add('discs');
    disc3.id = 'disc3';
    torre1.appendChild(disc3);

    let disc2 = document.createElement('div');
    disc2.classList.add('discs');
    disc2.id = 'disc2';
    torre1.appendChild(disc2);

    let disc1 = document.createElement('div');
    disc1.classList.add('discs');
    disc1.id = 'disc1';
    torre1.appendChild(disc1);

    //eventos torres
    torre1.addEventListener('click', setTorreAtual);
    torre2.addEventListener('click', setTorreAtual);
    torre3.addEventListener('click', setTorreAtual);
    //eventos discos
    disc1.addEventListener('click', setDiscoAtual);
    disc2.addEventListener('click', setDiscoAtual);
    disc3.addEventListener('click', setDiscoAtual);
    disc4.addEventListener('click', setDiscoAtual);


    let hideBtn = document.getElementById('play');
    hideBtn.style.display = 'none';

    let resetBtn = document.getElementById('reset');
    resetBtn.style.display = 'flex';
    resetBtn.style.alignSelf = "flex-end";


}

let btn = document.getElementById('play')
btn.addEventListener('click', game, false);

























function verificarVitoria() {
    let ultimaTorre = document.getElementById("tower3")
    let blocos = ultimaTorre.childElementCount
    if (blocos === 4) {
        alert("Parabéns, você venceu!")
    }
}

// //eventos torres
// torre1.addEventListener('click', setTorreAtual);
// torre2.addEventListener('click', setTorreAtual);
// torre3.addEventListener('click', setTorreAtual);
// //eventos discos
// disc1.addEventListener('click', setDiscoAtual);
// disc2.addEventListener('click', setDiscoAtual);
// disc3.addEventListener('click', setDiscoAtual);
// disc4.addEventListener('click', setDiscoAtual);