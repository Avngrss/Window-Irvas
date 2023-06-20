import checkNumInput from './checkNumInput';
const forms = (state) => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input');

	checkNumInput('input[name="user_phone"]');

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо скоро с вами свяжутся',
		failure: 'Что то пошло не так',
	};

	const postDate = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		});
		return await res.text();
	};

	const clearInput = () => {
		inputs.forEach((item) => {
			item.value = '';
		});
	};

	form.forEach((item) => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formDate = new FormData(item);
			if(item.getAttribute('data-calc') === 'end') {
				for(let key in state) {
					formDate.append(key, state[key]);
				}
			}

			postDate('assets/server.php', formDate)
				.then((value) => {
					console.log(value);
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
				})
				.finaly(() => {
					clearInput();
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				});
		});
	});
};
export default forms;
