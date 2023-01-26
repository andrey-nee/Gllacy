const body = document.querySelector('.page-body')

const searchButton = document.getElementById('button-search')
const searchForm = document.getElementById('form-search')
const authorizationButton = document.getElementById('button-authorization')
const authorizationForm = document.getElementById('form-authorization')
const cartButton = document.getElementById('button-cart')
const cartForm = document.getElementById('form-cart')

// Проверка наличия слайдера на странице
let paginatorButtons = document.querySelectorAll('.promo__button--paginator')
if (paginatorButtons.length > 0) {
  // Пагинатор слайдов
  const buttonSlide_1 = document.querySelector('.promo__button--paginator-1')
  const buttonSlide_2 = document.querySelector('.promo__button--paginator-2')
  const buttonSlide_3 = document.querySelector('.promo__button--paginator-3')

  buttonSlide_1.addEventListener('click', function() {
    if (body.classList.contains('page-body--slider-1')) {
      console.log('Слайд-1 уже выбран')
    } else {
      console.log('Выбран Слайд-1')
      body.classList.remove('page-body--slider-2')
      body.classList.remove('page-body--slider-3')
      body.classList.add('page-body--slider-1')
      buttonSlide_2.classList.remove('promo__button--active')
      buttonSlide_3.classList.remove('promo__button--active')
      buttonSlide_1.classList.add('promo__button--active')
    }
  });

  buttonSlide_2.addEventListener('click', function() {
    if (body.classList.contains('page-body--slider-2')) {
      console.log('Слайд-2 уже выбран')
    } else {
      console.log('Выбран Слайд-2')
      body.classList.remove('page-body--slider-1')
      body.classList.remove('page-body--slider-3')
      body.classList.add('page-body--slider-2')
      buttonSlide_1.classList.remove('promo__button--active')
      buttonSlide_3.classList.remove('promo__button--active')
      buttonSlide_2.classList.add('promo__button--active')
    }
  });

  buttonSlide_3.addEventListener('click', function() {
    if (body.classList.contains('page-body--slider-3')) {
      console.log('Слайд-3 уже выбран')
    } else {
      console.log('Выбран Слайд-3')
      body.classList.remove('page-body--slider-1')
      body.classList.remove('page-body--slider-2')
      body.classList.add('page-body--slider-3')
      buttonSlide_1.classList.remove('promo__button--active')
      buttonSlide_2.classList.remove('promo__button--active')
      buttonSlide_3.classList.add('promo__button--active')
    }
  });
} else {
  console.log('Слайдер не найден')
};


// Показываем форму поиска
searchButton.addEventListener('click', function(evt1) {
    evt1.preventDefault();
    console.log('Показываю форму поиска')
    searchForm.classList.toggle('active')
    searchForm.classList.toggle('current-active-popup')
    searchButton.classList.toggle('current-active-button')
});

// Показываем форму авторизации
authorizationButton.addEventListener('click', function(evt2) {
  evt2.preventDefault();
  console.log('Показываю форму авторизации')
  authorizationForm.classList.toggle('active')
  authorizationForm.classList.toggle('current-active-popup')
  authorizationButton.classList.toggle('current-active-button')
});

// Показываем модальное окно корзины
cartButton.addEventListener('click', function(evt3) {
  evt3.preventDefault();
  console.log('Показываю модальное окно корзины')
  cartForm.classList.toggle('active')
  cartForm.classList.toggle('current-active-popup')
  cartButton.classList.toggle('current-active-button')
});

// Закрываем форму поиска при клике за его пределами
document.addEventListener( 'click', (e) => {
  const ActivePopups = document.querySelectorAll('.current-active-popup')
  const currentActiveButton = document.querySelector('.current-active-button')
  const currentActivePopup = document.querySelector('.current-active-popup')
  console.log('Открыто модалок: ', ActivePopups.length)
  if (ActivePopups.length > 0) {
    let withinButton = e.composedPath().includes(currentActiveButton)
    let withinPopup = e.composedPath().includes(currentActivePopup)
    if (currentActivePopup.classList.contains('active')) {
      if (!withinButton && !withinPopup) {
        console.log('Скрываю открытую форму:',currentActivePopup.id)
        currentActivePopup.classList.remove('active')
        currentActivePopup.classList.remove('current-active-popup')
        currentActiveButton.classList.remove('current-active-button')
        console.log('Открыто модалок: ', ActivePopups.length)
      }
    }
  }
});
