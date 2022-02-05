
document.querySelectorAll('.favorites__inner').forEach((item) =>
	item.addEventListener('click', () => {
		const parentThree = item.parentNode;

		if (parentThree.classList.contains('favorites-active')) {
			parentThree.classList.remove('favorites-active');
		}else {
			document
				.querySelectorAll('.favorites-btn')
			parentThree.classList.toggle('favorites-active');
		}
	})
)