function game(){
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


let discoAtual
let discoWidth1
let discoWidth2
let selection

const discos = document.getElementsByClassName("discs");

let torreAnterior 
let hand = ""

const setTorreAtual = (event) => {
    if(hand === "") {
        hand = "disco"
    } else {
        hand = "torre"
    }

    let torreDisc = event.currentTarget
    let discNum = torreDisc.childElementCount
    let torreAtual = torreDisc.id

    if(hand === "disco"){
        discoAtual = torreDisc.lastElementChild
        if (discoAtual === null) {
            hand = ""
        }else {
            discoWidth1 = discoAtual.clientWidth
            torreAnterior = torreAtual
            
        }
    }
    if(hand === "torre") {
        if(discNum !== 0) {
            let topDisc = torreDisc.lastElementChild
            discoWidth2 = topDisc.clientWidth
        }

        if(discNum === 0 || discoWidth1 < discoWidth2) {
            torreDisc.appendChild(discoAtual)
            hand = ""
        }
        else if(discNum === 0 || discoWidth1 > discoWidth2) {
            alert("Jogada Inválida")
            hand = ""
        }

    }

    verificarVitoria()
}

const tower1 = document.getElementById("tower1");
tower1.addEventListener("click", setTorreAtual);
const tower2 = document.getElementById("tower2");
tower2.addEventListener("click", setTorreAtual);
const tower3 = document.getElementById("tower3");
tower3.addEventListener("click", setTorreAtual);

function verificarVitoria() {
    let ultimaTorre = document.getElementById("tower3")

    let blocos = ultimaTorre.childElementCount
    if(blocos === 4){
        let rickRoll = document.querySelector(".victory")
        let video = document.querySelector("video")
        rickRoll.classList.toggle("active");
        video.play();
        video.currentTime = 0;
    
    }
}

let hideBtn = document.getElementById('play');
hideBtn.style.display = 'none';

let resetBtn = document.getElementById('reset');
resetBtn.style.display = 'flex';
resetBtn.style.alignSelf = "flex-end";

}

let btn = document.getElementById('play')
btn.addEventListener('click', game);

function desligar() {
    let rickRoll = document.querySelector(".victory")
    let video = document.querySelector("video")
    rickRoll.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
    document.location.reload()
}

