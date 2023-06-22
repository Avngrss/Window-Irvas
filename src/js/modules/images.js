const images = () => {
	const imgModal = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImg = document.createElement('img');

	imgModal.classList.add('popup');
	workSection.append(imgModal);

	imgModal.style.justifyContent = 'center';
	imgModal.style.alignItems = 'center';
	imgModal.style.display = 'none';

	imgModal.append(bigImg);

	workSection.addEventListener('click', (e) => {
		document.body.style.overflow = 'hidden';
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains('preview')) {
			imgModal.style.display = 'flex';
			const path = target.parentNode.getAttribute('href');
			bigImg.setAttribute('src', path);
		}

		if (target && target.matches('div.popup')) {
			imgModal.style.display = 'none';
			document.body.style.overflow = '';
		}
	});
};

export default images;
