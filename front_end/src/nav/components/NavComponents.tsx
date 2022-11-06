export function toggleNavMenus(): void {
	const navMenus: any = document.querySelector('.nav-menus');
	if (navMenus?.classList.contains('active')) {
		navMenus.style.animation = 'fadeInRight 1s';
		setTimeout(() => {
			navMenus.classList.toggle('active');
		}, 900);
	} else {
		navMenus.style.animation = 'fadeInLeft 1s';
		navMenus.classList.toggle('active');
	}
}
