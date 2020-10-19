const sounds = ['airplane', 'ambulance', 'applause', 'basketball', 'car_start','driving'
];

sounds.forEach((sound) => {
	const button = document.createElement('button');
	button.classList.add('button');

	button.innerText = sound;

	button.addEventListener('click', () => { 
		stopSongs();
		document.getElementById(sound).play();
	})

	document.body.appendChild(button);

});

function stopSongs() {
	sounds.forEach((sound) => {
		const song =
	document.getElementById(sound);

	song.pause();
	song.currentTime = 0;

	})
}