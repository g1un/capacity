document.addEventListener('DOMContentLoaded', function(){

	//aside toggling
	(function() {

		//cache Dom
		var aside = document.querySelector('.js-aside');
		var asideHamburger = document.querySelector('.js-aside-hamburger');

		//bind events
		asideHamburger.addEventListener('click', toggleAside);

		//toggleAside
		function toggleAside(e) {
			e.preventDefault();
			aside.classList.toggle('_opened');
		}
	})()
});