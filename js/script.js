document.addEventListener('DOMContentLoaded', function(){

	//aside toggling
	(function() {
		if (!document.querySelector('.js-layout')) return;

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
	})();

    //animated label
	(function() {
        if (!document.querySelector('.js-form')) return;

        //cacheDom
		var el = document.querySelector('.js-form');
		var inputs = el.querySelectorAll('.js-input input, .js-input textarea');
		var labels = el.querySelectorAll('.js-input label');

        //init
        render();

		//bind events
        [].forEach.call(inputs, function(el) {
			el.addEventListener('input', render.bind(this));
			el.onfocus = inputFocus.bind(this);
			el.onblur = inputBlur.bind(this);
        });

        [].forEach.call(labels, function(el) {
			el.addEventListener('click', inputFocus.bind(this));
        });

		//render
        function render() {
        	[].forEach.call(inputs, function(el) {
                if(el.value != '') {
                    el.parentNode.classList.add('_has-value');
                } else {
                    el.parentNode.classList.remove('_has-value');
                }
            });
		}

		//input focus
        function inputFocus(e) {
			currentElements.control(e).classList.add('_focused');

			var input = currentElements.input(e);

			if(!input === document.activeElement) input.focus();
		}

		//current elements
        var currentElements = {
	        control: function(e) {
	            return e.target.parentNode;
	        },
	        input: function(e) {
	            return this.control(e).querySelector('input');
	        }
	    };

	    //input blur
		function inputBlur(e) {
			currentElements.control(e).classList.remove('_focused');
		}
	})();

    // var textLabel = {
    //     init: function() {
    //         this.cacheDom();
    //         this.bindEvents();
    //         this.render();
    //     },
    //     cacheDom: function() {
    //         this.$el = $('.js-form');
    //         this.$inputs = this.$el.find('.js-form-text input, .js-form-text textarea');
    //         this.$labels = this.$el.find('.js-form-text label');
    //     },
    //     bindEvents: function() {
    //         this.$inputs.change(this.render.bind(this));
    //         this.$labels.on('click', this.inputFocus.bind(this));
    //         this.$inputs.focus(this.inputFocus.bind(this));
    //         this.$inputs.blur(this.inputBlur.bind(this));
    //     },
    //     inputFocus: function(e) {
    //         this.currentElements.$control(e).addClass('_focused');
    //         var $input = this.currentElements.$input(e);
    //         if(!$input.is(":focus")) $input.focus();
    //     },
    //     inputBlur: function(e) {
    //         this.currentElements.$control(e).removeClass('_focused');
    //     },
    //     currentElements: {
    //         $control: function(e) {
    //             return $(e.target).closest('.js-form-text');
    //         },
    //         $input: function(e) {
    //             return this.$control(e).find('input');
    //         }
    //     },
    //     render: function() {
    //         for(var i = 0; i < this.$inputs.length; i++) {
    //             if(this.$inputs[i].value != '') {
    //                 $(this.$inputs[i]).closest('.js-form-text').addClass('_has-value');
    //             } else {
    //                 $(this.$inputs[i]).closest('.js-form-text').removeClass('_has-value');
    //             }
    //         }
    //     }
    // };
    // textLabel.init();
});