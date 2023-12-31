import checkNumInput from './checkNumInput';
const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img '),
		windowWidth = document.querySelectorAll('#width'),
		windowHeight = document.querySelectorAll('#height'),
		windowType = document.querySelectorAll('#view_type'),
		windowProfile = document.querySelectorAll('.checkbox');

	checkNumInput('#width');
	checkNumInput('#height');

	function bindActionToElem(e, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(e, () => {
				switch (item.nodeName) {
					case 'SPAN':
						state[prop] = i;
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
							elem.forEach((box, j) => {
								box.checked = false;
								if (i == j) {
									box.checked = true;
								}
							});
						} else {
							state[prop] = item.value;
						}
					case 'SELECT':
						state[prop] = item.value;
					default:
						break;
				}
				console.log(state);
			});
		});
	}

	bindActionToElem('click', windowForm, 'form');
	bindActionToElem('input', windowHeight, 'height');
	bindActionToElem('input', windowWidth, 'width');
	bindActionToElem('change', windowType, 'type');
	bindActionToElem('change', windowProfile, 'profile');
};
export default changeModalState;
