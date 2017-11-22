;(() => {

	const hamburger = document.getElementById('js_hamburger');

	hamburger.onclick = () => {

		console.dir(hamburger)

		const cross = hamburger.firstElementChild;

		if(cross.classList.contains('active')){
			cross.classList.remove('active');
			return;
		}

		cross.classList.add('active');

	}

})();