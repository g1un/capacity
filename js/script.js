document.addEventListener('DOMContentLoaded', function(){

	//aside toggling
	(function() {

		//cache Dom
		var layout = document.querySelector('.js-layout');
		var aside = document.querySelector('.js-aside');
		var asideHamburger = document.querySelector('.js-aside-hamburger');

		//bind events
		asideHamburger.addEventListener('click', toggleAside);

		//toggleAside
		function toggleAside(e) {
			e.preventDefault();
			layout.classList.toggle('_nav-opened');
			aside.classList.toggle('_opened');
		}
	})()
});