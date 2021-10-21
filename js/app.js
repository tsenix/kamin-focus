(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:767.98px)' );
  let mainSwiper;

  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
			if ( mainSwiper !== undefined ) mainSwiper.destroy( true, true );
			return;
		} else if ( breakpoint.matches === false ) {
			return enableSwiper();
		}
  };

  const enableSwiper = function() {
    mainSwiper = new Swiper ('.main', {
      observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,
			loop: true,
			navigation: {
				nextEl: '.main__button_next',
				prevEl: '.main__button_prev',
			},
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

const catalogSlider = new Swiper ('.category__body', {
	observer: true,
	observeParents: true,
	spaceBetween: 30,
	speed: 800,
	autoHeight: false,
	loop: true,
	navigation: {
		nextEl: '.category__button_next',
		prevEl: '.category__button_prev',
	},
	breakpoints: {
		320: {
			slidesPerView: "auto",
			centeredSlides: true,
		},
		768: {
			slidesPerView: 3,
			centeredSlides: false,
		}
	},
});

(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:767.98px)' );
  let productsSwiper;

  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
			if ( productsSwiper !== undefined ) productsSwiper.destroy( true, true );
			return;
		} else if ( breakpoint.matches === false ) {
			return enableSwiper();
		}
  };

  const enableSwiper = function() {
    productsSwiper = new Swiper ('.products__body', {
      observer: true,
			observeParents: true,
			slidesPerView: "auto",
			centeredSlides: true,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,
			loop: true,
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:1515px)' );
  let categoriesSlider;

  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
			if ( categoriesSlider !== undefined ) categoriesSlider.destroy( true, true );
			return;
		} else if ( breakpoint.matches === false ) {
			return enableSwiper();
		}
  };

  const enableSwiper = function() {
    categoriesSlider = new Swiper ('.categories__body', {
      observer: true,
			observeParents: true,
			spaceBetween: 20,
			slidesPerView: "auto",
			centeredSlides: false,
			speed: 800,
			autoHeight: false,
			loop: false,
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

const productSlider = new Swiper ('.product__slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 25,
	speed: 800,
	autoHeight: false,
	loop: true,
	navigation: {
		nextEl: '.product__arrow_next',
		prevEl: '.product__arrow_prev',
	},
	breakpoints: {
		320: {
			spaceBetween: 20,
		},
		768: {
			spaceBetween: 25,
		}
	},
});
let unlock = true;

//filter
const openFilter = document.querySelector('.category-page__button');
const closeFilter = document.querySelector('.category-page__close');
if (openFilter != null) {
  const delay = 500;
  const filterBody = document.querySelector('.category-page__filter');
  openFilter.addEventListener('click', function(e) {
    if (unlock) {
			body_lock(delay);
      e.stopPropagation();
      filterBody.classList.add('_active');
    }
  });
	closeFilter.addEventListener('click', function(e) {
    if (unlock) {
			body_lock(delay);
      e.stopPropagation();
      filterBody.classList.remove('_active');
    }
  });
  document.addEventListener('click', function(e) {
    const target = e.target;
    const its_filterBody = target == filterBody || filterBody.contains(target);
    const its_closeFilter = target == closeFilter;
    const filterBody_is_active = filterBody.classList.contains('_active');
    if (!its_filterBody && !its_closeFilter && filterBody_is_active) {
      filterBody.classList.remove('_active');
    }
  });
}

//Catalog
const openCatalog = document.querySelector('.menu__catalog-button_mob');
if (openCatalog != null) {
  const delay = 500;
  const catalogBody = document.querySelector('.catalog-menu');
  openCatalog.addEventListener('click', function(e) {
    if (unlock) {
      if (window.innerWidth < 767.98) {
        body_lock(delay);
      }
      e.stopPropagation();
      openCatalog.classList.toggle('_active');
      catalogBody.classList.toggle('_active');
    }
  });
  document.addEventListener('click', function(e) {
    const target = e.target;
    const its_catalogBody = target == catalogBody || catalogBody.contains(target);
    const its_openCatalog = target == openCatalog;
    const catalogBody_is_active = catalogBody.classList.contains('_active');
    if (!its_catalogBody && !its_openCatalog && catalogBody_is_active) {
      openCatalog.classList.remove('_active');
      catalogBody.classList.remove('_active');
    }
  });
}

//Menu
const iconMenu = document.querySelector(".header__burger");
if (iconMenu != null) {
	const delay = 500;
	const menuBody = document.querySelector(".mobile-menu");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};

//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	let html = document.querySelector("html");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
			html.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	let html = document.querySelector("html");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");
		html.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}

//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {

	function spollerCLick(e) {
		const spoller = e.target;
		if (spollersGo) {
			spollersGo = false;

			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);

			setTimeout(function () {
				spollersGo = true;
			}, 500);
		}
	}
	function spollersInit() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			let spollerMax = spoller.getAttribute('data-max');

			if (spollerMax && window.innerWidth > spollerMax) {
				if (spoller.classList.contains('_init')) {
					spoller.classList.remove('_active');
					spoller.classList.remove('_init');
					spoller.nextElementSibling.style.cssText = '';
					spoller.removeEventListener("click", spollerCLick);
				}
			} else if (!spoller.classList.contains('_init')) {
				spoller.classList.add('_init');
				spoller.addEventListener("click", spollerCLick);
			}
		}
	}
	function spollersShowActive() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			if (spoller.classList.contains('_active')) {
				_slideToggle(spoller.nextElementSibling);
			}
		}
	}
	window.addEventListener("resize", spollersInit);

	setTimeout(function () {
		spollersShowActive();
		spollersInit();
	}, 0);
}

//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//product slider toggler
const productSlides = document.querySelectorAll('.product__slide-image');
if (productSlides.length) {
	const productImage = document.querySelector('.product__image img');
	for (let i = 0; i < productSlides.length; i++) {
		let productSlide = productSlides[i];

		productSlide.addEventListener("click", function() {
			productImage.src = productSlide.getAttribute('data-src');
		});
	}
}
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
