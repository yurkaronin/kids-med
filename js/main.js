// Меню

const burgerMenu = document.getElementById('burgerMenu') || false;
const headerClose = document.getElementById('menuClose') || false;
const menuContent = document.getElementById('menuContent') || false;
const headerMenu = document.getElementById('headerMenu') || false;
const docBody = document.getElementById('docBody') || false;
if (burgerMenu) {
    burgerMenu.addEventListener("click", function(event) {
    event.preventDefault();
    headerMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    menuContent.classList.toggle('active');
    docBody.classList.toggle('overflow-hide');
  }); 

}

if (burgerMenu) {
  headerClose.addEventListener("click", function(event) {
  event.preventDefault();
  headerMenu.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  menuContent.classList.toggle('active');
  docBody.classList.toggle('overflow-hide');
}); 
}

// Слайдер на главной

var swiper = new Swiper('.first-screen__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.main-slider__btn--next',
    prevEl: '.main-slider__btn--prev',
  },
});

// Слайдер на главной (преимущества)

var swiper = new Swiper('.offers__slider-swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 700,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.offers__slider-btn--next',
    prevEl: '.offers__slider-btn--prev',
  },
});

// Слайдер на главной (специалисты)

var swiper = new Swiper('.specialist__slider-swiper', {
  slidesPerView: 4,
  fadeEffect: { crossFade: true },
  speed: 700,
  spaceBetween: 32,
  calculateHeight:true,
  navigation: {
    nextEl: '.specialist__slider-btn--next',
    prevEl: '.specialist__slider-btn--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    },

    1025: {
      slidesPerView: 4
    }
  }
});

// Слайдер на главной (Отзывы)

var swiper = new Swiper('.testimonials__slider-swiper', {
  slidesPerView: 4,
  speed: 1300,
  spaceBetween: 32,
  calculateHeight:true
});

/* Табы */


function createTab() {
  let tabItem = document.querySelectorAll('.tab-wrap .tab-item').length;
  const tabCount = tabItem;

  const tabClick = (event) => {
    const tabButtonClicked = event.target;
    const id = event.target.dataset.id;

    /* Анимация на табах */

    const bubbleAnim = gsap.timeline({paused: true});
    bubbleAnim.from('.tab-bubble__left', {duration: 1, delay: 0.5, y: 0 });
    bubbleAnim.to('.tab-bubble__left', {duration: 1, delay: 1.5, y: -100 } );

    for (let i = 1; i <= tabCount; i++) {
      let tabButtonID = "#tabButton" + i;
      let tabButton = document.querySelector(tabButtonID);
      let tabID = "#" + tabButton.dataset.id;
      let tab = document.querySelector(tabID);
      tabButton.classList.remove("active");
      tab.classList.add("hidden");
    }

    document.querySelector("#" + id).classList.remove("hidden");
    tabButtonClicked.classList.add("active");
  };

  const bindTabs = () => {
    for (let i = 1; i <= tabCount; i++) {
      let tabButtonID = "#tabButton" + i;
      let tabButton = document.querySelector(tabButtonID);
      if (tabButton) {
        tabButton.addEventListener("click", tabClick);
      }
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    bindTabs();
  });
}

function createTabMob() {
  let tabItem = document.querySelectorAll('.tab-wrap .tab-item').length;
  const tabCount = tabItem;

  const tabClick = (event) => {
    event.preventDefault();
    const tabButtonClicked = event.target;
    const id = event.target.dataset.id;

    for (let i = 1; i <= tabCount; i++) {
      let tabButtonID = "#tabButtonMob" + i;
      let tabButton = document.querySelector(tabButtonID);
      let tabID = "#" + tabButton.dataset.id;
      let tab = document.querySelector(tabID);
      tabButton.classList.remove("active");
      tab.classList.add("hidden");
    }

    document.querySelector("#" + id).classList.remove("hidden");
    tabButtonClicked.classList.add("active");
  };

  const bindTabs = () => {
    for (let i = 1; i <= tabCount; i++) {
      let tabButtonID = "#tabButtonMob" + i;
      let tabButton = document.querySelector(tabButtonID);
      if (tabButton) {
        tabButton.addEventListener("click", tabClick);
      }
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    bindTabs();
  });
}

createTab();
createTabMob();

// Слайдер на главной (Мобильные табы)

var swiper = new Swiper('.tabs__slider-swiper', {
  slidesPerView: 2.5,
  speed: 700,
  spaceBetween: 5,
  calculateHeight:true,
  breakpoints: {
    320: {
      slidesPerView: 2.5
    },
    820: {
      slidesPerView: 3.5
    },
    1024: {
      slidesPerView: 3.5
    },
  }
});

/* Smoothscroll по клику по якорю (работает если клик по элементу с классом .anchor-link) */

let anchor = document.querySelectorAll('.anchor-link') || false;

anchor.forEach(function(e) {
  e.addEventListener("click", function(el) {
    let anchorLink = e.getAttribute("href");
    el.preventDefault();
    console.log(anchorLink);
    TweenLite.to(window, 1, {scrollTo:{y: anchorLink, offsetY:130}});
  })
})

/* Accordeon */

class Accordion {

  constructor(selector) {
      this.selector = selector
  }

  createAccordion(selector) {
      const accordionList = document.querySelectorAll(this.selector);
      for (let element of accordionList) {
          element.addEventListener("click", function(){
              let classTrigger = 'active';
              this.classList.toggle(classTrigger);
              let panel = this.nextElementSibling;
              if (panel.style.maxHeight) {
                  panel.style.maxHeight = null;
                  panel.classList.toggle(classTrigger);
              } else {
                  panel.style.maxHeight = panel.scrollHeight + "px";
                  panel.classList.toggle(classTrigger);
              } 
          })
      }
  }
}

acc = new Accordion('.info__accordeon-head');
acc.createAccordion();

/* Аккордеон в моб меню */

mobAcc = new Accordion('.header-mob__accordeon-head');
mobAcc.createAccordion();

/* Маска */
let phoneMask = document.getElementById('form-cv-b-f') || false;
if (phoneMask) {
  var maskOptions = {
      mask: '{0} (000) 000-00-00'
    };
    let mask = IMask(phoneMask, maskOptions);
}

/* Авторесайз инпута textarea */

const textarea = document.querySelectorAll("textarea") || false;


textarea.forEach(function(e) {
  e.addEventListener('input', autoResize, false);

  function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  }
})

/* Селекты */

// var selectSpecialist = new Choices('#select-specialist', {
//   searchEnabled: false,
//   itemSelectText: '',
//   shouldSort: false,
// });

const spceialistChoices = document.getElementById('select-specialist') || false;

if (spceialistChoices) {

  var customTemplates = new Choices(
    document.getElementById('select-specialist'),
    {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      callbackOnCreateTemplates: function(strToEl) {
        var classNames = this.config.classNames;
        var itemSelectText = this.config.itemSelectText;
        return {
          item: function(classNames, data) {
            return strToEl(
              '\
              <div\
                    class="' +
                        String(classNames.item) +
                        ' ' +
                        String(
                          data.highlighted
                            ? classNames.highlightedState
                            : classNames.itemSelectable
                        ) +
                        '"\
                    data-item\
                    data-id="' +
                        String(data.id) +
                        '"\
                    data-value="' +
                        String(data.value) +
                        '"\
                    ' +
                        String(data.active ? 'aria-selected="true"' : '') +
                        '\
                    ' +
                        String(data.disabled ? 'aria-disabled="true"' : '') +
                        '\
                    >\
                    <span class="select__image"></span> ' +
                        String(data.label) +
                        '\
                  </div>\
          '
            );
          },
          choice: function(classNames, data) {
            return strToEl(
              '\
          <div\
            class="' +
                String(classNames.item) +
                ' ' +
                String(classNames.itemChoice) +
                ' ' +
                String(
                  data.disabled
                    ? classNames.itemDisabled
                    : classNames.itemSelectable
                ) +
                '"\
            data-select-text="' +
                String(itemSelectText) +
                '"\
            data-choice \
            ' +
                String(
                  data.disabled
                    ? 'data-choice-disabled aria-disabled="true"'
                    : 'data-choice-selectable'
                ) +
                '\
            data-id="' +
                String(data.id) +
                '"\
            data-value="' +
                String(data.value) +
                '"\
            ' +
                String(
                  data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
                ) +
                '\
            >\
            <span class="select__image"></span> ' +
                String(data.label) +
                '\
          </div>\
        '
            );
          },
        };
      },
    }
  );
  
  var selectPlace = new Choices('#select-place', {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });
}


/* Фильтры */

const showFilterBtn = document.getElementById('showFilterBtn') || false;
const moreFilter = document.querySelector('.specialists__form-bottom') || false;

if (showFilterBtn) {
  function showMoreFilters() {
    if (showFilterBtn) {
      showFilterBtn.addEventListener("click", function(){
        let classTrigger = 'active';
        showFilterBtn.classList.toggle(classTrigger);
        moreFilter.classList.toggle(classTrigger);
    })
    }
  }
  
  showMoreFilters();
}



/* Слайдер в статье */

var swiper = new Swiper('.article__slider-swiper', {
  slidesPerView: 4,
  fadeEffect: { crossFade: true },
  speed: 700,
  spaceBetween: 32,
  calculateHeight:true,
  navigation: {
    nextEl: '.specialist__slider-btn--next',
    prevEl: '.specialist__slider-btn--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2.2
    },
    900: {
      slidesPerView: 2.3
    },
    1024: {
      slidesPerView: 2.8
    }
  }
});


// Кастомный select для новых страниц 
const defaultSelect = () => {
  const element = document.querySelector('.custom-select');
  const example = new Choices(element, { 
    itemSelectText: '',
    searchEnabled: false,
    placeholder: true,
  });
};

defaultSelect();