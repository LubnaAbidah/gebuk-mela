const rumput = document.querySelectorAll('.rumput');
const mela = document.querySelectorAll('.mela');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let rumputSebelumnya;
let selesai;
let skor;

function randomRumput(rumput) {
	const r = Math.floor(Math.random() * rumput.length);
	const rRandom = rumput[r];
	if( rRandom == rumputSebelumnya ){
		randomRumput(rumput);
	}
	rumputSebelumnya = rRandom;
	return rRandom;
}

function randomWaktu(min, max){
	return Math.round(Math.random() * (max - min) + min);
}

function munculkanMela() {
	const rRandom = randomRumput(rumput);
	const wRandom = randomWaktu(300, 1000);
	rRandom.classList.add('muncul');
	setTimeout(() => {
		rRandom.classList.remove('muncul');
		if(!selesai) {
			munculkanMela();
		}
	}, wRandom);
}

function mulai(){
	selesai = false;
	skor = 0;
	papanSkor.textContent = 0;
	munculkanMela();
	setTimeout(() => {
		selesai = true;
	}, 10000);
}

function pukul(){
	skor++;
	this.parentNode.classList.remove('muncul');
	pop.play();
	papanSkor.textContent = skor;

}

mela.forEach(r => {
	r.addEventListener('click',pukul);
});